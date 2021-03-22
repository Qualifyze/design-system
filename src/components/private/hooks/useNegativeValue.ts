export const useNegativeValue = (
  value: ReadonlyArray<number> | number
): number[] => {
  return [...(value as number[])].map(val => -Math.abs(val));
};
