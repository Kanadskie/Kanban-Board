import React from "react"


export const Button = (props: { action: any; text: string; currentBtnClass: string; icon: any; btnStatus: boolean; test: string }) => {

    const {action, text, currentBtnClass, icon, btnStatus, test} = props

    return (

        <button data-testid={test} className={currentBtnClass} disabled={btnStatus} onClick={action}>{icon}{text}</button>

    )
    
}