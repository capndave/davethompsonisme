import React from "react"
import pic from '../../assets/me.png'

class DaveImage extends React.Component {
  render () {
      return (
        <section id='dave-img-container'>
          <img src={pic} alt="Photo" />
         </section>
      )
  }
}

export default DaveImage