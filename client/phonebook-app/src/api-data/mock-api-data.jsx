export const mockApiData = [
  {
    id: 1,
    name: "John",
    surname: "Doe",
    company: "ABC Inc",
    job_position: "Software Engineer",
    address: "123 Main St",
    city: "Techville",
    zip_code: "10001",
    country: "Futuria",
    contact_info: [
      { type: "Email", info: "john@example.com" },
      { type: "Phone", info: "234 567 890" },
    ],
  },
  {
    id: 2,
    name: "Jane",
    surname: "Smith",
    company: "XYZ Corp",
    job_position: "Product Manager",
    address: "456 Elm St",
    city: "Innovatown",
    zip_code: "20002",
    country: "Idealand",
    contact_info: [
      { type: "Email", info: "jane@example.com" },
      { type: "Phone", info: "345 678 901" },
    ],
  },
  {
    id: 10,
    name: "Max",
    surname: "Power",
    company: "DynaTech",
    job_position: "Team Lead",
    address: "987 New Horizons",
    city: "Explora",
    zip_code: "30003",
    country: "Discovery",
    contact_info: [
      { type: "Email", info: "max@dynatech.com" },
      { type: "Phone", info: "800 123 456" },
    ],
  },
  {
    id: 11,
    name: "Luna",
    surname: "Light",
    company: "MoonCorp",
    job_position: "CEO",
    address: "111 Crescent Lane",
    city: "Lunar City",
    zip_code: "40004",
    country: "Moonland",
    contact_info: [
      { type: "Email", info: "luna@mooncorp.com" },
      { type: "Phone", info: "900 234 567" },
    ],
  },
  {
    id: 12,
    name: "Orion",
    surname: "Star",
    company: "Galactic Innovations",
    job_position: "Research Scientist",
    address: "404 Starlight Avenue",
    city: "Cosmos",
    zip_code: "50005",
    country: "Universe",
    contact_info: [
      { type: "Email", info: "orion@galacticinnovations.com" },
      { type: "Phone", info: "910 345 678" },
    ],
  },
  {
    id: 13,
    name: "Aurora",
    surname: "Borealis",
    company: "Polar Lights Ltd.",
    job_position: "Creative Director",
    address: "321 Aurora Street",
    city: "North Pole",
    zip_code: "60006",
    country: "Arctica",
    contact_info: [
      { type: "Email", info: "aurora@polarlights.com" },
      { type: "Phone", info: "920 456 789" },
    ],
  },
  {
    id: 14,
    name: "Leo",
    surname: "Pride",
    company: "JungleTech",
    job_position: "Operations Manager",
    address: "567 Savanna Road",
    city: "Wildlands",
    zip_code: "70007",
    country: "Naturea",
    contact_info: [
      { type: "Email", info: "leo@jungletech.com" },
      { type: "Phone", info: "930 567 890" },
    ],
  },
  {
    id: 15,
    name: "Cleo",
    surname: "Nile",
    company: "PharaohTech",
    job_position: "Architect",
    address: "789 Pyramid Plaza",
    city: "Sphinx City",
    zip_code: "80008",
    country: "Egyptia",
    contact_info: [
      { type: "Email", info: "cleo@pharahtech.com" },
      { type: "Phone", info: "940 678 901" },
    ],
  },
  {
    id: 16,
    name: "Terra",
    surname: "Gaia",
    company: "EcoSolutions",
    job_position: "Environmental Engineer",
    address: "101 Mother Earth Ave",
    city: "Gaia",
    zip_code: "90009",
    country: "Globus",
    contact_info: [
      { type: "Email", info: "terra@ecosolutions.com" },
      { type: "Phone", info: "950 789 012" },
    ],
  },
  {
    id: 17,
    name: "Nova",
    surname: "Lumina",
    company: "Starlight Enterprises",
    job_position: "CEO",
    address: "202 Lightyear Blvd",
    city: "Nebula",
    zip_code: "100010",
    country: "Galaxia",
    contact_info: [
      { type: "Email", info: "nova@starlight.com" },
      { type: "Phone", info: "960 890 123" },
    ],
  },
  {
    id: 18,
    name: "Zephyr",
    surname: "Breeze",
    company: "WindPower Inc.",
    job_position: "Renewable Energy Specialist",
    address: "303 Highwind Street",
    city: "Aeolus",
    zip_code: "110011",
    country: "Atmos",
    contact_info: [
      { type: "Email", info: "zephyr@windpower.com" },
      { type: "Phone", info: "970 901 234" },
    ],
  },
  {
    id: 19,
    name: "Atlas",
    surname: "Worldview",
    company: "Global Mapping Solutions",
    job_position: "Cartographer",
    address: "404 Explore Way",
    city: "Mariner",
    zip_code: "120012",
    country: "Terra",
    contact_info: [
      { type: "Email", info: "atlas@globalmapping.com" },
      { type: "Phone", info: "980 012 345" },
    ],
  },
];

export const authorizedMockUsers = [
  {
    email: "admin@admin.com",
    password: "password",
    user: {
      firstName: "John",
      lastName: "Doe",
      email: "admin@admin.com",
      role: "admin",
      token: "adminToken123456",
    },
  },
  {
    email: "user@user.com",
    password: "password",
    user: {
      firstName: "Jane",
      lastName: "Smith",
      email: "user@example.com",
      role: "user",
      token: "userToken123456",
    },
  },
];
