import React from 'react';
import Layout from '../Layout';

import styles from './index.module.css';
import MediaSection from './MediaSection';

function Footer() {
  return (
    <footer className={styles.footerBg}>
      <Layout>
        <div className={styles.footerGrid}>
          <div>
            <h1>Shortly</h1>
          </div>
          <div>
            <span className={styles.footerSection}>Features</span>
            <ul className={styles.footerSectionList}>
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </div>
          <div>
            <span className={styles.footerSection}>Resources</span>
            <ul className={styles.footerSectionList}>
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <span className={styles.footerSection}>Company</span>
            <ul className={styles.footerSectionList}>
              <li>About</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <MediaSection />
          </div>
        </div>
      </Layout>
    </footer>
  );
}

export default Footer;
