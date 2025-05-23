import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = ({ toggleSidebar }) => {
  const [activeNavItem, setActiveNavItem] = useState('Dashboard');

  const navItems = [
    { icon: '📊', label: 'Dashboard' },
    { icon: '📈', label: 'Analytics' },
    { icon: '📝', label: 'Reports' },
  ];

  const handleNavClick = (label) => {
    setActiveNavItem(label);
    // You can add navigation logic here if needed
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navLeft}>
        <button className={styles.toggleBtn} onClick={toggleSidebar}>
          ☰
        </button>
        <h1 className={styles.logo}>Dashboard</h1>
        <div className={styles.navItems}>
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`${styles.navItem} ${activeNavItem === item.label ? styles.active : ''}`}
              onClick={() => handleNavClick(item.label)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleNavClick(item.label);
                }
              }}
            >
              <span className={styles.navIcon}>{item.icon}</span>
              <span className={styles.navLabel}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.navRight}>
        <div className={styles.userInfo}>
          <span className={styles.userName}>John Doe</span>
          <div className={styles.avatar}>JD</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 