import { ResponsiveStyleValue } from 'theme-ui';

export type Align = 'left' | 'center' | 'right';
export type AlignY = 'top' | 'center' | 'bottom';

export const alignToFlexAlign = (
  align: ResponsiveStyleValue<Align> | undefined
) =>
  mapResponsiveProp(align, {
    left: 'flexStart',
    center: 'center',
    right: 'flexEnd',
  });

export const alignYToFlexAlign = (
  alignY: ResponsiveStyleValue<AlignY> | undefined
) =>
  mapResponsiveProp(alignY, {
    top: 'flexStart',
    center: 'center',
    bottom: 'flexEnd',
  });
