// *Heavily* inspired by (and copied from) Braid https://github.com/seek-oss/braid-design-system/blob/26ea250b1565a1d65099ff3298fd474dd6fd1a10/lib/components/Stack/Stack.tsx
import * as React from 'react';
import flattenChildren from 'react-keyed-flatten-children';
import { ResponsiveStyleValue } from 'theme-ui';
import { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import { useNegativeValue } from '../private/hooks/useNegativeValue';
import { Align } from '../private/align';
import { Box } from '../Box/Box';

// const alignToDisplay = {
//   left: 'block',
//   center: 'flex',
//   right: 'flex',
// } as const;

export const validStackComponents = ['div', 'ol', 'ul'] as const;

// interface UseStackItemProps {
//   align: ResponsiveProp<Align>;
//   space: BoxProps['paddingTop'];
// }

export interface StackProps {
  as?: typeof validStackComponents[number];
  children: ReactNodeNoStrings;
  space: ResponsiveStyleValue<number>;
  align?: ResponsiveStyleValue<Align>;
}

export const Stack = ({
  as = `div`,
  space = 0,
  children,
  align = `left`,
}: StackProps) => {
  const stackItems = flattenChildren(children);

  // when the stack should be a list we need to render `<li>`s
  const isList = as === 'ol' || as === 'ul';
  const stackItemComponent = isList ? 'li' : 'div';
  //  const stackItemProps = useStackItem({ space, align })

  return (
    <Box as={as} sx={{ mt: useNegativeValue(space) }}>
      {React.Children.map(stackItems, child => {
        return (
          <Box as={stackItemComponent} sx={{ pt: space, width: '100%' }}>
            {child}
          </Box>
        );
      })}
    </Box>
  );
};
