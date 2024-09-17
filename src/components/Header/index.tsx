import style from './styles.module.css'
import style_menu from '../UserPanel/styles.module.css'
import React from 'react'
import { useState } from "react"
import { UserPanel } from '../UserPanel/index.tsx'


export const Header = () => {

    const [direction, setDirection] = useState('arrow-down')
    const [clicked, setClicked] = useState(false)
    const [hide, setHide] = useState(true)

    const openMenu = () => {
        setDirection('arrow-up')
        setClicked(true)
        setHide(false)
    }

    const closeMenu = () => {
        setDirection('arrow-down')
        setClicked(false)
        setHide(true)
    }

    return (
        
        <div className={style.header}>

            <div className={style.container}>

                <span className={style.title}>Awesome Kanban Board</span>

                <UserPanel 
                    arrowType = {direction}
                    onClick = {clicked ? closeMenu : openMenu}
                    hide = {hide ? `${style_menu.user_panel_menu__hide}` : `${style_menu.user_panel_menu}`}
                />

            </div>

        </div>

    )

}