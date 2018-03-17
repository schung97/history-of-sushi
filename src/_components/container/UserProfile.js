
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, Link } from 'react-router-dom';
import { setCurrentCategory } from '../../_actions/ContentAction';
import { randomlySelectOne, userRankByNum } from '../helpermethods';

import Suggested from '../presentational/Suggested';
import Favorited from '../presentational//Favorited';
import IsAuthenticated from './IsAuthenticated';


class UserProfile extends React.Component {

  constructor(props) {
    super(props);

      this.state = {
        clicked: false
      }
  }
  handleRoute = (history) => {
    // this.props.setCurrentCategory(rank)
    history.push(`/sushi-knowledge/${'Beginning'}`)
  }
  render() {
    console.log('pro',this.props.user_rank, this.props.user.knowledge)
    const facts = this.props.funFacts.facts.map( (fact, i) => {
      const removeColon = fact.fact.split(':')
      const words = removeColon.map( (word, k) => k === 0 ? <span key={k}><em>{word}</em><br/><br/></span> : <span key={k}>{word}</span> )
      return (<p key={i}>{words}</p>)
    })
    const randomFact = randomlySelectOne(facts)

    return (
      <div className="user-profile">
        <div className="user-info">
          { this.props.user.id === undefined ?
            ( <p>not loaded</p> )
            :
            (
              <div>
                <h2>{`${this.props.user.firstname} ${this.props.user.lastname}`}</h2>
                <p>Sushi Knowledge:<br/>{this.props.user.knowledge}</p>
              </div>
            )
          }

          <div className="user-rank">
            <Link to={`/sushi-knowledge/${'Beginning'}`}><button>Beginning</button></Link>
            <br/>
            <Link to={`/sushi-knowledge/${'Rise-of-Sushi'}`}><button disabled={!(this.props.user_rank > 0)} onClick={ () => this.handleRoute(this.props.history)}>Rise of Sushi</button></Link>
            <br/>
            <Link to={`/sushi-knowledge/${'Type'}`}><button disabled={!(this.props.user_rank > 1)} onClick={ () => this.handleRoute(this.props.history)}>Type</button></Link>
            <br/>
            <Link to={`/sushi-knowledge/${'Etiquette'}`}><button disabled={!(this.props.user_rank > 2)} onClick={ () => this.handleRoute(this.props.history)}>Etiquette</button></Link>
            <br/>
            <span><button id="fact-dropdown" onClick={ () => this.setState({ clicked: !this.state.clicked }) }>Fun Fact</button></span>
            <div id="fact-dropdown-content">
              {randomFact}
            </div>
          </div>

        </div>

        <div className="right-column">
          <Suggested />
          <Favorited />
        </div>

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
