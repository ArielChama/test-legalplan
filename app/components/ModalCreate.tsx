import { useState } from 'react';
import styles from '@/styles/main.module.scss'

interface ModalProps {
  modalStatus: boolean,
  setModalStatus: React.Dispatch<React.SetStateAction<boolean>>,
  addTask: (task: string) => void;
}

const ModalCreate = ({ modalStatus, setModalStatus, addTask }: ModalProps) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleAddTask = () => {
    if (taskTitle.trim()) {
      addTask(taskTitle)
      setTaskTitle('')
      setModalStatus(false)
    }
  }


  if (modalStatus) {
    return (
      <div className={styles.container_modal}>
        <div className={styles.modal}>

          <div>
            <h1 className={styles.title}>Nova tarefa</h1>

            <p style={{ marginTop: '20px' }}>
              <label htmlFor="">Título</label>
            </p>
            <input type="text" className={styles.input} placeholder="Digite" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} />

            <div className={styles.button_group}>
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

export default ModalCreate