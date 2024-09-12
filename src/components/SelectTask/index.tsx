import React from 'react'
import style from './styles.module.css'


export const SelectTask = (props: { optionsList: any; clickSelected: any, test: string }) => {

    const {optionsList, clickSelected, test} = props

    return (

        <div className={style.select}>

            <select className={style.select_item} onChange={clickSelected} data-testid='select'>

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