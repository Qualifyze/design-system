import useAlignment from '../useAlignment'

describe('useAlignment', () => {
  test('when you pass a single value you get the expected styles', () => {
    expect(useAlignment('right')).toEqual('flex-end')
    expect(useAlignment('left')).toEqual('flex-start')
    expect(useAlignment('center')).toEqual('center')
  })

  test('when you pass a responsive array you should get out an array', () => {
    expect(useAlignment(['right', 'left', 'center'])).toEqual([
      'flex-end',
      'flex-start',
      'center',
    ])
  })
})
