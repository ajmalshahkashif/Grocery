// src/views/widgets/Widgets.tsx
import React from 'react'
import {
    CCard,
    CCardBody,
    CCardGroup,
    CCardHeader,
    CCol,
    CLink,
    CRow,
    CWidgetStatsB,
    CWidgetStatsC,
    CWidgetStatsE,
    CWidgetStatsF,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
    cilArrowRight,
    cilBasket,
    cilBell,
    cilChartPie,
    cilMoon,
    cilLaptop,
    cilPeople,
    cilSettings,
    cilSpeech,
    cilSpeedometer,
    cilUser,
    cilUserFollow,
} from '@coreui/icons'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import { DocsExample } from 'src/components'

import WidgetsBrand from './WidgetsBrand'
import WidgetsDropdown from './WidgetsDropdown'

// No props needed, but you could add interface if you want to pass className or similar
const Widgets: React.FC = () => {
    const random = (min: number, max: number): number =>
        Math.floor(Math.random() * (max - min + 1) + min)

    return (
        <CCard className="mb-4">
            <CCardHeader>Widgets</CCardHeader>
            <CCardBody>
                <DocsExample href="components/widgets/#cwidgetstatsa">
                    <WidgetsDropdown />
                </DocsExample>

                {/* Example usage of CWidgetStatsB */}
                <DocsExample href="components/widgets/#cwidgetstatsb">
                    <CRow xs={{ gutter: 4 }}>
                        <CCol xs={12} sm={6} xl={4} xxl={3}>
                            <CWidgetStatsB
                                progress={{ color: 'success', value: 89.9 }}
                                text="Lorem ipsum dolor sit amet enim."
                                title="Widget title"
                                value="89.9%"
                            />
                        </CCol>
                        {/* ...other CCol blocks unchanged */}
                    </CRow>
                </DocsExample>

                {/* Example usage of CWidgetStatsE with charts */}
                <DocsExample href="components/widgets/#cwidgetstatse">
                    <CRow xs={{ gutter: 4 }}>
                        <CCol sm={4} md={3} xl={2}>
                            <CWidgetStatsE
                                chart={
                                    <CChartBar
                                        className="mx-auto"
                                        style={{ height: '40px', width: '80px' }}
                                        data={{
                                            labels: Array(15).fill('M'),
                                            datasets: [
                                                {
                                                    backgroundColor: getStyle('--cui-danger'),
                                                    borderColor: 'transparent',
                                                    borderWidth: 1,
                                                    data: Array(15).fill(0).map(() => random(40, 100)),
                                                },
                                            ],
                                        }}
                                        options={{
                                            maintainAspectRatio: false,
                                            plugins: { legend: { display: false } },
                                            scales: { x: { display: false }, y: { display: false } },
                                        }}
                                    />
                                }
                                title="title"
                                value="1,123"
                            />
                        </CCol>
                        {/* ...other CCol blocks unchanged */}
                    </CRow>
                </DocsExample>

                {/* Example usage of CWidgetStatsF */}
                <DocsExample href="components/widgets/#cwidgetstatsf">
                    <CRow xs={{ gutter: 4 }}>
                        <CCol xs={12} sm={6} xl={4} xxl={3}>
                            <CWidgetStatsF
                                icon={<CIcon width={24} icon={cilSettings} size="xl" />}
                                title="income"
                                value="$1.999,50"
                                color="primary"
                            />
                        </CCol>
                        {/* ...other CCol blocks unchanged */}
                    </CRow>
                </DocsExample>

                {/* Example usage of WidgetsBrand */}
                <DocsExample href="components/widgets/#cwidgetstatsd">
                    <WidgetsBrand />
                </DocsExample>
                <DocsExample href="components/widgets/#cwidgetstatsd">
                    <WidgetsBrand withCharts />
                </DocsExample>

                {/* Example usage of CWidgetStatsC */}
                <DocsExample href="components/widgets/#cwidgetstatsc">
                    <CCardGroup className="mb-4">
                        <CWidgetStatsC
                            icon={<CIcon icon={cilPeople} height={36} />}
                            value="87.500"
                            title="Visitors"
                            progress={{ color: 'info', value: 75 }}
                        />
                        {/* ...other CWidgetStatsC blocks unchanged */}
                    </CCardGroup>
                </DocsExample>
            </CCardBody>
        </CCard>
    )
}

export default Widgets
