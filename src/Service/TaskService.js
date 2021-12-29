import Task from "../Entities/Task";

class TaskService {
  constructor() {}

  save(item) {
    let task = new Task();
    task.setText(item);

    return fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
  }
  update(item) {
    console.log("item Update çalıştı.", item);

    return fetch(`http://localhost:3000/tasks/${item.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: "dddd" }),
    });
  }
}
export default TaskService;
