document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form")
  const list = document.getElementById("list")

  form.addEventListener('Submit', (e) => {
    e.preventDefault()
    const task = document.getElementById('new-task-description').value 
    const li = document.createElement('li')
    li.innerText = task
    //edit list
    const editBtn = document.createElement('button')
    editBtn.innerText = 'Edit'
    editBtn.style.fontsize = '15px'

    editBtn.addEventListener('click', (e) => {
      const editTask = prompt('Edit Task')
      li.innerText = editTask
    })
    li.appendChild(editBtn)
    //delete list
    const deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'Delete'
    deleteBtn.style.fontsize = '15px'
    deleteBtn.addEventListener('click', (e) => {
      e.target.parentElement.remove()
    })
    li.appendChild(deleteBtn)

    list.appendChild(li)
    form.reset()
  })
});
