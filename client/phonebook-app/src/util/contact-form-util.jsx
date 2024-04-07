export const copyContactFormData = (contact) => {
  return {
    name: contact.name,
    surname: contact.surname,
    company: contact.company,
    job_position: contact.job_position,
    address: contact.address,
    city: contact.city,
    zip_code: contact.zip_code,
    country: contact.country,
    contact_info: contact.contact_info.map((info) => ({ ...info })),
  };
};

export const getInitialFormData = () => {
  return {
    name: "",
    surname: "",
    company: "",
    job_position: "",
    address: "",
    city: "",
    zip_code: "",
    country: "",
    contact_info: [{ type: "", info: "" }],
  };
};

export const contactTypes = [
  "Phone",
  "Email",
  "Home Phone",
  "Mobile Phone",
  "Personal Email",
  "Work Email",
  "Website",
  "Telegram",
  "WhatsApp",
  "Other",
];
