import React, { PureComponent } from 'react'
import Guesses from './guesses.js'

class Hangman extends PureComponent {
  render() {
    return(
      <div>
      <Guesses />
      </div>
    )
  }
}

export default Hangman
