import useFlexDirection from '../useFlexDirection'

describe('Components | Columns | useFlexDirection', () => {
  describe('No collapse defined', () => {
    test('reverse false we get column layout', () => {
      expect(useFlexDirection(undefined)).toEqual('row')
    })
  })

  describe('Collapse defined as mobile', () => {
    test('reverse false we get the right responsive styles', () => {
      expect(useFlexDirection('mobile')).toEqual([
        'column',
        'row',
        'row',
        'row',
      ])
    })
  })

  describe('Collapse defined as tablet', () => {
    test('reverse false we get the right responsive styles', () => {
      expect(useFlexDirection('tablet')).toEqual([
        'column',
        'column',
        'row',
        'row',
      ])
    })
  })

  describe('Collapse defined as desktop', () => {
    test('reverse false we get the right responsive styles', () => {
      expect(useFlexDirection('desktop')).toEqual([
        'column',
        'column',
        'column',
        'row',
      ])
    })
  })
})
