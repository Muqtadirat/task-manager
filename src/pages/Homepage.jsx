// import Form from "../components/form";
// import { Input } from "../components/shared";
import TaskBody from "src/components/task";
import { Calendar } from "src/icons";
import styles from "./Pages.module.css";

const Homepage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        <Calendar className={styles.headingIcon} />
        All
      </h1>

      <TaskBody />
      {/* <section className={styles.taskBody}>
        <Input placeholder="Add Task..." />

        <div className={styles.taskList}>
          <div className={styles.taskItem}>
            <div className={styles.groupOne}>
              <Circle />
              Task one
            </div>

            <div className={styles.groupOne}>
              <Pen />
              <Trashcan />
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Homepage;
