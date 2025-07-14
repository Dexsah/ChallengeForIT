import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { PageMain } from "../components/PageMain";

export interface Task {
  id: number;
  name: string;
  description: string;
  completed: boolean;
}

export const ViewTask = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    const result = await fetch("http://localhost:3000/api/tasks");
    const data = await result.json();
    setTasks(data);
  };
  useEffect(() => {
    fetchTasks();
  }, []);

  const onDelete = (e: string) => {
    fetch(`http://localhost:3000/api/tasks/${e}`, {
      method: "DELETE",
    }).then((result) => fetchTasks());
  };

  return (
    <PageMain>
      <header className="z-10 sticky top-0">
        <div className="relative w-[60%] mx-auto my-4"></div>
      </header>
      <div className="grid grid-cols-4 gap-4 p-4">
        {tasks.map((e, i) => (
          <Card
            id={e.id}
            completed={e.completed}
            key={i}
            description={e.description}
            name={e.name}
            onDelete={() => onDelete(e.id.toString())}
          />
        ))}
      </div>
    </PageMain>
  );
};
