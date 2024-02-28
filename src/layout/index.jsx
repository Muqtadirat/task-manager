import Header from "./Header";
import Sidebar from "./Sidebar";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <header className={styles.layoutHeader}>
        <Header />
      </header>

      <main className={styles.layoutMain}>{children} </main>
      <section className={styles.layoutSide}>
        <Sidebar />
      </section>

      {/* <footer className={styles.layoutFooter}>Footer</footer> */}
    </div>
  );
};

export default Layout;
