import { ALLOWED_SYMBOLS_TYPE } from '../../constants'

type AppState = {
  symbols: ALLOWED_SYMBOLS_TYPE[]
}

type AppAction = {
  type: 'SET_SYMBOLS'
  payload: ALLOWED_SYMBOLS_TYPE[]
} | {
  type: 'CLEAR'
}

const initialState: AppState = {
  symbols: []
}

const AppReducer = (state = initialState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_SYMBOLS': {
      return { ...state, symbols: action.payload }
    }
    case 'CLEAR': {
      return initialState
    }
    default: {
      return state
    }
  }
}

export { AppReducer }
export type { AppAction }
