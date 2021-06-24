import useDefaultWidth from '../useDefaultWidth'

describe('Components | Columns | useDefaultWidth', () => {
  describe('Should calculate default width based on number of children', () => {
    test('Given one child we get 100%', () => {
      expect(useDefaultWidth({ something: 'shape' })).toEqual('100.00%')
    })

    test('Given two children we get 50%', () => {
      expect(useDefaultWidth(['one', 'two'])).toEqual('50.00%')
    })

    test('Given three children we get 33.33%', () => {
      expect(useDefaultWidth(['one', 'two', 'three'])).toEqual('33.33%')
    })

    test('Given 4 children we get 25%', () => {
      expect(useDefaultWidth(['one', 'two', 'three', 'four'])).toEqual('25.00%')
    })
  })

  describe('Should return full width below `collapseBelow` breakpoint', () => {
    test('Given `collapseBelow="mobile"`', () => {
      expect(useDefaultWidth(['one', 'two'], 'mobile')).toEqual([
        '100.00%',
        '50.00%',
      ])
    })

    test('Given `collapseBelow="tablet"`', () => {
      expect(
        useDefaultWidth(['one', 'two', 'three', 'four'], 'tablet')
      ).toEqual(['100.00%', '100.00%', '25.00%'])
    })

    test('Given `collapseBelow="desktop"`', () => {
      expect(useDefaultWidth(['one', 'two', 'three'], 'desktop')).toEqual([
        '100.00%',
        '100.00%',
        '100.00%',
        '33.33%',
      ])
    })
  })
})
