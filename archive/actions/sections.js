import { CREATE_SECTION_REQUEST, DELETE_SECTION_REQUEST, RENAME_SECTION_REQUEST } from './types';

export const createSection = payload => ({
  type: CREATE_SECTION_REQUEST,
  payload,
});

export const deleteSection = payload => ({
  type: DELETE_SECTION_REQUEST,
  payload,
});

export const renameSection  = (payload) => ({
  type: RENAME_SECTION_REQUEST,
  payload
})
