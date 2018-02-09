import React from 'react';
import { connect } from 'react-redux';
import SuggestedShow from './SuggestedShow';
import { bindActionCreators } from 'redux';
//

const Suggested = (props) => {
console.log('suggested', props)
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


// export default Suggested;


const mapStateToProps = state => {
  console.log(state)
  return { suggestions: state.user.suggestions }
}
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ makeNewUser }, dispatch);
// }



export default connect(mapStateToProps)(Suggested);
