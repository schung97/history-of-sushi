
import React from 'react';
import Suggested from '../presentational/Suggested';
import Favorited from '../presentational/Favorited';
import ExtraStuff from '../presentational/ExtraStuff';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Right from 'react-icons/lib/fa/angle-right';
// import { bindActionCreators } from 'redux';
import '../../css/UserProfile.css';

const UserProfile = (props) => {

  return (
  <div className="user-profile">
    <div className="user-info">
      <img src="https://media.giphy.com/media/xUOwG7xTFIS7K5Z12o/giphy.gif" alt="default-pic"/>
        { props.user === undefined ?
            ( <ul><dl>not loaded</dl></ul> )
            : ( <ul>
                  <dl>{`${props.user.firstname} ${props.user.lastname}`}</dl>
                  <dl>Sushi Knowledge</dl>
                  <dl>{props.user.knowledge}</dl>
                </ul> )
        }
      <ul className="user-rank">
        <li>Beginning</li>
        <li>Rise of Sushi</li>
        <li>Modern Evolution</li>
        <li>Type</li>
        <li>Etiquette</li>
        <li>Fun Fact</li>
      </ul>
    </div>
    <Suggested />
    <Favorited />
    <ExtraStuff />
    <Link to="/sushi-rank"><h2><Right /></h2></Link>
</div>
  )
}

const mapStateToProps = state => {
  return { user: state.content.info }
}
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ makeNewUser }, dispatch);
// }
export default connect(mapStateToProps)(UserProfile);
