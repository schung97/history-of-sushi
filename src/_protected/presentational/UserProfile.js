
import React from 'react';
import Suggested from './Suggested';
import Favorited from './Favorited';
import ExtraStuff from './ExtraStuff';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Right from 'react-icons/lib/fa/angle-right';
import IsAuthenticated from '../../IsAuthenticated';
// import { bindActionCreators } from 'redux';
import '../../css/UserProfile.css';

//helper methods
import { lockByRank } from '../helpermethods';

const UserProfile = (props) => {

  return (
  <div className="user-profile">
    <div className="user-info">
      <img src="https://media.giphy.com/media/xUOwG7xTFIS7K5Z12o/giphy.gif" alt="default-pic"/>
        { props.user.id === undefined ?
            ( <ul><dl>not loaded</dl></ul> )
            : ( <ul>
                  <dl>{`${props.user.firstname} ${props.user.lastname}`}</dl>
                  <dl>Sushi Knowledge</dl>
                  <dl>{props.user.knowledge}</dl>
                </ul> )
        }
      {lockByRank(props.user.knowledge)}
    </div>
    
    <Suggested />
    <Favorited />
    <ExtraStuff />

    <Link to="/sushi-rank" id="right"><Right size={48}/></Link>
</div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.auth.currentUser
   }
}
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ makeNewUser }, dispatch);
// }
export default IsAuthenticated(connect(mapStateToProps)(UserProfile));
