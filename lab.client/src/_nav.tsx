import React from 'react'
import CIcon from '@coreui/icons-react'
import {
    cilSpeedometer,
    cilPeople,
    cilLibrary,
    cilChart,
    cilSettings,
    cilUser,
    cilMedicalCross,
    cilClipboard,
    cilDescription,
    cilDollar,
    cilMoney
} from '@coreui/icons'

import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
    // ======================
    // Dashboard
    // ======================
    {
        component: CNavGroup,
        name: 'Dashboard',
        icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
        items: [
            { component: CNavItem, name: 'Daily Revenue', to: '/dashboard/daily-revenue' },
            { component: CNavItem, name: 'Tests Performed Today', to: '/dashboard/tests-performed' },
            { component: CNavItem, name: 'Samples Received Today', to: '/dashboard/samples-received' },
            { component: CNavItem, name: 'Pending Reports / Tests', to: '/dashboard/pending-tests' },
            { component: CNavItem, name: 'Alerts', to: '/dashboard/alerts' },
            { component: CNavItem, name: 'Popular Tests', to: '/dashboard/popular-tests' },
            { component: CNavItem, name: 'My Tasks', to: '/dashboard/my-tasks' },
        ],
    },

    // ======================
    // Patient Management
    // ======================
    {
        component: CNavGroup,
        name: 'Patient Management',
        icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
        items: [
            { component: CNavItem, name: 'Register Patient', to: '/patients/register' },
            { component: CNavItem, name: 'Patient List', to: '/patients/list' },
        ],
    },

    // ======================
    // Inventory
    // ======================
    {
        component: CNavGroup,
        name: 'Inventory / Consumables',
        icon: <CIcon icon={cilLibrary} customClassName="nav-icon" />,
        items: [
            { component: CNavItem, name: 'Item Master', to: '/inventory/items' },
            { component: CNavItem, name: 'Stock In / Out', to: '/inventory/stock' },
            { component: CNavItem, name: 'Stock Adjustment', to: '/inventory/adjustments' },
            { component: CNavItem, name: 'Set Alerts', to: '/inventory/set-alerts' },
            { component: CNavItem, name: 'Stock Alerts', to: '/inventory/alerts' },
            { component: CNavItem, name: 'Supplier Management', to: '/inventory/suppliers' },
            { component: CNavItem, name: 'Purchase Orders / GRN', to: '/inventory/po-grn' },
            { component: CNavItem, name: 'Procurement Requests', to: '/inventory/procurement' },
        ],
    },

    // ======================
    // Reports & Analytics
    // ======================
    {
        component: CNavGroup,
        name: 'Reports & Analytics',
        icon: <CIcon icon={cilChart} customClassName="nav-icon" />,
        items: [
            { component: CNavItem, name: 'Patient Growth Analysis', to: '/reports/patient-growth' },
            { component: CNavItem, name: 'Revenue Reports', to: '/reports/revenue' },
            { component: CNavItem, name: 'Profit & Loss', to: '/reports/profit-loss' },
            { component: CNavItem, name: 'Daily / Monthly Reports', to: '/reports/daily-monthly' },
            { component: CNavItem, name: 'Lab/Test Report', to: '/reports/lab-report' },
            { component: CNavItem, name: 'User Activity Audit', to: '/reports/audit' },
            { component: CNavItem, name: 'Sample Tracking Report', to: '/reports/sample-tracking' },
            { component: CNavItem, name: 'Inventory Report', to: '/reports/inventory' },
            { component: CNavItem, name: 'Staff Performance', to: '/reports/staff-performance' },
            { component: CNavItem, name: 'Custom Report Builder', to: '/reports/builder' },
            { component: CNavItem, name: 'Digital Signature / Approval', to: '/reports/approvals' },
        ],
    },

    // ======================
    // Settings
    // ======================
    {
        component: CNavGroup,
        name: 'Settings',
        icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
        items: [
            { component: CNavItem, name: 'Lab Information', to: '/settings/lab-info' },
            { component: CNavItem, name: 'Invoice Settings', to: '/settings/invoice' },
            { component: CNavItem, name: 'UI / Theme Settings', to: '/settings/theme' },
            { component: CNavItem, name: 'Invoice Numbering Prefixes', to: '/settings/invoice-prefix' },
            { component: CNavItem, name: 'Test Configuration', to: '/settings/test-config' },
            { component: CNavItem, name: 'SMS / Email Templates', to: '/settings/templates' },
            { component: CNavItem, name: 'Payment Gateway Setup', to: '/settings/payment-gateway' },
            { component: CNavItem, name: 'Barcode Settings', to: '/settings/barcode' },
            { component: CNavItem, name: 'Report Template Design', to: '/settings/report-design' },
            { component: CNavItem, name: 'Graphical Test Results', to: '/settings/graphical-results' },
            { component: CNavItem, name: 'Insurance Processing', to: '/settings/insurance' },
            { component: CNavItem, name: 'Backup & Restore', to: '/settings/backup' },
        ],
    },

    // ======================
    // Help & Support
    // ======================
    {
        component: CNavGroup,
        name: 'Help & Support',
        icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
        items: [
            { component: CNavItem, name: 'User Guide', to: '/help/user-guide' },
            { component: CNavItem, name: 'FAQs', to: '/help/faqs' },
            { component: CNavItem, name: 'Contact Support', to: '/help/contact' },
            { component: CNavItem, name: 'Error Logs', to: '/help/error-logs' },
            { component: CNavItem, name: 'Audit Trail', to: '/help/audit-trail' },
        ],
    },

    // ======================
    // User Management
    // ======================
    {
        component: CNavGroup,
        name: 'User Management',
        icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
        items: [
            { component: CNavItem, name: 'Users Management', to: '/users' },
            { component: CNavItem, name: 'Activity Logs', to: '/users/activity' },
            { component: CNavItem, name: 'Roles & Permissions', to: '/users/roles' },
            { component: CNavItem, name: 'Shift Management', to: '/users/shifts' },
            { component: CNavItem, name: 'Attendance Tracking', to: '/users/attendance' },
            { component: CNavItem, name: 'Password Reset', to: '/users/password-reset' },
            { component: CNavItem, name: 'Session Management', to: '/users/sessions' },
        ],
    },



    // ======================
    // Billing
    // ======================
    {
        component: CNavGroup,
        name: 'Billing',
        icon: <CIcon icon={cilDollar} customClassName="nav-icon" />,
        items: [
            { component: CNavItem, name: 'New Bill / Invoice', to: '/billing/new' },
            { component: CNavItem, name: 'All Invoices', to: '/billing/invoices' },
            { component: CNavItem, name: 'Payment Tracking', to: '/billing/payments' },
            { component: CNavItem, name: 'Refund / Cancellation', to: '/billing/refunds' },
        ],
    },

    // ======================
    // Expense Management
    // ======================
    {
        component: CNavGroup,
        name: 'Expense Management',
        icon: <CIcon icon={cilMoney} customClassName="nav-icon" />,
        items: [
            { component: CNavItem, name: 'Expense Entry', to: '/expenses/new' },
            { component: CNavItem, name: 'All Expenses', to: '/expenses' },
        ],
    },
]

export default _nav