import { FC } from 'react'
import { IMenuItem } from './menu.interface'

interface INavItem {
    item: IMenuItem
}

const NavItem: FC<INavItem> = ({ item }) => {
    return (
        <div>{item.name}</div>
    )
}

export default NavItem