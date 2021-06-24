import useAlignment from '../useAlignment'

describe('useAlignment', () => {
  test('when you pass a single value you get the expected styles', () => {
    const alignRight = useAlignment('right')
    const alignLeft = useAlignment('left')
    const alignCenter = useAlignment('center')

    expect(alignRight).toEqual('flex-end')
    expect(alignLeft).toEqual('flex-start')
    expect(alignCenter).toEqual('center')
  })

  test('when you pass a responsive array you should get out an array', () => {
    const responsiveAlignment = useAlignment(['right', 'left', 'center'])
    expect(responsiveAlignment).toEqual(['flex-end', 'flex-start', 'center'])
  })
})
