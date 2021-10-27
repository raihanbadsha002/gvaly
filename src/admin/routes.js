import React from 'react'
import store from 'redux/store'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const MerchantDashboard = React.lazy(() => import('./views/dashboard/MerchantDashboard'))
const UserList = React.lazy(() => import('./views/userList/UserList'))
const ProductList = React.lazy(() => import('./views/productList/ProductList'))
const AddProduct = React.lazy(() => import('./views/addProduct/AddProduct'))

const { auth: { data }} = store.getState(); 


const selectedDashboard = () => {
  switch(data?.role) {
    case 'merchant' :
      return MerchantDashboard
    case 'admin' :
      return Dashboard
    default :
      return null   
  }
}

const routes = [
  { exact: true, path: '/dashboard', name: 'Dashboard', component: selectedDashboard() ,role: ["admin", "merchant"] },
  { exact: true, path: '/dashboard/list', name: 'User List', component: UserList,role: ["admin"] },
  { exact: true, path: '/dashboard/products', name: 'Products Management', component: ProductList ,role: ["merchant"] },
  { exact: true, path: '/dashboard/add-product', name: 'Add Products', component: AddProduct ,role: ["merchant"] },
 
]

export default routes
