import { createAction } from "@ngrx/store"
import { Character } from "../models/interfaces/CharactersInterface"

export const addList = createAction('addList', (character: Character) => ({character}))
export const removeList = createAction('removeList', (characterID) => ({characterID}))
