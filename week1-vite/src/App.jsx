import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Modal from 'react-modal';

/* Creates an object to store my name, and some CSS (theme) elements */
const aboutMe = {
  name: 'Andrew Castro',
  theme: {
    backgroundColor: 'gray',
    color: 'yellow',
    height:'1000px',
    width: '100%',
    borderRadius: '10px',
    padding: '15px'
  }
};


/* Function to handle confirmation modal, and visual conditions */
function DisplayList({ toDo }) {
  /* sets the default values of the checkmark emoji, 
  and the confirmation window, to be hidden */
  const [displayModal, setDisplayModal] = useState(false);
  const [isTaskDone, setIsTaskDone] = useState(false);

  /* some CSS for styling the confirmation modal */
  const styleModal = {
    /* I couldnt get this to work, however... */
    height: '300px',
    width: '300px'
  };

  /* when btnDone is clicked, it sets setDisplayModal to true, showing
  the confirmation modal */
  const btnDone = () => {
    setDisplayModal(true);
  };

  /* when btnDone is clicked, it sets setDisplayModal to FALSE, making the
  confirmation modal hide again. */
  const btnCancel = () => {
    setDisplayModal(false);
  };

  /* when btnYes is clicked, it makes setIsTaskDone to true,to display the 
  checkmark emoji near the task.It also makes setDisplayModal to false, 
  to hide the confirmation modal. */
  const btnYes = () => {
    setIsTaskDone(true);
    setDisplayModal(false);
  };

  /* return the following: */
  return (
    <div>
      {/*check if btnYes was clicked for a task. If the condition isn't set, then hide the checkmark.*/}
      <h2>{toDo}{isTaskDone ? ' ✅' : ''}</h2>
      {/*check if btnDone was clicked for a task. If the condition isn't set, then hide the modal.*/}
      <button onClick={btnDone}>Done</button>
      <Modal isOpen={displayModal} style={styleModal}>
        <h2>Confirm</h2>
        <p>Mark Task Complete?</p>
        <button onClick={btnCancel}>Cancel</button>
        <button onClick={btnYes}>Yes</button>
      </Modal>
    </div>
  );
}



export default function ToDoList() {
  return (
    <div style={aboutMe.theme}> 
      <h1>{aboutMe.name}'s To Do List</h1>
      <img
        className="avatar"
        src="images/avie.jpg"
        alt="Gregorio Y. Zara"
        style={{ height: '75px', width: '75px' }}
      />
      <DisplayList toDo={"Clicking 'DONE' on each to-do item opens a modal."} />
      <DisplayList toDo={"Created at least 3 to-do items with a reusable component."} />
      <DisplayList toDo={"Pressing 'Cancel' on the modal, closes it."} />
    </div>
  );
}


