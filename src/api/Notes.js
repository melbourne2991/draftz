import axios from 'axios';

const API_ROOT = 'http://localhost:3040';

export function newNote() {
  return axios.post(`${API_ROOT}/notes`);
};