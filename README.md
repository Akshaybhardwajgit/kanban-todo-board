# Trello-style Todo Board (React)

A Kanban-style task manager built with React, featuring MVC architecture and integration with the DummyJSON Todos API.

## 🚀 Features

- Drag-and-drop between lanes (Pending, In Progress, Completed)
- Add, edit, and delete todos
- Responsive and clean UI
- API integrated with live DummyJSON
- Optimized rendering with React hooks and memoization

## 🧱 Architecture

- **Model**: Handles API and data transformations
- **View**: Stateless components (TodoCard, Lane, Board)
- **Controller**: Manages state, drag-and-drop logic, and user actions

## 🛠️ Tech Stack

- React (with TypeScript)
- React Beautiful DnD
- React Router (for lazy routing)
- DummyJSON API

## 📦 Setup Instructions

```bash
git clone https://github.com/your-username/trello-todo-react.git
cd trello-todo-react
npm install
npm start
