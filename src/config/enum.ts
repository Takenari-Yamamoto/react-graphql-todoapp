export const STATUS = {
  TODO: 0,
  DOING: 1,
  DONE: 2,
  PENDING: 3,
} as const;

export type Status = 0 | 1 | 2 | 3;
