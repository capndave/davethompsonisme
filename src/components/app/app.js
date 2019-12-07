import React from 'react';
import classnames from 'classnames'
import Header from '../header/header'
import Main from '../main/main'
import './app.css'
import title from '../../mixins/applyStyle'
import cookie from '../../mixins/cookie'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      activeElementIndex: 0,
      fadeIn: false,
      visible: false
    }
    this.toggleActiveElementIndex = this.toggleActiveElementIndex.bind(this)
  }

  /**
   * Toggles the activeElementIndex property
   * activeElementIndex is the index number that will be used on main section elements
   * @private
   * @method 
   */
  toggleActiveElementIndex() {
    this.setState({
      activeElementIndex: +!this.state.activeElementIndex
    })
  }
  
  /**
   * Set state properties fadeIn and visible to true
   * fadeIn and visible properties effect class names applied to elements 
   * @private
   * @method
   */
  revealContent() {
    this.setState({
      fadeIn: true,
      visible: true
    })
  }

  /**
   * Make the title and content appear
   */
  makeContentVisible() {
    title.appear()
    this.setState({
      visible: true
    })
  }

  /**
   *  Check if cookie exists and update UI appropriately
   *  Cookie shows whether logged in in the past day
   */
  handleAppearance() {
    if (cookie.exists()) {
      this.makeContentVisible()
    } else {
      title.animate()
        .then(this.revealContent.bind(this))
    }
    cookie.set()      // Update cookie to show site was visited
  }

  componentDidMount() {
    this.handleAppearance()
  }

  render() {

    return (
      <div className="App">
        <div
          className={
            'icon-left-open ' +
            (this.state.visible ? '' : 'opacity-0 ') +
            (this.state.fadeIn ? 'fade-in' : '')
          }
          onClick={this.toggleActiveElementIndex}
        ></div>
        <div id="content">
          <Header
            visible={this.state.visible}
            fadeIn={this.state.fadeIn}
          />
          <Main
            activeElementIndex={this.state.activeElementIndex}
            visible={this.state.visible}
            fadeIn={this.state.fadeIn}
          />
        </div>
        <div
          className={
            'icon-right-open ' +
            (this.state.visible ? '' : 'opacity-0 ') +
            (this.state.fadeIn ? 'fade-in' : '')
          }
          onClick={this.toggleActiveElementIndex}
        ></div>
      </div>
    );
  }
}

export default App;
