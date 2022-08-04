import styles from "./Header.module.css";

import igniteLogo from '../assets/Ignite-simbol.svg'


export function Header() {
  return (
    <div>
      <header className={styles.header}>
        <img src={igniteLogo} alt="Logotipo do Ignite" />
      </header>
    </div>
  );
}
