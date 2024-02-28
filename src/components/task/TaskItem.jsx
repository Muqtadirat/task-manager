import { Circle, Trashcan, Pen, Info } from "src/icons";
import styles from "./Task.module.css";

const TaskItem = ({ task, handleDelete, handleEdit, displayInfo }) => {
  return (
    <div className={styles.taskItem}>
      <div className={styles.itemGroup}>
        <Circle />
        {task.text}
      </div>
      <div className={styles.itemGroup}>
        <span onClick={handleEdit}>
          <Pen />
        </span>

        <span onClick={handleDelete}>
          <Trashcan />
        </span>
        <span onClick={displayInfo}>
          <Info />
        </span>
      </div>
    </div>
  );
};

export default TaskItem;
