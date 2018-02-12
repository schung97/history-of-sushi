import React from 'react';

//profile
export const lockByRank = rank =>  {
  switch (rank) {
    case "Amateur":
      return (
        <ul className="user-rank">
          <li>Beginning</li>
          <s><li>Rise of Sushi</li></s>
          <s><li>Modern Evolution</li></s>
          <s><li>Type</li></s>
          <s><li>Etiquette</li></s>
          <li>Fun Fact</li>
        </ul>
      )
    case "Basic":
      return (
        <ul className="user-rank">
          <li>Beginning</li>
          <li>Rise of Sushi</li>
          <s><li>Modern Evolution</li></s>
          <s><li>Type</li></s>
          <s><li>Etiquette</li></s>
          <li>Fun Fact</li>
        </ul>
      )
    case "Above-Average":
      return (
        <ul className="user-rank">
          <li>Beginning</li>
          <li>Rise of Sushi</li>
          <li>Modern Evolution</li>
          <s><li>Type</li></s>
          <s><li>Etiquette</li></s>
          <li>Fun Fact</li>
        </ul>
      )
    case "Show-off":
      return (
        <ul className="user-rank">
          <li>Beginning</li>
          <li>Rise of Sushi</li>
          <li>Modern Evolution</li>
          <li>Type</li>
          <s><li>Etiquette</li></s>
          <li>Fun Fact</li>
        </ul>
      )
    default:
    return (
      <ul className="user-rank">
        <li>Beginning</li>
        <li>Rise of Sushi</li>
        <li>Modern Evolution</li>
        <li>Type</li>
        <li>Etiquette</li>
        <li>Fun Fact</li>
      </ul>
    )
  }
}

/// contents - question
export const findContentByRank = (rank, categories) =>  {
  switch (rank) {
    case "Amateur":
      return categories[0];
    case "Basic":
      return categories[1];
    case "Above-Average":
      return categories[2];
    case "Show-off":
      return categories[3];
    case "Appreciation":
      return categories[4];
    default:
      return categories[5]
  }
}



export const randomlySort = (content, key) => {
  const randomly = content.sort(() => (.5 - Math.random()))
  return randomly;
}

export const randomlySelectOne = content => {
  const randomIndex = Math.floor(Math.random() * content.length )
  return content[randomIndex]
}

export const questionDisplay = content => {
  return (<div>{content.question}</div>)
}

// export const displaySuggestions = (restaurants, name) => {
//   const suggested = restaurants.find( rest => rest.restaurant === name )
//   const index = restaurants.indexOf( name )
//   restaurants.splice(index, 1)
// }
