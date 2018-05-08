import axios from 'axios';

export const get = (url,data) =>axios.get(url,{params:data});

export const post = (url,data) =>axios.post(url,data);