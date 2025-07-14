import React, { useEffect, useState, type FormEvent } from "react";
import { PageMain } from "../components/PageMain";
import { useNavigate, useParams } from "react-router-dom";
import type { Task } from "./View-task";

export const EditTask = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [completed, setCompleted] = useState<boolean>();

  useEffect(() => {
    const fetchTasks = async () => {
      const result = await fetch(`http://localhost:3000/api/tasks/${id}`);
      const data = await result.json();
      setName(data.name);
      setDescription(data.description);
      setCompleted(data.completed);
    };

    fetchTasks();
  }, []);

  const UpdateTask = (e: FormEvent) => {
    e.preventDefault();

    fetch(`http://localhost:3000/api/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description, completed }),
    }).catch((error) => console.error(error));
    navigate("/");
  };

  return (
    <PageMain>
      <form
        onSubmit={UpdateTask}
        className="flex flex-col gap-5 justify-center items-center h-full"
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Nombre"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Descripción"
        />
        <div className="flex gap-5">
          <label>Tarea Terminada?</label>
          <input
            onChange={() => setCompleted(!completed)}
            type="checkbox"
            checked={completed}
          />
        </div>
        <button type="submit" className="bg-red-500">
          Enviar Peticion
        </button>
      </form>
    </PageMain>
  );
};
