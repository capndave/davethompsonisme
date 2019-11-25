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

  toggleActiveElementIndex() {
    this.setState({
      activeElementIndex: +!this.state.activeElementIndex
    })
  }

  revealContent() {
    /* Make Title Visible */
    title.appear()

    /* Make Content Visible */
    this.setState({
      fadeIn: true,
      visible: true
    })
  }

  handleAppearance() {
    /* Check for cookie (shows whether logged in in the past day) */
    if (cookie.exists()) {
      title.animate()
        .then(this.revealContent.bind(this))
    } else {
      this.revealContent()
    }
    /* Set/update cookie - shows site has been visited */
    cookie.set()
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
