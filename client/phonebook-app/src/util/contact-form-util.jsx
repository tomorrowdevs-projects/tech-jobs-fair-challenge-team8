export const copyContactFormData = (contact) => {
  return {
    firstName: contact.firstName,
    lastName: contact.lastName,
    company: contact.company,
    jobTitle: contact.jobTitle,
    address: contact.address,
    city: contact.city,
    zipCode: contact.zipCode,
    country: contact.country,
    contactDetails: contact.contactDetails.map((entry) => ({ ...entry })),
  };
};

export const getInitialFormData = () => {
  return {
    firstName: "",
    lastName: "",
    company: "",
    jobTitle: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
    contactDetails: [{ type: "", info: "" }],
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
