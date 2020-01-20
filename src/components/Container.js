import PropTypes from 'prop-types'
import * as React from 'react'

const Container = ({children}) => (
  <div
    style={{
      pointerEvents: 'none',
      width: '80%',
      margin: '10px auto'
    }}
  >
    {children}
  </div>
)

Container.propTypes = {
  children: PropTypes.node.isRequired
}

export default Container
