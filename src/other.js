import React from 'react';

export const randomlySort = (content) => {
  const randomly = content.sort(() => (.5 - Math.random()))
  return randomly;
}

export const randomlySelectOne = content => {
  const randomIndex = Math.floor(Math.random() * content.length )
  return ( <div>{ content[randomIndex] }</div> )
}


export const userRankByNum = userRank => {
  const ranks = ['Amateur', 'Basic', 'Above-Average', 'Show-off', 'Appreciation'];
  const rankNum = ranks.indexOf(userRank);
  return rankNum;
}
