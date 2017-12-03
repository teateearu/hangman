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
      return <img src="6.png" alt="pic"/>
    }
    if(this.props.wrongCount === 4) {
      return <img src="5.png" alt="pic"/>
    }
    if(this.props.wrongCount === 3) {
      return <img src="4.png" alt="pic"/>
    }
    if(this.props.wrongCount === 2) {
      return <img src="3.png" alt="pic"/>
    }
    if(this.props.wrongCount === 1) {
      return <img src="2.png" alt="pic"/>
    }
    if(this.props.wrongCount === 0) {
      return <img src="esimene.png" alt="pic"/>
    }

    return(
      <h1>{ this.props.content }</h1>
    )
  }
}

export default Guesses
