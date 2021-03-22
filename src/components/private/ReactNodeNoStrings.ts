import * as React from 'react';

interface ReactNodeArray extends Array<ReactNodeNoStrings> {}

export type ReactNodeNoStrings =
  | React.ReactElement
  | ReactNodeArray
  | boolean
  | null
  | undefined;
