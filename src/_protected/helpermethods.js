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



export const randomlySort = (content) => {
  const randomly = content.sort(() => (.5 - Math.random()))
  return randomly;
}

export const randomlySelectOne = content => {
  const randomIndex = Math.floor(Math.random() * content.length )
  return content[randomIndex]
}

// export const questionDisplay = content => {
//   return (<div>{content.question}</div>)


// export const displaySuggestions = (restaurants, name) => {
//   const suggested = restaurants.find( rest => rest.restaurant === name )
//   const index = restaurants.indexOf( name )
//   restaurants.splice(index, 1)
// }


// export const questionDisplay = question => {
//
//   switch (question.answer) {
//     case 'True':
//       return (
//         <div>
//           <input type="radio" value={question.answer} />
//           <input type="radio" value='False' />
//         </div>
//       )
//     case 'False':
//       return (
//         <div>
//           <input type="radio" value={question.answer} />
//           <input type="radio" value='False' />
//         </div>
//       )
//     default:
//       const multiple = question.other.push(question.answer)
//       return (
//         <div>
//           <input type="radio" value={multiple[0]} />{multiple[0]}
//           <input type="radio" value={multiple[1]} />{multiple[1]}
//           <input type="radio" value={multiple[2]} />{multiple[2]}
//           <input type="radio" value={multiple[3]} />{multiple[3]}
//         </div>
//       )
//   }
// }
