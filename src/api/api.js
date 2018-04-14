import fetch from './fetch.js';

let userServer='http://127.0.0.1:8010';

export const login = data => {return fetch(userServer+'/login/', data, 'POST','')};
