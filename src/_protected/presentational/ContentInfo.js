
import React from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
//

const ContentInfo = (props) => {


  return (
    <div>{`hi from content info, my props are ${props.info}` }</div>
  )

}

// const mapStateToProps = state => {
//   return {}
// }
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ makeNewUser }, dispatch);
// }
export default ContentInfo;
