import React from 'react';

export const findContentByRank = (rank, categories) =>  {
  switch (rank) {
    case "Amateur":
      return categories[0];
    case "Basic":
      return categories[1];
    case "Above-Average":
      return categories[2];
    case "Show-off":
      return categories[4];
    case "Appreciation":
      return categories[5];
    default:
      return categories[3]
  }
}



export const randomlySort = (content) => {
  const randomly = content.sort(() => (.5 - Math.random()))
  return randomly;
}

export const randomlySelectOne = content => {
  const randomIndex = Math.floor(Math.random() * content.length )
  return ( <ul>{ content[randomIndex] }</ul> )
}


export const userRankByNum = userRank => {
  const ranks = ['Amateur', 'Basic', 'Above-Average', 'Show-off', 'Appreciation'];
  const rankNum = ranks.indexOf(userRank);
  return rankNum;
}
