import { useDispatch } from 'react-redux';
import { BiSolidUser } from 'react-icons/bi';
import { MdOutlinePhoneIphone } from 'react-icons/md';
import { AiOutlineUserDelete } from 'react-icons/ai';

import { deleteContact } from '../../redux/contacts/operations';

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
        <div className={styles.info_wrap}>
          <BiSolidUser className={styles.ico} />
          <p className={`${styles.text} ${styles.name}`}>
            {nameFormater(name)}
          </p>
        </div>

        <div className={styles.info_wrap}>
          <MdOutlinePhoneIphone className={styles.ico} />
          <p className={styles.text}>{number}</p>
        </div>
      </div>

      <button
        onClick={onDeleteHandleClick}
        className={styles.btn}
        type="button"
      >
        <AiOutlineUserDelete className={styles.ico_delete} />
        <span className={styles.delete_btn_text}>Delete</span>
      </button>
    </>
  );
};

export default Contact;
