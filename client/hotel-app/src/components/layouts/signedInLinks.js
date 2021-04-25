import React from 'react'
import { NavLink, NavItem } from 'reactstrap'

export default function signedInLinks() {
    return (
        <NavItem>
            <NavLink href="/signout">Log Out</NavLink>
        </NavItem>
    )
}
