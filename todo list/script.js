let input = document.getElementById("input");
let add = document.getElementById("add");
let tasklist = document.getElementById("tasklist");

add.addEventListener("click", function () {
  let tasktext = input.value.trim();

  if (tasktext === "") {
    alert("⚠️ Please enter a task");
    return;
  }

  let li = document.createElement("li");

  li.innerHTML = `
    <span>✅ ${tasktext}</span>
    <span class="delete">🗑️</span>
  `;

  li.querySelector(".delete").addEventListener("click", function () {
    li.remove();
  });

  tasklist.appendChild(li);
  input.value = "";
});
