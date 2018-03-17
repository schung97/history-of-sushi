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
        <details className="suggested drop-button" open>
          <summary>Suggested Restaurants</summary>
          <SuggestedList restaurants={this.props.suggestions} handleClick={this.handleClick}/>
        </details>
      )
    }
  }

}

const mapStateToProps = state => {
  return { suggestions: state.auth.currentUser.suggestions }
}

export default IsAuthenticated(connect(mapStateToProps)(Suggested));
