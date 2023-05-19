import PropTypes from 'prop-types';
import React from 'react';
import css from './filter.module.css';

const Filter = ({ value, onChange }) => (
  <div>
    <label className={css['label']}>
      Find contacts by name:
      <input
        className={css['filter-input']}
        type="text"
        value={value}
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </label>
  </div>
);

Filter.propTypes = {
  onChange: PropTypes.any,
  value: PropTypes.any,
};

Filter.defaultProps = {
  onChange: () => {},
  value: '',
};

export default Filter;