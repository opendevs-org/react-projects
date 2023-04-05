import { createStore } from "redux";
import { rootReducer } from "./reducers";

const store = createStore(rootReducer)

type RootState = ReturnType<typeof rootReducer>

export { store }
export type { RootState }
