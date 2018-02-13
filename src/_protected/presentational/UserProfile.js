
import React from 'react';
import Suggested from './Suggested';
import Favorited from './Favorited';
import ExtraStuff from './ExtraStuff';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, Link } from 'react-router-dom';

import Right from 'react-icons/lib/fa/angle-right';
import IsAuthenticated from '../../IsAuthenticated';
import { setCurrentCategory } from '../../_actions/ContentAction';

import '../../css/UserProfile.css';

//helper methods
import { randomlySelectOne, userRankByNum } from '../helpermethods';

class UserProfile extends React.Component {

  constructor(props) {
    super(props);

      this.state = {
        clicked: false
      }
  }

  handleRoute = (history) => {
    // this.props.setCurrentCategory(rank)
    history.push(`/sushi-knowledge`)
  }

  render() {
    console.log('pro',this.props.user_rank, this.props.user.knowledge)
    const facts = this.props.funFacts.facts.map( (fact, i) => <li key={i}>{fact.fact}</li> )
    const randomFact = randomlySelectOne(facts)

    return (
      <div className="user-profile">
        <div className="user-info">
          <img src="https://media.giphy.com/media/xUOwG7xTFIS7K5Z12o/giphy.gif" alt="default-pic"/>
          { this.props.user.id === undefined ?
            ( <ul><dl>not loaded</dl></ul> )
            :
            ( <ul>
                <dl>{`${this.props.user.firstname} ${this.props.user.lastname}`}</dl>
                <dl>Sushi Knowledge</dl>
                <dl>{this.props.user.knowledge}</dl>
              </ul>
            )
          }

          <div className="user-rank">
            <button onClick={ () => this.handleRoute(this.props.history, 'Beginning')}>Beginning</button>
            <button disabled={!(this.props.user_rank > 0)} onClick={ () => this.handleRoute(this.props.history)}>Rise of Sushi</button>
            <button disabled={!(this.props.user_rank > 1)} onClick={ () => this.handleRoute(this.props.history)}>Type</button>
            <button disabled={!(this.props.user_rank > 2)} onClick={ () => this.handleRoute(this.props.history)}>Etiquette</button>
            <button id="fact-dropdown" onClick={ () => this.setState({ clicked: !this.state.clicked }) }>Fun Fact</button>
            <div id="fact-dropdown-content">
              {randomFact}
            </div>
          </div>

        </div>

        <Suggested />
        <Favorited />
        <ExtraStuff />

        <Link to="/sushi-rank" id="right"><Right size={48}/></Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.currentUser,
    funFacts: state.json.contents[3],
    user_rank: userRankByNum(state.auth.currentUser.knowledge)
   }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setCurrentCategory }, dispatch);
}

export default IsAuthenticated(withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile)));
