import React from 'react';
import Header from '../header/header'
import Main from '../main/main'
import './app.css'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      activeElementIndex: 0
    }
    this.toggleActiveElementIndex = this.toggleActiveElementIndex.bind(this)
  }

  toggleActiveElementIndex() {
    console.log('Clicked toggleActiveElementIndex')
    this.setState({
      activeElementIndex: +!this.state.activeElementIndex
    })
  }
 
  render() {
  return (
    <div className="App">
      <div 
        className="icon-left-open"
        onClick={this.toggleActiveElementIndex}
      ></div>
      <div id="content">
        <Header />
        <Main activeElementIndex={this.state.activeElementIndex} />
      </div>
      <div
        className="icon-right-open"
        onClick={this.toggleActiveElementIndex}
      ></div>
    </div>
  );
  }
}

export default App;
