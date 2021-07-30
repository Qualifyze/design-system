import { theme } from '../../util/style'

export default {
  selected: theme.colors.primary[600],
  hoverBackgroundControl: theme.colors.secondary[100],
  hoverOverControl: theme.colors.grey[800],
  controlBorder: theme.colors.grey[500],
  hoverOverOption: theme.colors.primary[100],
  valueContainerTextColor: 'black',
  backGroundControl: 'white',
  optionTextColor: theme.colors.grey[900],
  optionTextSelected: theme.colors.white,
  placeholderColor: theme.colors.grey[700],
  selectedError: theme.colors.red[600],
  hoverOverControlError: theme.colors.red[700],
  controlBorderError: theme.colors.red[500],
  backGroundControlError: theme.colors.red[100],
  disabledBackground: theme.colors.grey[200],
  disabled: theme.colors.grey[200],
  shadowFocusRing: theme.shadows.focusRing,
  // nest these incase we style up something else for multi select
  // later
  multiSelectItem: {
    label: {
      backgroundColor: theme.colors.grey[300],
      color: theme.colors.grey[800],
      borderRadius: theme.radii[3],
    },
  },
}
