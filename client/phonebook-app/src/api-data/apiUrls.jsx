const APIBASEURL = "http://127.0.0.1:8000";

export const getContactsUrl = (searchTerm) => {
  return `${APIBASEURL}/contacts?search=${searchTerm}`;
};

export const getContactByIdUrl = (id) => {
  return `${APIBASEURL}/contacts/${id}`;
};