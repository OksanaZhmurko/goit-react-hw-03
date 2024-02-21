
import css from './ContactList.module.css';


export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={css['contact-list']}>
      {contacts.map(contact => (
        <li key={contact.id} className={css['contact-item']}>
          <span className={css['contact-details']}>
            {contact.name}: {contact.number}
          </span>
          <button className={css['delete-button']} onClick={() => deleteContact(contact.id)}>
            Del
          </button>
        </li>
      ))}
    </ul>
  );
};