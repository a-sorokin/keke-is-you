export type TLevel = {
  id: string;
  name: string;
  description: string;
};

export type TLevels = TLevel[];

export const levels: TLevels = [
  {
    id: "0",
    name: "Level 0",
    description: "Level 0 description",
  },
];
