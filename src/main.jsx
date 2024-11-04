import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MainLayout from './components/layout/MainLayout.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<MainLayout></MainLayout>
	</React.StrictMode>,
)