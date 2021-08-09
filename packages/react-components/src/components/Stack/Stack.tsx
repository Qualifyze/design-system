import React from 'react';
import flattenChildren from 'react-keyed-flatten-children';

import { Box } from '../Box/Box';
import { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';

const alignToDisplay = {
  left: 'block',
  center: 'flex',
  right: 'flex',
} as const;

const alignToFlexAlign = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
} as const;

interface UseStackItemProps {
  align: AlignProperty;
  space: string;
}

type AlignProperty = 'left' | 'center' | 'right';

const useStackItem = ({ align, space }: UseStackItemProps) => ({
  display: alignToDisplay[align],
  alignItems: alignToFlexAlign[align],
  pt: space,
  width: '100%',
});

export interface StackProps {
  children: ReactNodeNoStrings;
  as?: any;
  space?: any;
  align?: AlignProperty;
}

export const Stack = ({
  children,
  as,
  space = '0',
  align = 'left',
}: StackProps) => {
  const stackItems = flattenChildren(children);

  // when the stack should be a list we need to render `<li>`s
  const isList = as === 'ol' || as === 'ul';
  const stackItemComponent = isList ? 'li' : 'div';
  const stackItemCSS = useStackItem({ space, align });

  return (
    <Box as={as} css={{ margin: 0, padding: 0, mt: `-${space}` }}>
      {React.Children.map(stackItems, (child) => {
        return (
          <Box
            as={stackItemComponent}
            css={{ flexDirection: 'column', ...stackItemCSS }}
          >
            {child}
          </Box>
        );
      })}
    </Box>
  );
};
