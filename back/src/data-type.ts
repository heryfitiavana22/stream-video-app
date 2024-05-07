export type Required<T> = {
  [K in keyof T]-?: T[K];
};
