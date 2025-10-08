 const taskInput = document.getElementById('taskInput');
    const addBtn = document.getElementById('addBtn');
    const taskList = document.getElementById('taskList');

    function addTask() {
      const text = taskInput.value.trim();
      if (!text) return alert('Enter a task first!');

      const li = document.createElement('li');
      li.className = 'task-item';

      const span = document.createElement('span');
      span.className = 'task-text';
      span.textContent = text;

      const del = document.createElement('button');
      del.className = 'delete-btn';
      del.textContent = 'Delete';
      del.onclick = () => li.remove();

      li.append(span, del);
      taskList.appendChild(li);

      taskInput.value = '';
      taskInput.focus();
    }

    addBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', e => e.key === 'Enter' && addTask());