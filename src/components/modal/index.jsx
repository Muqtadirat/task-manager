
import { XIcon } from "src/icons";
import styles from "./Modal.module.css";

const Modal = ({ title, description, date, toggleModal }) => {


  return (
    <article className={styles.modal}>
     
        <div>
          <h4 className={styles.modalHeading}>
            Task Details
            <span onClick={toggleModal}>
              <XIcon className={styles.modalIcon} />
            </span>
          </h4>

          <div className={styles.modalBody}>
            <section>
              <span>Title:</span>
              {title}
            </section>
            <section>
              <span>Description:</span>
              {description}
            </section>
            <section>
              <span>Due Date:</span>
              {date}
            </section>
          </div>
        </div>
    
    </article>
  );
};

export default Modal;
