import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://6728f2786d5fa4901b6b9ab6.mockapi.io/contacts',
});

export const getContacts = async () => {
  const { data } = await contactsInstance.get('/');

  return data;
};

export const postContact = async newContact => {
  const { data } = await contactsInstance.post('/', newContact);

  return data;
};

export const deleteContactById = async id => {
  const { data } = await contactsInstance.delete(`/${id}`);

  return data;
};
