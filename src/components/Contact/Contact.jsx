import { BiSolidUser } from 'react-icons/bi';
import { MdOutlinePhoneIphone } from 'react-icons/md';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

import styles from './Contact.module.css';

const Contact = ({ user }) => {
  const { name, number, id } = user;

  const dispatch = useDispatch();

  const nameFormater = fullName => {
    if (fullName.length <= 20) return fullName;
    else return fullName.slice(0, 20).padEnd(23, '.');
  };

  const onDeleteHandleClick = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div className={styles.details}>
        <p className={styles.info}>
          <BiSolidUser className={styles.icon} />
          {nameFormater(name)}
        </p>

        <p className={styles.info}>
          <MdOutlinePhoneIphone className={styles.icon} />
          {number}
        </p>
      </div>

      <button
        onClick={onDeleteHandleClick}
        className={styles.btn}
        type="button"
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
