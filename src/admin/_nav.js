import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilPuzzle,
  cilSpeedometer,
} from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    role: ["admin","merchant"],
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  
  {
    component: CNavGroup,
    name: 'User Management',
    to: '/dashboard/users',
    role: ["admin"],
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'User List',
        to: '/dashboard/list',
      },
      {
        component: CNavItem,
        name: 'Merchants',
        to: '/dashboard/merchants',
      }
    ],
  },

  {
    component: CNavGroup,
    name: 'Store Management',
    role: ["admin"],
    to: '/dashboard/store',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Store List',
        to: '/dashboard/list',
      }
    ],
  },

// For Merchant

  {
    component: CNavGroup,
    name: 'Products Management',
    to: '/dashboard/products',
    role: ["merchant"],
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Products List',
        to: '/dashboard/products',
      }
    ],
  },

]

export default _nav
