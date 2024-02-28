import { useState } from "react";
import { Input } from "../shared";
import Form from "../form";
import TaskItem from "./TaskItem";
import styles from "./Task.module.css";

const TaskBody = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [idCounter, setIdCounter] = useState(0);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setTask(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: idCounter,
      text: task,
    };
    setTaskList([...taskList, newTask]);
    setTask("");
    setIdCounter(idCounter + 1);
  };

  const deleteTask = (id) => {
    const newList = taskList.filter((task) => task.id !== id);
    setTaskList(newList);
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
        {taskList.map((taskItem) => (
          <TaskItem
            key={taskItem.id}
            task={taskItem}
            onDelete={() => deleteTask(taskItem.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default TaskBody;
