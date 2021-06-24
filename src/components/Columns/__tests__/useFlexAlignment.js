import useFlexAlignment from '../useFlexAlignment'

describe('Components | Columns | useFlexAlignment', () => {
  describe('with strings as alignment props', () => {
    test('when no break is supplied', () => {
      expect(useFlexAlignment('left', 'bottom', undefined)).toEqual({
        justifyContent: [
          'flex-start',
          'flex-start',
          'flex-start',
          'flex-start',
        ],
        alignItems: ['flex-end', 'flex-end', 'flex-end', 'flex-end'],
      })
    })
    test('with break at mobile', () => {
      expect(useFlexAlignment('left', 'top', 'mobile')).toEqual({
        justifyContent: [
          'flex-start',
          'flex-start',
          'flex-start',
          'flex-start',
        ],
        alignItems: ['flex-start', 'flex-start', 'flex-start', 'flex-start'],
      })

      expect(useFlexAlignment('left', 'bottom', 'mobile')).toEqual({
        justifyContent: ['flex-end', 'flex-start', 'flex-start', 'flex-start'],
        alignItems: ['flex-start', 'flex-end', 'flex-end', 'flex-end'],
      })
    })

    test('with break at tablet', () => {
      expect(useFlexAlignment('left', 'bottom', 'tablet')).toEqual({
        justifyContent: ['flex-end', 'flex-end', 'flex-start', 'flex-start'],
        alignItems: ['flex-start', 'flex-start', 'flex-end', 'flex-end'],
      })
    })

    test('with a break at desktop', () => {
      expect(useFlexAlignment('left', 'bottom', 'desktop')).toEqual({
        justifyContent: ['flex-end', 'flex-end', 'flex-end', 'flex-start'],
        alignItems: ['flex-start', 'flex-start', 'flex-start', 'flex-end'],
      })
    })
  })

  describe('with responsive props for either alignY or align', () => {
    test('with a bp mobile and align props as an array', () => {
      expect(
        useFlexAlignment(['right', 'center', 'left'], 'bottom', 'mobile')
      ).toEqual({
        justifyContent: ['flex-end', 'center', 'flex-end', 'flex-end'],
        alignItems: ['flex-start', 'flex-end', 'flex-end', 'flex-end'],
      })
    })

    test('with both props as arrays', () => {
      expect(
        useFlexAlignment(
          ['center', 'center', 'left'],
          ['center', 'top', 'center'],
          'mobile'
        )
      ).toEqual({
        justifyContent: ['center', 'center', 'center', 'center'],
        alignItems: ['flex-start', 'flex-start', 'center', 'center'],
      })
    })

    test('on desktop bp with both as arrays', () => {
      expect(
        useFlexAlignment(
          ['left', 'right', 'left'],
          ['bottom', 'top', 'center'],
          'desktop'
        )
      ).toEqual({
        justifyContent: ['center', 'flex-start', 'flex-end', 'flex-start'],
        alignItems: ['flex-start', 'flex-end', 'flex-start', 'flex-end'],
      })
    })
  })
})
