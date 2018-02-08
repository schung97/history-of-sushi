import React from 'react';
import { connect } from 'react-redux';
import ContentInfo from '../presentational/ContentInfo';
// import { bindActionCreators } from 'redux';
// import { getContentsAndQuestionsByCategory, getUserContents } from '../ContentAction';

class Content extends React.Component {

  render() {

    if ( this.props.contents === undefined ) {
      return (<ContentInfo info={'im undefined'}/>)
    } else {
      const level = this.props.contents.find( content => {
        return content.category === this.props.userRank

      })

      return (
        <ContentInfo info={level}/>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    contents: state.content.contents,
    questions: state.content.questions,
    userID: state.auth.currentUser.id,
    userRank: state.auth.currentUser.knowledge
  }
}

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({  getContentsAndQuestionsByCategory, getUserContents }, dispatch);
// }

export default connect(mapStateToProps)(Content);
