const APIBASEURL = process.env.REACT_APP_API_URL;

export const getContactsUrl = (searchTerm) => {
  return `${APIBASEURL}/contacts?search=${searchTerm}`;
};

export const getContactByIdUrl = (id) => {
  return `${APIBASEURL}/contacts/${id}`;
};

export const deleteContactByIdUrl = (id) => {
  return `${APIBASEURL}/contacts/${id}`;
};

export const saveContactUrl = () => {
  return `${APIBASEURL}/contacts`;
};

export const getLoginUrl = () => {
  return `${APIBASEURL}/login`;
};

export const getMethod = (contactData) => {
  return contactData.id ? "PUT" : "POST";
};
