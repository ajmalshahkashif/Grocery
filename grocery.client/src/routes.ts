import React from 'react'

// Core pages
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Charts = React.lazy(() => import('./views/charts/Charts'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))
const PatientRegister = React.lazy(() => import('./views/patients/PatientRegister'))


// Widgets
const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

export interface AppRoute {
    path: string
    exact?: boolean
    name?: string
    element?: React.LazyExoticComponent<React.ComponentType<any>>
}

const routes: AppRoute[] = [
    { path: '/', exact: true, name: 'Home' },

    // Dashboard
    { path: '/dashboard', name: 'Dashboard', element: Dashboard },

    { path: '/patients/register', name: 'Patient Register', element: PatientRegister },

    // Theme
    { path: '/theme', name: 'Theme', element: Colors, exact: true },

    { path: '/theme/colors', name: 'Colors', element: Colors },

    // Charts
    { path: '/charts', name: 'Charts', element: Charts },

    // Notifications
    { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
    { path: '/notifications/alerts', name: 'Alerts', element: Alerts },

    // =========================
    // BADGES MODULE (MAIN PAGE)
    // =========================
    { path: '/notifications/badges', name: 'Badges', element: Badges },

    // INTERNAL SUB ROUTES (NOT sidebar)
    { path: '/notifications/badges/basic', name: 'Badges Basic', element: Badges },
    { path: '/notifications/badges/advanced', name: 'Badges1', element: Badges },

    // Other notifications
    { path: '/notifications/modals', name: 'Modals', element: Modals },
    { path: '/notifications/toasts', name: 'Toasts', element: Toasts },

    // Widgets
    { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes