import React, { Component } from 'react'
import SAOne from './SA1.js'
import SATwo from './SA2.js'
import SAThree from './SA3.js'
import SAFour from './SA4.js'
class SubArticles extends Component {
  
 
  render() {
    return (
            <div className="small-12 columns other-articles">
            <h2>From around the Realm</h2>
            <SAOne />
            <SATwo />
            <SAThree />
            <SAFour />  
          </div>
    )
  }
}
export default SubArticles