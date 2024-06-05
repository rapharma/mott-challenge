import { createReducer, on } from "@ngrx/store"
import { Character } from "../models/interfaces/CharactersInterface"
import { addCharacter } from "../models/interfaces/StoreInterface"
import { addList, removeList } from "./actions"
import { appInitialState, IAppState } from "./app.state"

export const appReducer = createReducer(
    appInitialState,
    on(addList, (state: IAppState, character: addCharacter) => {
      
      return {...state, favoriteList: [...state.favoriteList, character.character]}
        
    }),
    on(removeList, (state: IAppState, { characterID }) => {
      const removeCharacter = state.favoriteList.filter((item: Character) => item.id != characterID.id)
      return {...state, favoriteList: removeCharacter}
    })
  )