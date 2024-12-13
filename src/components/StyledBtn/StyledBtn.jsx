import clsx from 'clsx';

import styles from './StyledBtn.module.css';

const StyledBtn = ({
  children,
  className,
  addClassName,
  big,
  type = 'button',
  onClick,
}) => {
  const classOpts = () => {
    if (className) return `${className}`;
    else if (addClassName) return `${styles.btn} ${addClassName}`;
    else return `${styles.btn}`;
  };

  const btnClass = clsx(classOpts(), big && styles.big);

  return (
    <button className={btnClass} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default StyledBtn;
