import { TCell, TField } from "levels/types";
import {
  TActionValue,
  TMaterialObject,
  TMaterialObjects,
  TModelNameValue,
} from "models/types";
import {
  ACTIONS,
  M_OBJECT_TYPES,
  models,
  MODELS_WORDS_RELATIONS,
} from "models/models";
import { TStateLogicBlocks } from "store/types";

type TRules = {
  name: TModelNameValue;
  action: TActionValue;
  replaceTo?: TModelNameValue;
}[];

const createRule = (
  firstCell: TCell | null,
  secondCell: TCell | null,
  rules: TRules
) => {
  if (!firstCell || !secondCell) return;

  const firstObj = firstCell.materialObjects[0];
  const secondObj = secondCell.materialObjects[0];

  if (firstObj?.type !== M_OBJECT_TYPES.word) return;
  if (
    secondObj?.type !== M_OBJECT_TYPES.action &&
    secondObj?.type !== M_OBJECT_TYPES.word
  )
    return;

  const firstCellName = firstCell.materialObjects[0].name;
  const materialObjectName = MODELS_WORDS_RELATIONS[firstCellName];

  if (secondObj.actionProps) {
    rules.push({
      name: materialObjectName,
      action: secondObj.actionProps.action,
    });
    return;
  }

  rules.push({
    name: materialObjectName,
    action: ACTIONS.replace,
    replaceTo: MODELS_WORDS_RELATIONS[secondObj.name],
  });
};

const transformMaterialObjects = (
  materialObjects: TMaterialObjects,
  rules: TRules
) => {
  const transformRules = rules.filter(
    (rule) => rule.action === ACTIONS.replace
  );

  const sourceObjects = transformRules.reduce((source, rule) => {
    if (!rule.replaceTo) return source;
    const getSourceObj = models[rule.replaceTo as TModelNameValue];
    source[rule.replaceTo] = getSourceObj();
    return source;
  }, {} as { [key: TModelNameValue]: TMaterialObject });

  transformRules.forEach((rule) => {
    materialObjects.forEach((object) => {
      if (object.name !== rule.name) return;

      const sourceObj = sourceObjects[rule.replaceTo as TModelNameValue];
      object.name = sourceObj.name;
      object.icon = sourceObj.icon;
    });
  });
};

const updateMaterialObjects = (
  materialObjects: TMaterialObjects,
  rules: TRules
) => {
  const objRules = rules.filter((rule) => rule.action !== ACTIONS.replace);

  materialObjects.forEach((object) => {
    if (object.type !== M_OBJECT_TYPES.simple) return;

    const rulesForObj: { [key: TActionValue]: boolean } = {};
    objRules.forEach((rule) => {
      if (object.name !== rule.name) return;
      rulesForObj[rule.action] = true;
    });

    object.props = rulesForObj;
  });
};

export const checkRules = (
  field: TField,
  materialObjects: TMaterialObjects,
  logicBlocks: TStateLogicBlocks
): TMaterialObjects => {
  const rules: TRules = [];

  logicBlocks.forEach((blockId) => {
    const block = materialObjects.find((obj) => obj.id === blockId);
    if (!block) return;
    const { adjoiningCells } = field[block.coordinates];
    createRule(adjoiningCells.up, adjoiningCells.down, rules);
    createRule(adjoiningCells.left, adjoiningCells.right, rules);
  });

  transformMaterialObjects(materialObjects, rules);
  updateMaterialObjects(materialObjects, rules);

  return materialObjects;
};
