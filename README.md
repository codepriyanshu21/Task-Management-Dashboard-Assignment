

# Task Management Dashboard

A modern, responsive task management dashboard built with React, **TypeScript**, and Tailwind CSS.

## Features

- Dashboard with stats cards and task table
- Task modal with detailed view and rich UI
- Sidebar navigation and top header
- Filtering, sorting, and tabbed navigation for tasks
- Clean, modern design with Tailwind CSS
- No backend required (demo data included)


## Tech Stack

- React (functional components, hooks)
- **TypeScript** for type safety
- Tailwind CSS for styling
- Vite for fast development and builds
- Lucide React icons

## Getting Started

1. **Install dependencies:**
	 ```bash
	 npm install
	 ```

2. **Run the development server:**
	 ```bash
	 npm run dev
	 ```

3. **Open your browser:**
	 Visit [http://localhost:5173](http://localhost:5173)

## Project Structure


```
my-app/
	project/
		src/
			components/
				Dashboard.tsx
				Header.tsx
				Sidebar.tsx
				StatsCards.tsx
				TaskModal.tsx
				TaskTable.tsx
			App.tsx
			index.css
			main.tsx
		index.html
		tailwind.config.js
		postcss.config.js
		vite.config.ts
		package.json
```

## Customization

- All UI and features are in the `src/components` folder.
- Easily extend with your own data or connect to an API.

## Deployment

- Ready to deploy on Vercel, Netlify, or any static hosting.
