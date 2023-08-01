import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import styles from './index.module.css';

interface Props {
  showSideBar: boolean;
  setShowSideBar: (val: boolean) => void;
}

function SideBarMenu({ showSideBar, setShowSideBar }: Props) {
  return (
    <div className={showSideBar ? styles.sideBarContainer : ''}>
      <div className={styles.sidebar}>
        <button
          className={styles.btnClose}
          onClick={() => setShowSideBar(false)}
        >
          <AiOutlineClose size={30} />
        </button>
        <ul className={styles.sectionsSideBar}>
          <li>
            <span>Features</span>
          </li>
          <li>
            <span>Pricing</span>
          </li>
          <li>
            <span>Resources</span>
          </li>
          <li className={styles.btnLi}>
            <button className={styles.btnAuth}>Log In</button>
            <button className={styles.btnAuth}>Sign Up</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBarMenu;
