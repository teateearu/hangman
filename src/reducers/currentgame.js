import {MAKE_GUESS} from '../actions/makeguess'

export default (state = initialState, { type, payload } = {}) => {
  switch(type) {
    case MAKE_GUESS:
      state.guesses.push(payload)
      return {
        word: state.word,
        guessCount: state.guessCount,
        wrongCount: wrongCount(state.word, state.guesses),
        hasWon: hasWon(state.word, state.guessCount),
      }
    default:
      return state
  }
}

const initialState = {
  word: "pineapple",
  guesses: [],
  showguess: "_ _ _ _ _ _ _ _ _",
  wrongCount: 0,
  hasWon: "",
}

function wrongCount(word, guessCount) {
  var wrongAmount = 0
  console.log(wrongAmount)

}

function hasWon(word, guessCount) {

}
