import styles from './StyledBtn.module.css';

const StyledBtn = ({ name = 'Button', type = 'button', onClick }) => {
  return (
    <button className={styles.btn} type={type} onClick={onClick}>
      {name}
    </button>
  );
};

export default StyledBtn;
