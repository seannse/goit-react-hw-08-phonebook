import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = async userData => {
  const { data } = await axios.post('/users/signup', userData);
  token.set(data.token);
  return data;
};
export const logIn = async userData => {
  const { data } = await axios.post('/users/login', userData);
  token.set(data.token);
  return data;
};
export const logOut = async userData => {
  await axios.post('/users/logout', userData);
  token.unSet();
};
export const fetchCurrentUser = async t => {
  token.set(t);
  const { data } = await axios.get('/users/current');
  return data;
};

export const fetchContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const postContact = async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};

export const deleteContact = async id => {
  await axios.delete(`/contacts/${id}`);
  return id;
};
