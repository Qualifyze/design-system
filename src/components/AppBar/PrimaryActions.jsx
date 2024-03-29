import PropTypes from 'prop-types'

export default function AppBarPrimaryActions({ children }) {
  return children
}

AppBarPrimaryActions.dsName = 'AppBarPrimaryActions'
AppBarPrimaryActions.propTypes = { children: PropTypes.node }
AppBarPrimaryActions.defaultProps = { children: null }
