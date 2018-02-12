import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import IsAuthenticated from '../../IsAuthenticated';
// import { bindActionCreators } from 'redux';

const SuggestedShow = (props) => {
    if (props.page === undefined) {
      return (<div> Suggestions</div>)
    } else {
      return (
        <div>
          <img src={`${props.page.photos[0]}`} alt={`${props.page.restaurant}pic1`}/>
          <dl>{ props.page.restaurant }</dl>
          <dl>{ props.page.rating }</dl>
          <dl>{ props.page.address }</dl>
          <dl>{ props.page.phone }</dl>
          <dl>{ props.page.review_count }</dl>
          <dl>{ props.page.url }</dl>
        </div>
      )
    }

}




const mapStateToProps = (state, prevProps) => {
  const suggestion = state.user.suggestions.find( s => s.id === Number(prevProps.match.params.suggestion_id))
  return {
    page: suggestion,
  }
}
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ makeNewUser }, dispatch);
// }
export default IsAuthenticated(withRouter(connect(mapStateToProps)(SuggestedShow)));
