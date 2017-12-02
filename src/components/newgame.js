import React, { PureComponent } from 'react'

class NewGame extends PureComponent {
  render() {
    return(
      <h1>{ this.props.content }</h1>
    )
  }
}

export default NewGame
