import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    banana: 0,
    count: 0,
  }

  mangoCounter = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  bananaCounter = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {count, banana} = this.state

    return (
      <div className="fruits-container">
        <div className="fruits-counter-container">
          <div className="fruits-counter-text">
            <h1 className="text">
              Bob ate <span className="mango-counter">{count}</span> mangoes
              <span className="banana-counter">{banana}</span> bananas
            </h1>
          </div>
          <div className="fruites-images-container">
            <div className="mango-container">
              <img
                className="mango"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <div className="counter-button">
                <button className="Eat-counter" onClick={this.mangoCounter}>
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="banana-container">
              <img
                className="banana"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <div className="counter-button">
                <button className="Eat-counter" onClick={this.bananaCounter}>
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
