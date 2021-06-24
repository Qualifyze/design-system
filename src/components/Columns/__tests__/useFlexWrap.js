import useFlexWrap from '../useFlexWrap'

describe('Components | Columns | useFlexWrap', () => {
  test('Should not collapse if prop is undefined', () => {
    expect(useFlexWrap()).toEqual('nowrap')
  })

  test('Should not collapse if prop is invalid', () => {
    expect(useFlexWrap('invalid-value')).toEqual('nowrap')
  })

  test('Should collapse below mobile breakpoint and not collapse above', () => {
    expect(useFlexWrap('mobile')).toEqual([
      'wrap',
      'nowrap',
      'nowrap',
      'nowrap',
    ])
  })

  test('Should collapse below tablet breakpoint and not collapse above', () => {
    expect(useFlexWrap('tablet')).toEqual(['wrap', 'wrap', 'nowrap', 'nowrap'])
  })

  test('Should collapse below desktop breakpoint and not collapse above', () => {
    expect(useFlexWrap('desktop')).toEqual(['wrap', 'wrap', 'wrap', 'nowrap'])
  })
})
