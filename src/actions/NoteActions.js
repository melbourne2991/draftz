import Rx from 'rxjs';
import { Notes as NotesAPI } from '../api';

function fetchNewNote() {
  return {
    type: 'FETCH_NEW_NOTE'
  }
}

function receiveNewNote(note) {
  return {
    type: 'RECEIVE_NEW_NOTE',
    note
  }
}

export function newNoteEpic(action$) {
  console.log(action$);

  return action$
    .ofType('FETCH_NEW_NOTE')
    .mergeMap(() => {
      return Rx.Observable.from(NotesAPI.newNote())
        .map(response => {
          return receiveNewNote(response.data);
        });
    })
}

export const actions = {
  fetchNewNote
};