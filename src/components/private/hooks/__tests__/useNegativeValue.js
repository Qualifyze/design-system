import useNegativeValue from '../useNegativeValue'

describe('private | hooks | useNegativeValue', () => {
  test('when you pass a number it returns the negative of that number', () => {
    expect(useNegativeValue(2)).toEqual(-2)
  })

  test('if you pass an array of numbers you get an array of their negative ones returned', () => {
    expect(useNegativeValue([1, 2, 3, 4])).toEqual([-1, -2, -3, -4])
  })

  test('if you pass something that is not a number you get 0 back', () => {
    expect(useNegativeValue('t')).toEqual(-0)
  })

  test('if you pass an array of mixed values we only negate the ones we can, the others are 0', () => {
    expect(useNegativeValue([1, 't', 3])).toEqual([-1, -0, -3])
  })
})
