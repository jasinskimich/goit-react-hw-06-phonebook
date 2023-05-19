import React from 'react';
import PropTypes from 'prop-types';
import styles from './contactListItem.module.css';

const ContactListItem = ({ id, name, number, onDeleteContact }) => (
  <li className={styles['item']}>
    <button className={styles['delete-button']} type="button" onClick={() => onDeleteContact(id)}>
      ❌
    </button>
    <p>
      {name}: {number}
    </p>
  </li>
);

ContactListItem.defaultProps = {
  id: '',
  name: '',
  number: '',
  onDeleteContact: () => {},
};
ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;