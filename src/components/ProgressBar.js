import PropTypes from 'prop-types'
import * as React from 'react'
import Container from './Container'

const ProgressBar = ({length, progress, containerStyle, barStyle}) => {
  const percentage = (progress / length) * 100
  return (
    <Container>
      <div
        style={{
          height: 15,
          border: '1px solid black',
          width: '100%',
          ...containerStyle
        }}
      >
        <div
          style={{
            display: 'block',
            height: '100%',
            width: `${percentage}%`,
            transition: 'width 200ms',
            background: 'black',
            ...barStyle
          }}
        />
      </div>
    </Container>
  )
}

ProgressBar.propTypes = {
  length: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  containerStyle: PropTypes.object,
  barStyle: PropTypes.object
}

export default ProgressBar
