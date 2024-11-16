# ToDoApp
A simple functional Todo List application built with SvelteKit, using the Todoist API to manage tasks. This app allows users to create, read, update, and delete tasks seamlessly. It's designed with modern UI practices, leveraging Tailwind CSS for styling.

#Features
Add tasks to your Todo list.
View all tasks fetched directly from Todoist.
Update task content dynamically.
Delete tasks with confirmation.
Responsive and user-friendly interface.

#Usage
#Add Tasks
Type a task into the input field and click Add to save it.
#View Tasks
All tasks are fetched from your Todoist account and displayed in the list.
#Update Tasks
Edit task content directly in the input field and click the Edit Icon button to save changes.
#Delete Tasks
Click the Delete Icon button to remove a task. A confirmation dialog ensures accidental deletions are avoided.

#Folder Structure 
src/
├── lib/
│   └── todoistAPI.js       # Contains all API interaction logic # You should write your Todoist API token here to use the app.
├── routes/
│   ├── +page.svelte        # Main entry point of the app
│   ├── components/
│   │   ├── TaskForm.svelte # Handles adding new tasks
│   │   ├── TasksList.svelte # Renders the list of tasks
│   │   └── TaskItem.svelte  # Individual task item for update/delete

Technologies Used
SvelteKit - Modern framework for building web apps.
Tailwind CSS - Utility-first CSS framework.
Todoist API - Integration for task management.
