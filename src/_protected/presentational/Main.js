// import React from 'react';
// // import NavBar from './NavBar';
//
// // import Content from '../component/Content';
// import { withRouter, Switch, Route } from 'react-router-dom';
// import Content from '../component/Content';
// // import UserPageNavBar from './UserPageNavBar';
// // import UserProfile from './UserProfile';
// // import UserSushiRank from './UserSushiRank';
// import IsAuthenticated from '../../_protected/IsAuthenticated';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { getUserContents } from '../ContentAction';
// import '../../css/Main.css';
//
// class Main extends React.Component {
//
//   componentDidMount() {
//     this.props.getUserContents(this.props.userID)
//   }
//
//   render() {
//     console.log('main', this.props)
//     const hide = this.props.location.pathname === '/sushi-knowledge';
//
//     return (
//       <main>
//         <NavBar {...this.props}/>
//         <div className="user-page">
//           { hide ? null : ( <UserPageNavBar /> ) }
//           <Switch>
//             <Route exact path="/profile" component={UserProfile} />
//             <Route exact path="/sushi-rank" component={UserSushiRank}/>
//             <Route exact path="/sushi-knowledge" component={Content}/>
//           </Switch>
//         </div>
//       </main>
//     )
//   }
// }
//
// const mapStateToProps = state => {
//   return {
//     userID: state.auth.currentUser.id
//
//   }
// }
//
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ getUserContents }, dispatch);
// }
// export default IsAuthenticated(connect(mapStateToProps, mapDispatchToProps)(Main));
