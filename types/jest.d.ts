declare namespace jest {
  interface Matchers<R> {
    toHaveStyleRule: import('@emotion/jest').jest.Matchers<
      R
    >['toHaveStyleRule'];
  }
}
