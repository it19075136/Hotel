import React from 'react'
import { NavLink, NavItem } from 'reactstrap'

export default function signedOutLinks() {
    return (
        <div>
        <NavItem>
        <NavLink href="/register">Sign Up</NavLink>
        </NavItem>
        <NavItem>
        <NavLink href="/signin">Sign in</NavLink>
        </NavItem>
        </div>
    )
}
