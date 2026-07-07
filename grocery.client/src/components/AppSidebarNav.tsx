import React from 'react'
import { NavLink } from 'react-router-dom'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

import { CBadge, CNavLink, CSidebarNav } from '@coreui/react'

// Define types for badge and navigation items
interface NavBadge {
    color: string
    text: string
}

interface NavItem {
    component: React.ElementType
    name?: string
    badge?: NavBadge
    icon?: React.ReactNode
    to?: string
    href?: string
    items?: NavItem[]
    [key: string]: any // allow extra props
}

interface AppSidebarNavProps {
    items: NavItem[]
}

export const AppSidebarNav: React.FC<AppSidebarNavProps> = ({ items }) => {
    const navLink = (
        name?: string,
        icon?: React.ReactNode,
        badge?: NavBadge,
        indent: boolean = false
    ) => {
        return (
            <>
            {
                icon
                ? icon
                    : indent && (
                        <span className="nav-icon">
                            <span className="nav-icon-bullet"> </span>
                                </span>
            )
    }
    { name }
    {
        badge && (
            <CBadge color={ badge.color } className = "ms-auto" size = "sm" >
                { badge.text }
                </CBadge>
        )}
</>
    )
  }

const navItem = (item: NavItem, index: number, indent: boolean = false) => {
    const { component, name, badge, icon, ...rest } = item
    const Component = component
    return (
        <Component as= "div" key = { index } >
        {
            rest.to || rest.href ? (
                <CNavLink
            { ...(rest.to && { as: NavLink }) }
            {...(rest.href && { target: '_blank', rel: 'noopener noreferrer' }) }
    {...rest }
          >
        { navLink(name, icon, badge, indent) }
        </CNavLink>
        ) : (
    navLink(name, icon, badge, indent)
)}
</Component>
    )
  }

const navGroup = (item: NavItem, index: number) => {
    const { component, name, icon, items, ...rest } = item
    const Component = component
    return (
        <Component compact as= "div" key = { index } toggler = { navLink(name, icon) } {...rest }>
            { items?.map((child, idx) =>
child.items ? navGroup(child, idx) : navItem(child, idx, true)
        )}
</Component>
    )
  }

return (
    <CSidebarNav as= { SimpleBar } >
    { items &&
    items.map((item, index) =>
        item.items ? navGroup(item, index) : navItem(item, index)
    )}
</CSidebarNav>
  )
}
