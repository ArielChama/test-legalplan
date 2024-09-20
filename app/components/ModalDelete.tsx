import { useState } from 'react';
import styles from '@/styles/main.module.scss'

interface ModalProps {
  modalStatus: boolean,
  setModalStatus: React.Dispatch<React.SetStateAction<boolean>>,
  deleteTask: (task: number) => void,
  idTask: number
}

const ModalDelete = ({ modalStatus, setModalStatus, deleteTask, idTask }: ModalProps) => {
  const handleDeleteTask = () => {
    deleteTask(idTask)
    setModalStatus(false)
  }


  if (modalStatus) {
    return (
      <div className={styles.container_modal}>
        <div className={styles.modal}>

          <div>
            <h1 className={styles.title}>Deleter tarefa</h1>

            <p style={{ marginTop: '30px', marginBottom: '30px' }}>
              Tem a certeza que deseja deletar essa tarefa?
            </p>

            <div className={styles.button_group}>
              <button type="button" className={styles.button_stop} onClick={() => setModalStatus(!modalStatus)}>
                Cancelar
              </button>

              <button type="button" className={styles.button_delete} onClick={handleDeleteTask}>
                Deletar
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ModalDelete