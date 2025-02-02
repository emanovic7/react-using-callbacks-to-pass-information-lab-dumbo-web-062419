import React, { Component } from 'react';

export default class ColorSelector extends Component {

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div onClick={this.handleClick} id={str} key={idx} className="color-swatch" style={{backgroundColor: str}}/>
    })
  )

  handleClick = (event) => {
    //console.log(event.target.id)
    this.props.onChangeColor(event.target.id)
  }

  render() {
    console.log(this.props)
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }

}
