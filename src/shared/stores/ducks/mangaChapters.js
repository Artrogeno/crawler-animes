import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  mangaChaptersRequest: ['gateway', 'manga'],
  mangaChaptersSuccess: ['data'],
})

export const MangaChaptersTypes = Types
export default Creators

const INITIAL_STATE = Immutable({
  data: {},
  loading: true,
})

export const request = state => state.merge({ loading: true })
export const success = (state, { data }) =>
  state.merge({ loading: false, data })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.MANGA_CHAPTERS_REQUEST]: request,
  [Types.MANGA_CHAPTERS_SUCCESS]: success,
})
