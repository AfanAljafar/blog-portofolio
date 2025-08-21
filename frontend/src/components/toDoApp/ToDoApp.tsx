import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, updateToDo, deleteToDo } from "../../redux/toDoSlice";

const TodoApp = () => {
  const dispatch = useDispatch();
  const toDos = useSelector((state) => state.toDoApp.toDos);
  const [newTodo, setNewTodo] = useState({
    task: "",
    description: "",
    startDate: "",
    finishDate: "",
    progress: "",
    status: "",
  });
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
  };

  const handleAddOrUpdate = () => {
    if (editId !== null) {
      dispatch(updateToDo({ id: editId, data: newTodo }));
      setEditId(null);
    } else {
      dispatch(addToDo({ ...newTodo, id: Date.now() }));
    }
    setNewTodo({
      task: "",
      description: "",
      startDate: "",
      finishDate: "",
      progress: "",
      status: "",
    });
  };

  const handleEdit = (id) => {
    const todo = toDos.find((item) => item.id === id);
    if (todo) {
      setNewTodo({ ...todo });
      setEditId(id);
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteToDo(id));
  };

  return (
    <div className="w-full h-full p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📝 To-Do App (Redux)</h1>

      {/* form input */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <input
          type="text"
          name="task"
          value={newTodo.task}
          onChange={handleChange}
          placeholder="Task"
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="description"
          value={newTodo.description}
          onChange={handleChange}
          placeholder="Description"
          className="p-2 border rounded"
        />
        <input
          type="date"
          name="startDate"
          value={newTodo.startDate}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          type="date"
          name="finishDate"
          value={newTodo.finishDate}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="progress"
          value={newTodo.progress}
          onChange={handleChange}
          placeholder="Progress update"
          className="p-2 border rounded"
        />
        <select
          name="status"
          value={newTodo.status}
          onChange={handleChange}
          className="p-2 border rounded"
        >
          <option value="">Status</option>
          <option value="Pending">Pending</option>
          <option value="Ongoing">Ongoing</option>
          <option value="Completed">Completed</option>
        </select>
        <button
          onClick={handleAddOrUpdate}
          className="md:col-span-3 bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          {editId !== null ? "Update Todo" : "Add Todo"}
        </button>
      </div>

      {/* table */}
      <div className="overflow-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Task</th>
              <th className="p-2 border">Description</th>
              <th className="p-2 border">Start Date</th>
              <th className="p-2 border">Finish Date</th>
              <th className="p-2 border">Progress</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {toDos.map((todo) => (
              <tr key={todo.id} className="border-t">
                <td className="p-2 border">{todo.id}</td>
                <td className="p-2 border">{todo.task}</td>
                <td className="p-2 border">{todo.description}</td>
                <td className="p-2 border">{todo.startDate}</td>
                <td className="p-2 border">{todo.finishDate}</td>
                <td className="p-2 border">{todo.progress}</td>
                <td className="p-2 border">{todo.status}</td>
                <td className="p-2 border flex gap-2">
                  <button
                    onClick={() => handleEdit(todo.id)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(todo.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {toDos.length === 0 && (
              <tr>
                <td colSpan="8" className="text-center p-4 text-gray-500">
                  No tasks found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoApp;
