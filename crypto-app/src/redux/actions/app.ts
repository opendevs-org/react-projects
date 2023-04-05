import { ALLOWED_SYMBOLS_TYPE, STORAGE_KEY_SYMBOLS } from '../../constants'
import { AppAction } from '../reducers/app'

const updateSymbols = (value: ALLOWED_SYMBOLS_TYPE[]): AppAction => {
  localStorage.setItem(STORAGE_KEY_SYMBOLS, JSON.stringify(value))
  return {
    type: 'SET_SYMBOLS',
    payload: value
  }
}

const clearSymbol = (): AppAction => {
  return {
    type: 'CLEAR'
  }
}

export { updateSymbols, clearSymbol }
