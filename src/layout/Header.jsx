import { Clipboard } from "src/icons";
import styles from "./Layout.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <Clipboard classname={styles.clipboard}/>
        Task Manager
      </header>
    </>
  );
};

export default Header;
