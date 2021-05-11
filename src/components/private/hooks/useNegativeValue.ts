import { ResponsiveStyleValue } from 'theme-ui';

type Empty = undefined | null | false;

export function useNegativeValue(value: Empty): Empty;
export function useNegativeValue(value: number): number;
export function useNegativeValue(value: Readonly<number[]>): number[];
export function useNegativeValue(
  value: Readonly<ResponsiveStyleValue<number>>
): ResponsiveStyleValue<number> {
  if (value === null || typeof value === 'undefined' || !value) {
    return value;
  }
  if (Array.isArray(value)) {
    return [...value].map(val => -Math.abs(val));
  }
  return -Math.abs(value as number);
}

// export const useNegativeValue = <T extends ResponsiveStyleValue<number>>(
//   value: Readonly<T>
// ): number[] => {
//   if (value === null || typeof value === 'undefined') {
//     return value;
//   }

//   if (Array.isArray(value)) {
//     return [...value].map(val => -Math.abs(val));
//   }

//   return [-Math.abs((value as unknown) as number)];
// };
