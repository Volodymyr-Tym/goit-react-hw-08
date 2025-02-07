import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Modal } from '@mui/material';
import toast from 'react-hot-toast';

import { BiSolidUser } from 'react-icons/bi';
import { MdOutlinePhoneIphone } from 'react-icons/md';
import { AiOutlineUserDelete } from 'react-icons/ai';
import { LiaUserEditSolid } from 'react-icons/lia';
import { IoClose } from 'react-icons/io5';

import Container from '../Container/Container';
import StyledBtn from '../StyledBtn/StyledBtn';
import EditContactForm from '../EditContactForm/EditContactForm';

import { deleteContact } from '../../redux/contacts/operations';

import styles from './Contact.module.css';

const Contact = ({ user }) => {
  const { name, number, id } = user;

  const dispatch = useDispatch();

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
          <p className={`${styles.text} ${styles.name}`}>{name}</p>
        </div>

        <div className={`${styles.info_wrap} ${styles.numb}`}>
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
        <>
          <Container className={styles.modal_container}>
            <StyledBtn
              addClassName={styles.close_btn}
              onClick={handleCloseModal}
            >
              <IoClose className={styles.close_btn_ico} />
            </StyledBtn>

            <div className={styles.form_wrap}>
              <EditContactForm
                contact={user}
                handleCloseModal={handleCloseModal}
              />
            </div>
          </Container>
        </>
      </Modal>
    </>
  );
};

export default Contact;
