import styles from '@/styles/main.module.scss'
import { useState } from 'react';

interface ModalProps {
  modalStatus: boolean,
  setModalStatus: React.Dispatch<React.SetStateAction<boolean>>,
  addTask: (task: string) => void;
}

const Modal = ({ modalStatus, setModalStatus, addTask }: ModalProps) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleAddTask = () => {
    if (taskTitle.trim()) {
      addTask(taskTitle); // Adiciona a tarefa
      setTaskTitle(''); // Limpa o input
      setModalStatus(false); // Fecha o modal
    }
  };


  if (modalStatus) {
    return (
      <div className={styles.container_modal}>
        <div className={styles.modal}>

          <div>
            <h1 className={styles.title}>Nova tarefa</h1>

            <label htmlFor="">Título</label>
            <input type="text" className={styles.input} placeholder="Digite" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} />

            <div>
              <button type="button" className={styles.button_stop} onClick={() => setModalStatus(!modalStatus)}>
                Cancelar
              </button>

              <button type="button" className={styles.button_create} onClick={handleAddTask}>
                Adicionar
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal