import React, { ReactNode } from "react"


export const Button = (props: { onClick: React.MouseEventHandler<HTMLButtonElement>; text: string; currentBtnClass: string; icon: ReactNode; btnStatus: boolean; test: string }) => {

    const {onClick, text, currentBtnClass, icon, btnStatus, test} = props

    return (

        <button data-testid={test} className={currentBtnClass} disabled={btnStatus} onClick={onClick}>{icon}{text}</button>

    )
    
}