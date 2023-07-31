import React from 'react';

import styles from './index.module.css';

interface Props {
  children: React.ReactNode;
}

function MainLayout({ children }: Props) {
  return <main className={styles.mainContainer}>{children}</main>;
}

export default MainLayout;
