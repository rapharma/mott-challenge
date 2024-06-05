/* eslint-disable @typescript-eslint/no-explicit-any */
import { MetaReducer, createAction, createReducer, on } from "@ngrx/store"
import { Character } from "../models/interfaces/CharactersInterface"
import { actionStore, addCharacter } from "../models/interfaces/StoreInterface"

export interface IAppState {
  favoriteList: Character[]
}

const storage = JSON.parse(sessionStorage.getItem('favoriteList') as string)

export const appInitialState = storage ? storage : {
  favoriteList: [],
}

export function saveBeforeRefresh(reducer: any) {
  
  return (state: IAppState, action: actionStore) => {
    const nextState = reducer(state, action);
    sessionStorage.setItem('favoriteList', JSON.stringify(nextState.app));
    return nextState;
  };
}
export const metaReducers: MetaReducer<any>[] = [saveBeforeRefresh];