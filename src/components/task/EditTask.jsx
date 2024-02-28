import Form from "../form";
import { Input } from "../shared";
import styles from "./Task.module.css";

const EditTask = ({
  handleEditSubmit,
  editTitle,
  cancelEdit,
  saveEdit,
  onChangeHandler,
}) => {
  return (
    <>
      <Form onSubmit={handleEditSubmit}>
        <div className={styles.editForm}>
          <h4 className={styles.heading}>Task Details</h4>

          <div className={styles.body}>
            <section>
              <Input
                label="Title..."
                value={editTitle}
                onChangeHandler={onChangeHandler}
              />
            </section>
            <section>
              <Input label="Description" />
            </section>
            {/* <section>
              <Input label="Due Date" />
            </section> */}
          </div>
          <section className={styles.buttonGroup}>
            <button onClick={cancelEdit}>Cancel</button>
            <button onClick={saveEdit}>Save</button>
          </section>
        </div>
      </Form>
    </>
  );
};

export default EditTask;
