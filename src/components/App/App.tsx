import './App.css'
import React, { useEffect, useState } from 'react'
import Sections from '../Sections/index.tsx'
import { Footer } from '../Footer/index.tsx'
import { Header } from '../Header/index.tsx'
import { TaskDescription } from '../TaskDescription/index.tsx'
import { getData, activeCounter, finishedCounter} from '../../data/data.ts'
// import { createBrowserRouter } from 'react-router-dom'
import { createHashRouter, RouterProvider } from 'react-router-dom'


function App() {

	const [appData, setAppData] = useState(getData())
	const [activeTasksCounter, setActiveTasksCounter] = useState(activeCounter())
	const [finishedTasksCounter, setFinishedTasksCounter] = useState(finishedCounter())


	useEffect(() => {
		setActiveTasksCounter(activeCounter())
		setFinishedTasksCounter(finishedCounter())
	}, [appData])

	const getYear = () => {
		return new Date().toUTCString().substring(12, 16)
	}

  	const router = createHashRouter([
		{
			path: './',
			element: <Sections appData={appData} setAppData={setAppData} />,
		},
    	{
			path: ':mode/:id/description/',
			element: <TaskDescription />,
			loader: ({ params }) => {
				const data: any = getData()
				const id: string | undefined = params.id
				const mode: string | undefined = params.mode
				const result = mode && data[mode].find((task: { id: number }) => task.id === Number(id))
				return {
				task: result,
				mode: mode
				}
      		},
    	},
  	])

	return (
    
		<div className="App">
			
			<Header />

			<div className='main'>

				<div className='blocks'>

					<RouterProvider 
						router={router} 
					/>

				</div>

			</div>

			<Footer 
				active={activeTasksCounter} 
				finished={finishedTasksCounter} 
				year={getYear()} 
			/>

		</div>

  	)

}

export default App
