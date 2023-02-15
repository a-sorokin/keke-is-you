import { TCell, TField } from "levels/types";
import { TActionValue, TMaterialObjects, TModelNameValue } from "models/types";
import { M_OBJECT_TYPES, MODELS_WORDS_RELATIONS } from "models/models";
import { TStateLogicBlocks } from "store/types";

type TRules = { name: TModelNameValue; action: TActionValue }[];

const updateMaterialObjects = (
  materialObjects: TMaterialObjects,
  rules: TRules
) => {
  materialObjects.forEach((object) => {
    if (object.type !== M_OBJECT_TYPES.simple) return;

    const rulesForObj: { [key: TActionValue]: boolean } = {};
    rules.forEach((rule) => {
      if (object.name === rule.name) {
        rulesForObj[rule.action] = true;
      }
    });

    object.props = rulesForObj;
  });
};

const createRule = (
  wordCell: TCell | null,
  actionCell: TCell | null,
  rules: TRules
) => {
  if (!wordCell || !actionCell) return;

  const wordObj = wordCell.materialObjects[0];
  const actionObj = actionCell.materialObjects[0];

  if (
    wordObj?.type !== M_OBJECT_TYPES.word ||
    actionObj?.type !== M_OBJECT_TYPES.action
  ) {
    return;
  }

  const wordName = wordCell.materialObjects[0].name;
  const materialObjectName = MODELS_WORDS_RELATIONS[wordName];

  if (actionObj.actionProps) {
    const rule = {
      name: materialObjectName,
      action: actionObj.actionProps.action,
    };

    rules.push(rule);
  }
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

  updateMaterialObjects(materialObjects, rules);

  return materialObjects;
};
