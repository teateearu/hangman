export const MAKE_GUESS = 'MAKE_GUESS'

export default (guess) => ({
  type: MAKE_GUESS,
  payload: guess
})
