import useColumns from '../useColumns'

describe('useColumns', () => {
  test('when you pass a number you get the expected styles', () => {
    expect(useColumns(2)).toEqual('repeat(2, 1fr)')
    expect(useColumns(4)).toEqual('repeat(4, 1fr)')
    expect(useColumns(10)).toEqual('repeat(10, 1fr)')
  })

  test('when you pass in responsive cols you should get out responsive flex width', () => {
    expect(useColumns([2, 4, 1])).toEqual([
      'repeat(2, 1fr)',
      'repeat(4, 1fr)',
      'repeat(1, 1fr)',
    ])
  })
})
