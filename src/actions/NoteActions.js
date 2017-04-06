import Rx from 'rxjs';
import { Notes as NotesAPI } from '../api';
import history from '../history';

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
          const note = response.data;
          history.replace(`/note/${note.id}`);
          return receiveNewNote(note);
        });
    });
}

export const actions = {
  fetchNewNote
};