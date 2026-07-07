import React from 'react'
import type { ReactNode } from 'react'
 
import { CNav, CNavItem, CNavLink, CTabContent, CTabPane } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilCode, cilMediaPlay } from '@coreui/icons'

// Define props interface
interface DocsExampleProps {
    children?: ReactNode
    href: string
    tabContentClassName?: string
}

const DocsExample: React.FC<DocsExampleProps> = ({ children, href, tabContentClassName }) => {
    const _href = `https://coreui.io/react/docs/${href}`

    return (
        <div className= "example" >
        <CNav variant="underline-border" >
            <CNavItem>
            <CNavLink href="#" active >
                <CIcon icon={ cilMediaPlay } className = "me-2" />
                    Preview
                    </CNavLink>
                    </CNavItem>
                    < CNavItem >
                    <CNavLink href={ _href } target = "_blank" rel = "noopener noreferrer" >
                        <CIcon icon={ cilCode } className = "me-2" />
                            Code
                            </CNavLink>
                            </CNavItem>
                            </CNav>
                            < CTabContent className = {`rounded-bottom ${tabContentClassName ? tabContentClassName : ''}`
}>
    <CTabPane className="p-3 preview" visible >
        { children }
        </CTabPane>
        </CTabContent>
        </div>
  )
}

export default React.memo(DocsExample)
