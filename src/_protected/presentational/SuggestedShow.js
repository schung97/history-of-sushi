import React from 'react';
import { connect } from 'react-redux';
import IsAuthenticated from '../../IsAuthenticated';
// import { bindActionCreators } from 'redux';

const SuggestedShow = (props) => {
console.log('suggest', props)
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




const mapStateToProps = state => {
  return { page: state.page.show.suggested }
}
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ makeNewUser }, dispatch);
// }
export default IsAuthenticated(connect(mapStateToProps)(SuggestedShow));
