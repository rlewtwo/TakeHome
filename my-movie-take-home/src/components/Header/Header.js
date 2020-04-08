import React, {Component, Fragment} from 'react'

class Header extends Component {
  render(){
    return(
      <Fragment>
        <div className="header">
          <h1>Movie Info</h1> 
          <p>Welcome to small web app for finding information about all of your favorite movies using the The Movie Database API.</p>
        </div>
      </Fragment>
    )
  }
}
export default Header