import { useNegativeValue } from './useNegativeValue';

describe('useNegativeValue', () => {
  const testData = [
    [2, [-2]],
    [
      [2, 2],
      [-2, -2],
    ],
    [
      [-2, 2],
      [-2, -2],
    ],
    [
      [0, 2],
      [-0, -2],
    ],
  ] as const;

  test.each(testData)('%p returns %p', (props, expected) => {
    const blubb = useNegativeValue(props);
    expect(blubb).toEqual(expected);
  });
});
