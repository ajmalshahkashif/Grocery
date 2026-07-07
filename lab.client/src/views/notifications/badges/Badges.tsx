import React, { useState } from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CBadge,
    CRow,
    CNav,
    CNavItem,
    CNavLink,
    CTabContent,
    CTabPane,
} from '@coreui/react'

import { DocsComponents, DocsExample } from 'src/components'

const Badges = () => {
    const [activeKey, setActiveKey] = useState(1)

    return (
        <CRow>
            <CCol xs={12}>
                <DocsComponents href="components/badge/" />
            </CCol>

            {/* ===================== */}
            {/* TAB NAVIGATION */}
            {/* ===================== */}
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Badges Module</strong>
                    </CCardHeader>

                    <CCardBody>
                        <CNav variant="tabs">
                            <CNavItem>
                                <CNavLink
                                    active={activeKey === 1}
                                    onClick={() => setActiveKey(1)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    Basic
                                </CNavLink>
                            </CNavItem>

                            <CNavItem>
                                <CNavLink
                                    active={activeKey === 2}
                                    onClick={() => setActiveKey(2)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    Badges1
                                </CNavLink>
                            </CNavItem>
                        </CNav>

                        <CTabContent className="pt-3">

                            {/* ===================== */}
                            {/* TAB 1 - BASIC */}
                            {/* ===================== */}
                            <CTabPane visible={activeKey === 1}>
                                <h5>Basic Badges</h5>

                                <DocsExample href="components/badge">
                                    <h1>
                                        Example heading <CBadge color="secondary">New</CBadge>
                                    </h1>

                                    <CButton color="primary">
                                        Notifications <CBadge color="secondary">4</CBadge>
                                    </CButton>
                                </DocsExample>

                            </CTabPane>

                            {/* ===================== */}
                            {/* TAB 2 - BADGES1 */}
                            {/* ===================== */}
                            <CTabPane visible={activeKey === 2}>
                                <h5>Badges1 (Advanced View)</h5>

                                <DocsExample href="components/badge">
                                    <CBadge color="success">Advanced Badge</CBadge>
                                    <CBadge color="warning" shape="rounded-pill">
                                        Pill Style
                                    </CBadge>
                                    <CBadge color="info">Custom Variant</CBadge>
                                </DocsExample>

                            </CTabPane>

                        </CTabContent>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default Badges