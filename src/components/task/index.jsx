import { useState } from "react";
import { Input } from "../shared";
import Form from "../form";
import { Circle, Trashcan, Pen } from "src/icons";
import styles from "./Task.module.css";

const TaskBody = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleInputChange = (e) => {
    const { value } = e.target;

    setTask(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTaskList([...taskList, task]);

    setTask("");
  };

  return (
    <section className={styles.taskBody}>
      <Form onSubmit={handleSubmit}>
        <Input
          name="task"
          placeholder="Add Task..."
          onChangeHandler={handleInputChange}
          value={task}
        />
      </Form>

      <div className={styles.taskList}>
        {taskList.map((taskItem, index) => (
          <div className={styles.taskItem} key={index}>
            <div className={styles.itemGroup}>
              <Circle />
              {taskItem}
            </div>
            <div className={styles.itemGroup}>
              <Pen />
              <Trashcan />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TaskBody;
