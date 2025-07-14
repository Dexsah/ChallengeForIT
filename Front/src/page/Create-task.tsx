import React, { useState, type FormEvent } from "react";
import { PageMain } from "../components/PageMain";
import { useNavigate } from "react-router-dom";

export const CreateTask = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [id, setID] = useState();
  const navigate = useNavigate();

  const CreatedTask = (e: FormEvent) => {
    e.preventDefault();

    fetch("http://localhost:3000/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description }),
    }).catch((error) => console.error(error));
    navigate("/");
  };

  const UpdateTask = () => {};

  return (
    <PageMain>
      <form
        onSubmit={CreatedTask}
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
        <button type="submit" className="bg-red-500">
          Enviar Peticion
        </button>
      </form>
    </PageMain>
  );
};
