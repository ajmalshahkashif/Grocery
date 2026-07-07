import React from 'react'
import { useLocation } from 'react-router-dom'
import routes from '../routes'
import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react'

// Define a breadcrumb type
interface Breadcrumb {
    pathname: string
    name: string
    active: boolean
}

const AppBreadcrumb: React.FC = () => {
    const currentLocation: string = useLocation().pathname

    const getRouteName = (pathname: string, routes: any[]): string | false => {
        const currentRoute = routes.find((route) => route.path === pathname)
        return currentRoute ? currentRoute.name : false
    }

    const getBreadcrumbs = (location: string): Breadcrumb[] => {
        const breadcrumbs: Breadcrumb[] = []
        location.split('/').reduce((prev, curr, index, array) => {
            const currentPathname = `${prev}/${curr}`
            const routeName = getRouteName(currentPathname, routes)
            if (routeName) {
                breadcrumbs.push({
                    pathname: currentPathname,
                    name: routeName,
                    active: index + 1 === array.length,
                })
            }
            return currentPathname
        })
        return breadcrumbs
    }

    const breadcrumbs = getBreadcrumbs(currentLocation)

    return (
        <CBreadcrumb className= "my-0" >
        <CBreadcrumbItem href="/" > Home </CBreadcrumbItem>
    {
        breadcrumbs.map((breadcrumb, index) => (
            <CBreadcrumbItem
          { ...(breadcrumb.active ? { active: true } : { href: breadcrumb.pathname }) }
          key = { index }
            >
            { breadcrumb.name }
            </CBreadcrumbItem>
        ))
    }
    </CBreadcrumb>
  )
}

export default React.memo(AppBreadcrumb)
