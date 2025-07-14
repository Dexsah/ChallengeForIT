const db = require("../db");

const getTask = (req, res) => {
  const { id } = req.params;
  db.get(
    `
    SELECT * FROM tasks WHERE id = ? AND deleted_at IS NULL
    `,
    [id],
    (error, result) => {
      if (error) return res.status(500).json({ error: error.message });
      if (!result) return res.status(404).json({ error: "No se encontró" });
      res.json(result);
    }
  );
};

const getTasks = (req, res) => {
  db.all(
    `SELECT * FROM tasks WHERE deleted_at IS NULL`,
    [],
    (error, result) => {
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      res.json(result);
    }
  );
};

const createTask = (req, res) => {
  const { name, description, completed } = req.body;

  if (!name || !description)
    return res.status(404).json({ error: "Faltan datos obligatorios" });
  const newTask = `
    INSERT INTO tasks (name, description, completed, created_at, updated_at)
    VALUES (?, ?, 0, datetime('now'), datetime('now'))
  `;
  const values = [name, description, completed];

  db.run(newTask, values, function (error) {
    if (error) return res.status(500).json({ error: error.message });
    res
      .status(201)
      .json({ message: "Se ha creado exitosamente!", id: this.lastID });
  });
};

const updateTask = (req, res) => {
  const { id } = req.params;
  const { name, description, completed } = req.body;
  if (!name || !description)
    return res.status(400).json({ error: "Faltan campos obligatorios" });

  const updateData = `
    UPDATE tasks SET name=?, description=?, completed=?, updated_at = datetime('now') WHERE id = ? AND deleted_at IS NULL 
  `;

  const values = [name, description, completed, id];
  db.run(updateData, values, function (error) {
    if (error) return res.status(500).json({ error: error.message });
    if (this.changes == 0)
      return res.status(404).json({ message: "No se encontró la quest" });
    res.json({ message: "Datos actualizados correctamente!" });
  });
};

const deleteTask = (req, res) => {
  const { id } = req.params;
  const deleteTasks = `
    UPDATE tasks SET deleted_at = datetime('now') WHERE id = ? AND deleted_at IS NULL
  `;

  db.run(deleteTasks, [id], function (error) {
    if (error) return res.status(500).json({ error: "Algo salió mal" });
    if (this.changes == 0)
      return res.status(404).json({ message: "No se encontró la quest" });
    res.status(200).json({ message: "Quest eliminada exitosamente!" });
  });
};

module.exports = { getTask, getTasks, createTask, updateTask, deleteTask };
