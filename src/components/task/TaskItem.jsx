import { Circle, Trashcan, Pen } from "src/icons";
import styles from "./Task.module.css";

const TaskItem = ({ task, onDelete }) => {
  return (
    <div className={styles.taskItem}>
      <div className={styles.itemGroup}>
        <Circle />
        {task.text}
      </div>
      <div className={styles.itemGroup}>
        <span>
          <Pen />
        </span>

        <span onClick={onDelete}>
          <Trashcan onClick={onDelete} />
        </span>
      </div>
    </div>
  );
};

export default TaskItem;
