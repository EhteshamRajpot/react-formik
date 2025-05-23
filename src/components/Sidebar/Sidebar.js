import React, { useState } from 'react';
import styles from './Sidebar.module.css';

const Sidebar = ({ isOpen }) => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const menuItems = [
    { icon: '📊', label: 'Dashboard' },
    { icon: '📈', label: 'Analytics' },
    { icon: '📝', label: 'Reports' },
    { icon: '⚙️', label: 'Settings' },
    { icon: '👥', label: 'Users' },
  ];

  const handleItemClick = (label) => {
    setActiveItem(label);
    // You can add navigation logic here if needed
  };

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <div className={styles.menu}>
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`${styles.menuItem} ${activeItem === item.label ? styles.active : ''}`}
            onClick={() => handleItemClick(item.label)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleItemClick(item.label);
              }
            }}
          >
            <span className={styles.icon}>{item.icon}</span>
            <span className={`${styles.label} ${isOpen ? styles.show : styles.hide}`}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar; 