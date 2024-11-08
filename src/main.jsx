import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
	createBrowserRouter,
	RouterProvider,
  } from "react-router-dom";
import MainLayout from './components/layout/MainLayout';
import ErrorPage from './components/errorPage/ErrorPage.jsx';
import Dashboard from './dashboard/Dashboard.jsx';
import Feedback from './feedback/Feedback.jsx';
import Statistic from './statistic/Statistic.jsx';
import Home from './home/Home.jsx';
import BookDetail from './BookDetail/BookDetail.jsx';
import CoffeeCard from './components/computer/CoffeeCard.jsx';



const router = createBrowserRouter([
	{
	  path: "/",
	  element:<MainLayout></MainLayout>,
	  errorElement: <ErrorPage></ErrorPage>,
	  children:[
		{
			path: "/",
			element:<Home></Home>,
			loader: () => fetch('../categories.json'),
			children:[
				{
					path: "/",
					element: <CoffeeCard></CoffeeCard>,
					loader: () => fetch('../computer.json')
				},
				{
					path: "/categoryIssue/:Category",
					element: <CoffeeCard></CoffeeCard>,
					loader: () => fetch('../computer.json')
				},
			]
		}, 
		{
			path: 'item/:product_id',
			element: <BookDetail></BookDetail>,
			loader: () => fetch('/computer.json')
		},
		{
			path: 'dashboard',
			element: <Dashboard></Dashboard>
		},
		{
			path: 'statistic',
			element: <Statistic></Statistic>
		},
		{
			path: 'feedback',
			element: <Feedback></Feedback>
		},
		
	  ]
	},
  ]);



ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)