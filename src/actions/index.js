import { combineEpics } from 'redux-observable';
import TestActions from './TestActions';
import { actions as NoteActions, newNoteEpic } from './NoteActions';
import types from './types';

export const rootEpic = combineEpics(
  newNoteEpic
);

export {
  types,
  TestActions,
  NoteActions,
}