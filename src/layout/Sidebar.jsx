import { SidebarItems } from "src/lib/data";
import { Link } from "react-router-dom";
import styles from "./Layout.module.css";

const Sidebar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.menu}>
        <ul className={styles.menuList}>
          {SidebarItems.map((SidebarItem) => {
            const { title, href, Icon } = SidebarItem;

            return (
              <Link to={href} key={title} className="link">
                <li className={styles.menuItem}>
                  <span className={styles.menuIcon}>
                    <Icon />
                  </span>
                  <span className={styles.menuTitle}>{title}</span>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
