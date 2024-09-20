'use client'

import { useState } from "react";
import styles from "@/styles/main.module.scss"
import logo from "@/assets/logo.svg"
import Image from "next/image";
import Modal from "./components/Modal";

export default function Home() {
  const [tasks, setTasks] = useState<{ id: number; title: string }[]>([])
  const [modalStatus, setModalStatus] = useState(false)
  const date = new Date()
  const formattedDate = date.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const handleModal = () => {
    setModalStatus(!modalStatus)
  }


  const addTask = (newTask: string) => {
    const newTaskObject = {
      id: tasks.length + 1, // Gera um id para a tarefa
      title: newTask,
    };

    setTasks((prevTasks) => [...prevTasks, newTaskObject]); // Adiciona a nova tarefa ao array de tarefas
  };


  return (
    <>
      <div>
        <div className={styles.menu}>
          <Image src={logo} alt="" />

          <h1 className={styles.title}>Bem-vindo de volta, Marcus</h1>

          <p>{formattedDate}</p>
        </div>
      </div>

      <main className={styles.main}>
        <div>
          <div className={styles.card}>
            <h3 className={styles.subtitle}>Suas tarefas de hoje</h3>

            {tasks.map(({ id, title }) => (
              <div className={styles.card_item}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <input type="checkbox" />
                  <p className={styles.card_task}>{title}</p>
                </div>

                <div>
                  <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5H3M3 5H19M3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H15C15.5304 21 16.0391 20.7893 16.4142 20.4142C16.7893 20.0391 17 19.5304 17 19V5H3ZM6 5V3C6 2.46957 6.21071 1.96086 6.58579 1.58579C6.96086 1.21071 7.46957 1 8 1H12C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V5" stroke="#B0BBD1" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
            ))}

            <div>
              <h3 className={styles.subtitle}>Tarefas finalizadas</h3>
            </div>
          </div>

          <button type="button" className={styles.button} onClick={handleModal}>
            Adicionar nova tarefa
          </button>
        </div>
      </main>

      <Modal modalStatus={modalStatus} setModalStatus={setModalStatus} addTask={addTask} />
    </>
  );
}
