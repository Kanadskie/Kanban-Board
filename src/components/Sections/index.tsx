import React from "react"
import Section from "../Section/index.tsx"
import { sectionsProps } from "../../interfaces/interfaces.ts"


export default function Sections({ appData, setAppData }: sectionsProps) {

	const sectionData = [
		{
			name: "Backlog",
			tasks: appData.backlog,
			prevTasks: [],
			mode: "backlog",
			prevMode: "",
		},
		{
			name: "Ready",
			tasks: appData.ready,
			prevTasks: appData.backlog,
			mode: "ready",
			prevMode: "backlog",
		},
		{
			name: "In Progress",
			tasks: appData.inProgress,
			prevTasks: appData.ready,
			mode: "inProgress",
			prevMode: "ready",
		},
		{
			name: "Finished",
			tasks: appData.finished,
			prevTasks: appData.inProgress,
			mode: "finished",
			prevMode: "inProgress",
		}
	]

	return (
		<>
			{sectionData.map((section, index) => (
				<Section
					key={index}
					appData={appData}
					setAppData={setAppData}
					name={section.name}
					tasks={section.tasks}
					prevTasks={section.prevTasks}
					mode={section.mode}
					prevMode={section.prevMode}
				/>
			))}
		</>
	)

}