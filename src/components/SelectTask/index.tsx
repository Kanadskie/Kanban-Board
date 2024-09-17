import React from 'react'
import style from './styles.module.css'


export const SelectTask = (props: { optionsList: any; onChange: React.ChangeEventHandler<HTMLSelectElement>, test: string }) => {

    const {optionsList, onChange, test} = props

    return (

        <div className={style.select}>

            <select className={style.select_item} onChange={onChange} data-testid='select'>

                <option value=''>Choose task...</option>

                {optionsList?.map((option: { id: string; name: string}) => {

                    return (

                        <option
                            className={style.select_item_option} 
                            id={option.id}
                            data-testid={test}
                            value={option.name}>{option.name}
                        </option>

                    )

                })}

            </select>

        </div>
        
    )

}