import style from './styles.module.css'
import React from 'react'
import { Icon } from '../Icon/index.tsx'


export const UserPanel = (props: { arrowType: string; onClick: React.MouseEventHandler<HTMLDivElement>; hide: string }) => {

    const {arrowType, onClick, hide} = props

    return (
        
        <div className={style.wapper}>

            <div className={style.user_panel} onClick={onClick}>

                <Icon name={'avatar'} />
                <Icon name={arrowType} />

            </div>
            
            <nav className={hide}>

                <div className={style.user_panel_menu_square}></div>

                <ul className={style.user_panel_menu_list}>

                    <li className={style.user_panel_menu_list__item}>Profile</li>

                    <li className={style.user_panel_menu_list__item}>Log Out</li>

                </ul>

            </nav>

        </div>

    )

}