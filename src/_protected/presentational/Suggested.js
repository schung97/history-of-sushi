import React from 'react';
import { connect } from 'react-redux';
import SuggestedShow from './SuggestedShow';
// import { bindActionCreators } from 'redux';
//

const Suggested = (props) => {

  if ( props.suggestions === undefined ) {
    return ( <SuggestedShow restaruant={"hi im here because of undefined"}/> )
  } else {
    return (
      <div className="suggested">
        <details>
          <summary>Suggested Restaurants</summary>
            { props.suggestions.map( (s, i) => <SuggestedShow key={i} restaurant={s.restaurant}/>) }
        </details>
      </div>
    )
  }
}




const mapStateToProps = state => {
  return { suggestions: state.content.suggestions }
}
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ makeNewUser }, dispatch);
// }
export default connect(mapStateToProps)(Suggested);
