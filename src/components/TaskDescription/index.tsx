import style from './styles.module.css'
import React, { useRef, useState } from 'react'
import { useLoaderData, Link } from 'react-router-dom'
import { data } from '../../interfaces/interfaces.ts'
import { getData, setData } from '../../data/data.ts'
import { Icon } from '../Icon/index.tsx'


export const TaskDescription = () => {

    const current: any = useLoaderData()
    const [editMode, setEditMode] = useState(false)
    const [editFieldState, setEditFieldState] = useState(current.task.description)
    const ref = useRef(null)

    const editDescription = (e: any) => {
        let value = e.target.value
        setEditFieldState(value)
    }

    const saveEditedData = () => {
        if (editMode) {
            const data: data = getData()
            const task: any | undefined = data[current.mode].find((task) => task.id === Number(current.task.id))
            task.description = editFieldState
            setData(data)
        }
        setEditMode(!editMode)
    }

    return (
    
        <div className={style.container}>

            <div className={style.details}>

                <div className={style.details_header}>

                    <h2 className={style.details_header_name}>{current.task.name}</h2>

                    <div className={style.btns_block}>

                        <Link
                            to={window.location.pathname}
                            onClick={saveEditedData}
                        >

                            {editMode ? (<Icon name={'save'} />) : (<Icon name={'edit'} />)}

                        </Link>

                        <Link to="/*">

                            <Icon name={'close'} />

                        </Link>

                    </div>

                </div>

                {editMode ? (
                    <textarea
                        className={style.edit_area}
                        onChange={editDescription}
                        value={editFieldState}
                        ref={ref}
                    />

                ) : (

                    <div className={style.description}>{editFieldState}</div>

                )}

            </div>

        </div>
    )
}