import css from './ContactList.module.css';

export const Contact = ({id, name, number, onDelete }) => {
    return (
      <li key={id} className={css['contact-item']}>
      <span className={css['contact-details']}>
        {name}: {number}
      </span>
      <button className={css['delete-button']} onClick={() => onDelete(id)}>
        Del
      </button>
    </li>
    );
  };
  
