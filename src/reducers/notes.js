const initialState = {
  notes: {},
  ids: []
};

export default function notes(state = initialState, action) {
  console.log(action);

  switch(action.type) {
    case 'ADD_NOTE':
      return Object.assign({}, state, {
        notes: Object.assign({}, state.notes, {
          [state.ids.length]: action.note
        }),
        ids: state.ids.concat[state.ids.length],
        activeNote: state.ids.length
      });
    default:
      return state;
  }
}
