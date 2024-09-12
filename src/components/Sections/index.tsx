import React from "react"
import Section from "../Section/index.tsx"
import { sectionsProps } from "../../interfaces/interfaces.ts"


export default function Sections({ appData, setAppData }: sectionsProps) {

	return (

		<>

			<Section
				appData={appData}
				setAppData={setAppData}
				name={'Backlog'}
				tasks={appData.backlog}
				prevTasks={[]}
				mode={'backlog'}
				prevMode={''}
			/>

			<Section
				appData={appData}
				setAppData={setAppData}
				name={'Ready'}
				tasks={appData.ready}
				prevTasks={appData.backlog}
				mode={'ready'}
				prevMode={'backlog'}
			/>

			<Section
				appData={appData}
				setAppData={setAppData}
				name={'In Progress'}
				tasks={appData.inProgress}
				prevTasks={appData.ready}
				mode={'inProgress'}
				prevMode={'ready'}
			/>

			<Section
				appData={appData}
				setAppData={setAppData}
				name={'Finished'}
				tasks={appData.finished}
				prevTasks={appData.inProgress}
				mode={'finished'}
				prevMode={'inProgress'}
			/>
    
    	</>

  	) 

}