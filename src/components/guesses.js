import React, { PureComponent } from 'react'

class Guesses extends PureComponent {

  render() {
    return(
      <h1>{ this.props.content }</h1>
    )
  }
}

export default Guesses
