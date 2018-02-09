//  *** helper methods  *** //
const findContentByRank = (rank, categories) =>  {
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

// ** Action Creators  *** ///
export const setCurrentQuestion = currentQuestion => {
  return { type: "SET_CURRENT_QUESTION", currentQuestion }
}

export const setContentByRank = (userRank, categories) => {

}
