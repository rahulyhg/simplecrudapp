import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import LoadingScreen from './src/authentication/loading'
import LoginScreen from './src/authentication/login'
import SignupScreen from './src/authentication/signup'

import ProductListScreen from './src/product/productlist'

const StackAuth = createStackNavigator(
  {
    Login: LoginScreen,
    Signup: SignupScreen
  },
  { 
    headerMode: 'none',
  }
)

const StackProduct = createStackNavigator(
  {
    ProductList: ProductListScreen,
  },
  // { 
  //   headerMode: 'none',
  // }
)

const InitialNav = createStackNavigator(
  {
    Loading: LoadingScreen,
    StackAuth: StackAuth,
    StackProduct: StackProduct
  },
  { 
    headerMode: 'none',
  }
)

const App = createAppContainer(InitialNav);

export default class CrudApp extends React.Component {
  render() {
    console.disableYellowBox = true
    return (
      <App/>
    )
  }
}