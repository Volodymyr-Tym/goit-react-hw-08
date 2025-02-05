import { useDispatch } from 'react-redux';
import { BiSolidUser } from 'react-icons/bi';
import { MdOutlinePhoneIphone } from 'react-icons/md';
import { AiOutlineUserDelete } from 'react-icons/ai';
import { LiaUserEditSolid } from 'react-icons/lia';
import { IoClose } from 'react-icons/io5';

import { deleteContact } from '../../redux/contacts/operations';

import styles from './Contact.module.css';
import { Modal } from '@mui/material';
import { useState } from 'react';
import EditContactForm from '../EditContactForm/EditContactForm';
import Container from '../Container/Container';
import StyledBtn from '../StyledBtn/StyledBtn';
import toast from 'react-hot-toast';

const Contact = ({ user }) => {
  const { name, number, id } = user;

  const dispatch = useDispatch();

  const nameFormater = fullName => {
    if (fullName.length <= 20) return fullName;
    else return fullName.slice(0, 20).padEnd(23, '.');
  };

  const onEditHandleClick = () => {
    handleOpenModal();
  };

  const onDeleteHandleClick = () => {
    dispatch(deleteContact(id)).unwrap(
      toast.success(`Contact "${name}" was deleted!`)
    );
  };

  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const handleOpenModal = () => setmodalIsOpen(true);
  const handleCloseModal = () => setmodalIsOpen(false);

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

      <div className={styles.btn_wrap}>
        <button
          onClick={onEditHandleClick}
          className={`${styles.btn} ${styles.edit_btn}`}
          type="button"
        >
          <LiaUserEditSolid
            className={`${styles.btn_ico} ${styles.edit_btn_ico}`}
          />
          <span className={styles.btn_text}>Edit</span>
        </button>

        <button
          onClick={onDeleteHandleClick}
          className={`${styles.btn} ${styles.delete_btn}`}
          type="button"
        >
          <AiOutlineUserDelete
            className={`${styles.btn_ico} ${styles.delete_btn_ico}`}
          />
          <span className={styles.btn_text}>Delete</span>
        </button>
      </div>

      <Modal
        className={styles.modal}
        open={modalIsOpen}
        onClose={handleCloseModal}
      >
        <Container className={styles.modal_container}>
          <StyledBtn addClassName={styles.close_btn} onClick={handleCloseModal}>
            <IoClose className={styles.close_btn_ico} />
          </StyledBtn>

          <div className={styles.form_wrap}>
            <EditContactForm
              contact={user}
              handleCloseModal={handleCloseModal}
            />
          </div>
        </Container>
      </Modal>
    </>
  );
};

export default Contact;
