import style from './styles.module.css'
import React from 'react'
import { ReactComponent as IconAdd } from '../../icons/add.svg'
import { ReactComponent as IconAvatar } from '../../icons/user-avatar.svg'
import { ReactComponent as IconArrowDown } from '../../icons/arrow-down.svg'
import { ReactComponent as IconArrowUp } from '../../icons/arrow-up.svg'
import { ReactComponent as IconClose } from '../../icons/close.svg'
import { ReactComponent as IconEdit } from '../../icons/edit.svg'
import { ReactComponent as IconSave } from '../../icons/save.svg'


export const Icon = (props: { name: string }) => {

    const {name} = props

    if (name === 'add') {
        return <IconAdd className={style.icon} />
    }

    if (name === 'avatar') {
        return <IconAvatar className={style.icon} />
    }

    if (name === 'arrow-down') {
        return <IconArrowDown className={style.icon} />
    }

    if (name === 'arrow-up') {
        return <IconArrowUp className={style.icon} />
    }

    if (name === 'close') {
        return <IconClose className={style.icon} />
    }

    if (name === 'edit') {
        return <IconEdit className={style.icon} />
    }

    if (name === 'save') {
        return <IconSave className={style.icon} />
    }
    
}

