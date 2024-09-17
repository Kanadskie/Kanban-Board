import style from './styles.module.css'
import btnStyle from '../../components/Button/styles.module.css'
import React, { useEffect, useRef, useState } from "react"
import { task, sectionProps } from '../../interfaces/interfaces.ts'
import { setData, getData, setId } from '../../data/data.ts'
import { Button } from '../Button/index.tsx'
import { InputTask } from '../InputTask/index.tsx'
import { Icon } from '../Icon/index.tsx'
import { Link } from 'react-router-dom'
import { SelectTask } from '../SelectTask/index.tsx'


export default function Section({appData, setAppData, tasks, prevTasks, name, mode, prevMode}: sectionProps) {

	const [btnState, setBtnState] = useState(false)
	const [btnDisabled, setBtnDisabled] = useState(false)
	const [sectionType, setSectionType] = useState(0)
	const [input, setInput] = useState('')
	const ref = useRef<null | HTMLDivElement>(null)


	useEffect(() => {
		setAppData(getData())
		if (mode !== 'backlog' && !prevTasks?.length) {
			setBtnDisabled(true)
		} else {
			setBtnDisabled(false)
		}
	}, [!prevTasks?.length])

	useEffect(() => {
		if (ref.current !== null) {
			ref.current.scrollTop = ref.current.clientHeight + ref.current.scrollHeight
		}
	}, [tasks])

	const addTask = (task: task, mode: string) => {
		const currentSection: task[] = appData[mode]
		currentSection.push(task)
		setData(appData)
		setAppData(getData())
		setInput('')
		setSectionType(0)
	}

	const deleteTask = (task: task, mode: string) => {
		const currentSection: task[] = appData[mode]
		currentSection.forEach((searchingTask, index) => task.id === searchingTask.id && currentSection.splice(index, 1))
		setData(appData)
		setAppData(getData())
	}

	const handleClickAddField = () => {
		if (mode === 'backlog') {
			setSectionType(1)
			setBtnState(true)
			setBtnDisabled(true)
		} else {
			setSectionType(2)
			setBtnDisabled(true)
		}
	}

	const handleClickSubmitBtn = () => {
		const id = setId()
		if (mode === 'backlog') {
			const result: task = {
				id: id,
				name: input,
				description: 'This task has no description'
			}
			addTask(result, mode)
			handleClickDeleteBtn()
		}
	}

	const handleClickSelect = (e: any) => {
		const selectedOption = e.target.value
		const choosenTask: any = prevTasks.find((task) => task.name === selectedOption)
		addTask(choosenTask, mode)
		deleteTask(choosenTask, prevMode)
		setBtnDisabled(false)
	}

	const handleClickDeleteBtn = () => {
		setSectionType(0)
		setBtnState(false)
		setBtnDisabled(false)
	}

	const allowToPost = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setInput(value)
		setBtnDisabled(value === '')
	}

	return (

		<div className={style.container}>

        	<div className={style.block}>

            	<div className={style.block_header}>{name}</div>

            	<div className={style.block_tasks} ref={ref}>

					{tasks?.map((task) => (

						<Link
							data-testid={`${mode}-task`}
							to={`${mode}/${task.id}/description`}
							key={task.id}
							className={style.link}
						>
						
							<div className={style.block_tasks__item}>{task.name}</div>

						</Link>

					))}
            
					{sectionType === 1 ? (

						<InputTask 
							test={`${mode}-input`}
							onChange={allowToPost} 
							value={input}
						/>

						) : sectionType === 2 ? (

						<SelectTask 
							optionsList={prevTasks} 
							onChange={handleClickSelect}
							test={'selected-option'}
						/>

						) : (

						''
					)}
            
            	</div>

    		</div>

			<div className={style.block_btns}>

				<Button
					test={`${mode}-button`}
					icon={btnState ? '' : <Icon name={'add'} />} 
					currentBtnClass={btnState ? `${btnStyle.btn} ${btnStyle.btn_submit}` : `${btnStyle.btn}`} 
					onClick={btnState ? handleClickSubmitBtn : handleClickAddField} 
					text={btnState ? 'Submit' : 'Add card'} 
					btnStatus={btnDisabled}
				/>

				{sectionType === 1 || sectionType === 2 ? (

					<Button
						currentBtnClass={`${btnStyle.btn} ${btnStyle.btn_delete}`}
						onClick={handleClickDeleteBtn}
						text={'Delete'} 
						icon={undefined} 
						btnStatus={false} 
						test={''}					
					/>

					) : (
						
					''
				)}

			</div>

    	</div>

	)

}