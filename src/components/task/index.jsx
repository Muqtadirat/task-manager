import { useState } from "react";
import { Input } from "../shared";
import Form from "../form";
import Modal from "../modal";
import TaskItem from "./TaskItem";
import EditTask from "./EditTask";

import styles from "./Task.module.css";

const TaskBody = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [idCounter, setIdCounter] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedTask, setEditedTask] = useState("");

  const handleInputChange = (e) => {
    const { value } = e.target;
    setTask(value);
  };
1
  const handleEditInput = (e) => {
    const { value } = e.target;
      console.log("New Edited Task:", value);
    //   broken
    setEditedTask(value);
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

  const editTask = (id) => {
    const taskToEdit = taskList.find((task) => task.id === id);
    setEditedTask(taskToEdit.text);
    setEditMode(true);
  };

    // broken
  const handleEditSubmit = (e) => {
    e.preventDefault();

    setEditedTask(task);
    setEditMode(false);
  };

  const cancelEdit = () => {
    setEditMode(false);
  };

  const saveEdit = () => {
    // const updatedTaskList = taskList.map((taskItem) => {
    //   if (taskItem.text === selectedTask.text) {
    //     return { ...taskItem, text: editedTask };
    //   }
    //   return taskItem;
    // });

    // setTaskList(updatedTaskList);
    setEditMode(false);
  };

  const toggleModal = (task) => {
    setSelectedTask(task);
    setShowModal(!showModal);
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
            handleDelete={() => deleteTask(taskItem.id)}
            handleEdit={() => editTask(taskItem.id)}
            displayInfo={() => toggleModal(taskItem)}
          />
        ))}
      </div>
      {showModal && (
        <Modal
          title={selectedTask.text}
          description={selectedTask.description}
          date={selectedTask.date}
          toggleModal={toggleModal}
        />
      )}

      {editMode && (
        <EditTask
          handleEditSubmit={handleEditSubmit}
          editTitle={editedTask}
          saveEdit={saveEdit}
          cancelEdit={cancelEdit}
          onChangeHandler={handleEditInput}
        />
      )}
    </section>
  );
};

export default TaskBody;
