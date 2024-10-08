import React from 'react'
import style from './styles.module.css'

export const InputTask = (props: { onChange: React.ChangeEventHandler<HTMLInputElement>; value: string, test: string}) => {

    const {onChange, value, test} = props

    return (
    
        <div className={style.input}>

            <input data-testid={test} className={style.input_element} autoComplete='off' onChange={onChange} autoFocus type='text' value={value}/>

        </div>

    )
    
}