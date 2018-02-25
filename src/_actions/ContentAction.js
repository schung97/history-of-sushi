
export const setCurrentCategory  = category => {
  return  { type: "SET_CURRENT_CATEGORY", category }
}

export const setContentByRank  = (contents, questions) => {
  return  { type: "SET_CONTENTS_BY_RANK", contents, questions }
}
