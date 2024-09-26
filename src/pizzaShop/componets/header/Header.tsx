import styles from "./header.module.css";

import cart from "../../../assets/cart.svg";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <span>logo</span>
        <span>Самая вкусная пицца</span>
      </div>
      <div className={styles.button}>
        <span>500 $</span>
        <span className={styles.slach}></span>
        <div className={styles.cart}>
          <img src={cart} alt={"cart"} className={styles.icon} />
          <span>3</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
