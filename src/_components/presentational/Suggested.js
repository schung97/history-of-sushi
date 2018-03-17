import React from 'react';
import { connect } from 'react-redux';
import SuggestedList from './SuggestedList';
import IsAuthenticated from '../container/IsAuthenticated';


class Suggested extends React.Component {

  render () {
    if ( !this.props.suggestions ) {
      return ( <SuggestedList restaurants={[]}/> )
    } else {
      return (
        <div className="suggested drop-button">
          <h2>Suggested Restaurants</h2>
          <SuggestedList restaurants={this.props.suggestions} handleClick={this.handleClick}/>
        </div>
      )
    }
  }

}

const mapStateToProps = state => {
  return { suggestions: state.auth.currentUser.suggestions }
}

export default IsAuthenticated(connect(mapStateToProps)(Suggested));
