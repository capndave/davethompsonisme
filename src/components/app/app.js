import React from 'react';
import Header from '../header/header'
import Main from '../main/main'
import './app.css'
import { animate, appear } from '../../mixins/applyStyle'
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
    console.log('Clicked toggleActiveElementIndex')
    this.setState({
      activeElementIndex: +!this.state.activeElementIndex
    })
  }

  componentDidMount() {

    /* Check for cookie (shows whether logged in in the past day) */
    if (cookie.exists()) {
      animate()
      // setTimeout(() => {
      //   this.setState({
      //     visible: true
      //   })
      // }, 5000)

    } else {
      
      /* Make Title Visible */
      appear() 

      /* Make Content Visible */
      this.setState({
        visible: true
      })
    }

    /* Set/update cookie - shows site has been visited */
    cookie.set()

  }

  render() {

    return (
      <div className="App">
        <div
          className={'icon-left-open ' + (this.state.visible ? '' : 'opacity-0')}
          onClick={this.toggleActiveElementIndex}
        ></div>
        <div id="content">
          <Header
            visible={this.state.visible}
          />
          <Main
            activeElementIndex={this.state.activeElementIndex}
            visible={this.state.visible}
          />
        </div>
        <div
          className={'icon-right-open ' + (this.state.visible ? '' : 'opacity-0')}
          onClick={this.toggleActiveElementIndex}
        ></div>
      </div>
    );
  }
}

export default App;
