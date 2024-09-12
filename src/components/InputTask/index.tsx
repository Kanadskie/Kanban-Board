import React from 'react'
import style from './styles.module.css'

export const InputTask = (props: { onChange: any; test: string}) => {

    const {onChange, test} = props

    return (
    
        <div className={style.input}>

            <input data-testid={test} className={style.input_element} autoComplete='off' onChange={onChange} autoFocus type='text'></input>

        </div>

    )
    
}