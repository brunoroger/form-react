import axios from 'axios';

const api = 'https://www.google.com/';

export const add = request =>
axios.post(api, request);