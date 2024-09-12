import style from './styles.module.css'
import React from 'react'

export const Footer = (props: { active: number; finished: number; year: string }) => {

    const {active, finished, year} = props

    return (
        
        <div className={style.footer}>

            <div className={style.container}>

                <div className={style.counters_block}>
                    
                    <div className={style.active}>

                        Active tasks: {active}

                    </div>

                    <div className={style.finished}>

                        Finished tasks: {finished}

                    </div>

                </div>

                <div className={style.copyright}>
                    
                    Kanban board by {'Kanadskie'}, {year}

                </div>

            </div>

        </div>
    )
}