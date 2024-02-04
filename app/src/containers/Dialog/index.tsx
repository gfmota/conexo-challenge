import { PropsWithChildren } from 'react';
import styles from './Dialog.module.scss';

const Dialog = ({ children }: PropsWithChildren) => (
  <div className={styles.background}>
    <div className={styles.container}>{children}</div>
  </div>
);

export default Dialog;
