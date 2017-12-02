import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Guesses extends PureComponent {
  static PropTypes = {
    guesses: PropTypes.string,
    wrongCount: PropTypes.number,
    hasWon: PropTypes.string,
    guessCount: PropTypes.array,
  }

  render() {
    if(this.props.wrongCount === 5) {
      return <img src="" alt="pic"/>
    }
    if(this.props.wrongCount === 4) {
      return <img src="" alt="pic"/>
    }
    if(this.props.wrongCount === 3) {
      return <img src="" alt="pic"/>
    }
    if(this.props.wrongCount === 2) {
      return <img src="" alt="pic"/>
    }
    if(this.props.wrongCount === 1) {
      return <img src="" alt="pic"/>
    }
    if(this.props.wrongCount === 0) {
      return <img src="" alt="pic"/>
    }

    return(
      <h1>{ this.props.content }</h1>
    )
  }
}

export default Guesses
