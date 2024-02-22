
import { Contact } from './Contact';
import css from './ContactList.module.css';


export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css['contact-list']}>
      {contacts.map(contact => (
        <Contact key={contact.id} id={contact.id} name={contact.name} number={contact.number} onDelete={onDelete} />
      ))}
    </ul>
  );
};