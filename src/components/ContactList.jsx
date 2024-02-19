export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}{' '}
          <button onClick={() => deleteContact(contact.id)}>Del</button>
        </li>
      ))}
    </ul>
  );
};


