import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import MAKE_GUESS from '../actions/makeguess'

class Guess extends PureComponent {
  static PropTypes = {
    content: PropTypes.string.isRequired,
  }

  render() {
    return(
      <h1>{ this.props.content }</h1>
    )
  }
}

export default Guess
