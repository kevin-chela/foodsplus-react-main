import React, { useContext, useEffect,  useReducer } from 'react';
import cartItems from '../data/cartdata'
import reducer from '../reducer/reducer'

const AppContext = React.createContext()

const initialState = {
  cart: cartItems,
  total: 0,
  amount: 0,
 
}

const url = "https://kevin-chela.github.io/manhattan_desert_api/food_order.json"
console.log(url)


export function useGlobalContext() {
    return useContext(AppContext);
}

export default function ContextProvider({ children }) {

  const [state, dispatch] = useReducer(reducer, initialState)

  const addItem = (item) =>{
    dispatch({
        type: 'ADD_ITEM',
        payload: item
    });
}

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
    
  }
  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id })
  }
  const increase = (id) => {
    dispatch({ type: 'INCREASE', payload: id })
  }
  const decrease = (id) => {
    dispatch({ type: 'DECREASE', payload: id })
  }
  const fetchData = async () => {
    dispatch({ type: 'LOADING' })
    const response = await fetch(url)
    const cart = await response.json()
    console.log(cart)
    console.log(cart)
    console.log(cart)
    console.log(cart)
    dispatch({ type: 'DISPLAY_ITEMS', payload: cart })
  }
  const toggleAmount = (id, type) => {
    dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } })
  }
  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' })
  }, [state.cart])
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        toggleAmount,
        addItem
      }}
    >
      {children}
    </AppContext.Provider>
  )

    
}
