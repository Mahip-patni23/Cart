import React, { useContext, useReducer, useEffect } from 'react'; 
/* import data from './data'; */
import reducer from './Reducer';

const url = 'https://course-api.com/react-useReducer-cart-project';

const AppContext = React.createContext();

const initialState = {
  isLoading: false,
  items: [],
  amount: 0,
  total: 0,
}

const AppProvider = ({children}) => {
    /* const [items, setItems] = useState([]);
    const [amount, setAmount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [total, setTotal] = useState(0) */

    const [state, dispatch] = useReducer(reducer, initialState)

    /* const totalSum = (allItems) => {
       let tSum = 0;
       allItems.map((singleItem) => {
          tSum += parseInt(singleItem.price);
       });
       setTotal(tSum)
    }

    const fetchData = async() => {
       const response = await fetch(url);
       const data = await response.json();
       setItems(data);
       setIsLoading(false);
       setAmount(data.length);
       totalSum(data)
    }

    const removeItem = (id) => {
      const newItems = items.filter((item) => {
        return item.id!==id;
      })
      setItems(newItems);
      setAmount(newItems.length);
      totalSum(newItems);
    }

    const clearItems = () => {
      setItems([]);
      setAmount(0);
      setTotal(0);
    }

    const increaseAmount = (id) => {
      setValue(value-1);
    }

    const decreaseAmount = (id) => {
      setValue(value-1);
    } */

    const fetchData = async() => {
      dispatch({type: 'LOADING'})
      const response = await fetch(url);
      const data = await response.json();
      dispatch({type: 'DISPLAY_ITEMS', payload: data})
    }

    const clearItems = () => {
      dispatch({type: 'CLEAR_CART'})
    }

    const removeItem = (id) => {
      const newItems = state.items.filter((item) => {
        return item.id!==id;
      })
      dispatch({type: 'REMOVE_ITEM', payload: newItems})
    }
    
    const increase = (id) => {
      dispatch({type: 'INCREASE', payload: id})
    }

    const decrease = (id) => {
      dispatch({type: 'DECREASE', payload: id})
    }

    useEffect(() => {
      fetchData();
    }, [])

    useEffect(() => {
      dispatch({type: 'GET_TOTALS'})
    },[state.items])

    return <AppContext.Provider value={{...state, clearItems, removeItem, increase, decrease}}>
        {children}
    </AppContext.Provider>
} 

export const useGlobalcontext = () => {
    return useContext(AppContext);
}

export {AppProvider}