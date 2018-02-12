import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showCurrentSuggestion } from '../../_actions/PageAction'
import IsAuthenticated from '../../IsAuthenticated';

// ** files ** //
import SuggestedList from './SuggestedList';
import '../../css/DropdownBar.css';


class Suggested extends React.Component {

  handleLike = (restaurant, history) => {
    // this.props.createFavorite()
    //this.props.
  }

  render () {

    if ( this.props.suggestions === undefined ) {
      return ( <SuggestedList restaurants={"hi im here because of undefined"}/> )
    } else {
      return (
        <div className="suggested">
          <button className="drop-button">Suggested Restaurants</button>
            <SuggestedList restaurants={this.props.suggestions} handleClick={this.handleClick}/>
        </div>
      )
    }
  }

}

const mapStateToProps = state => {
  return { suggestions: state.user.suggestions }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ showCurrentSuggestion }, dispatch);
}


export default IsAuthenticated(connect(mapStateToProps, mapDispatchToProps)(Suggested));
