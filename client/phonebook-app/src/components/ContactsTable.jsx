import { Table } from 'react-bootstrap';

const ContactsTable = ({ contacts }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Telephone Number</th>
          <th>Address</th>
          <th>Company</th>
          <th>Position</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact, index) => (
          <tr key={contact.id}>
            <td>{index + 1}</td>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.telephoneNumber}</td>
            <td>{contact.address}</td>
            <td>{contact.company}</td>
            <td>{contact.position}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ContactsTable;
