import useAlignment from '../useAlignment'

describe('useAlignment', () => {
  test('when you pass a single value you get the expected styles', () => {
    const alignTop = useAlignment('top')
    const alignBottom = useAlignment('bottom')
    const alignCenter = useAlignment('center')

    expect(alignTop).toEqual({ alignItems: 'flex-start' })
    expect(alignBottom).toEqual({ alignItems: 'flex-end' })
    expect(alignCenter).toEqual({ alignItems: 'center' })
  })

  test('when you pass a responsive array you should get out an array', () => {
    const responsiveAlignment = useAlignment(['top', 'bottom', 'center'])
    expect(responsiveAlignment).toEqual({
      alignItems: ['flex-start', 'flex-end', 'center'],
    })
  })
})
