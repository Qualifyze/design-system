import useColumns from '../useColumns'

describe('useColumns', () => {
  test('when you pass a number you get the expected styles', () => {
    const flexColsTwo = useColumns(2)
    const flexColsFour = useColumns(4)
    const flexColsHundred = useColumns(100)

    expect(flexColsTwo).toEqual('0 0 50%')
    expect(flexColsFour).toEqual('0 0 25%')
    expect(flexColsHundred).toEqual('0 0 1%')
  })

  test('when you pass in responsive cols you should get out responsive flex width', () => {
    const responsiveFlexCols = useColumns([2, 4, 1])
    expect(responsiveFlexCols).toEqual(['0 0 50%', '0 0 25%', '0 0 100%'])
  })
})
