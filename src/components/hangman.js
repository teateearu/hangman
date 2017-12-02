import React, { PureComponent } from 'react'

class Hangman extends PureComponent {
  render() {
    return(
      <h1>{ this.props.content }</h1>
    )
  }
}

export default Hangman
