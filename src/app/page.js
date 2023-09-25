import React from 'react';
import styles from './page.module.css';

function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      {/* CampusCart */}
      <div className={styles.logo}>
        <p>CampusCart</p>
      </div>

    

      {/* Home */}
      <div className={styles.links}>
        <a href="#" className={styles.link}>Home</a>
      </div>



      {/* Contact US */}
      <div className={styles.links}>
        <a href="#" className={styles.link}>Contact Us</a>
      </div>

      {/* Search */}
      <div className={styles.search}>
        <div className={styles.searchInput}>
          <input type="text" placeholder="Search..." className={styles.inputField} />
          <img src="searchGlass-removebg-preview.png" alt="Search Icon" className={styles.icon} />
        </div>
      </div>



<div className={styles.cartIcon}>
  <img src="cart-removebg-preview.png" alt="Cart Icon" className={styles.icon} />
</div>

<div className={styles.bellIcon}>
  <img src="bell-removebg-preview.png" alt="Bell Icon" className={styles.icon} />
</div>

<div className={styles.loupeIcon}>
  <img src="loupe-removebg-preview.png" alt="Loupe Icon" className={styles.icon} />
</div>


      {/* Btns */}
      <div className={styles.buttons}>
        <div className={styles.shoppingCart}>
          <div className={styles.cartIcon}></div>
        </div>
        <div className={styles.notifications}>
          <div className={styles.notificationIcon}></div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.userProfile}>
          <div className={styles.profileImage}></div>
          <p>Hi, Emma</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
