import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

// routes config
import routes from '../routes'

// Define a type for route objects
interface AppRoute {
    path: string
    exact?: boolean
    name?: string
    element?: React.ComponentType
}

const AppContent: React.FC = () => {
    return (
        <CContainer className="px-4" fluid >
            <Suspense fallback={ <CSpinner color="primary" />}>
                <Routes>
                    {(routes as AppRoute[]).map((route, idx) =>
                        route.element ? (
                            <Route
                                key={idx}
                                path={route.path}
                                element={React.createElement(route.element)}
                            />
                        ) : null
                    )}

<Route path="/" element = {< Navigate to = "dashboard" replace />} />
    </Routes>
    </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
