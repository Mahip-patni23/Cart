
const reducer = (state, action) => {
    if(action.type==='CLEAR_CART'){
        return {...state, items: []}
    }

    if(action.type === 'REMOVE_ITEM'){
        return {...state, items: action.payload}
    }

    if(action.type==='INCREASE'){
        const tempItem = state.items.map((item) => {
            if(item.id === action.payload){
                return {...item, amount: item.amount + 1}
            }
            return item;
        })
        return {...state, items: tempItem}
    }

    if(action.type==='DECREASE'){
        const tempItem = state.items.map((item) => {
            if(item.id === action.payload){
                return {...item, amount: item.amount - 1}
            }
            return item;
        }).filter((item) => {
            return item.amount!==0;
        })
        return {...state, items: tempItem}
    }

    if(action.type==='GET_TOTALS'){
        var totalItems = state.items.reduce((currentTotal, currentItem) => {
            currentTotal += currentItem.amount;
            return currentTotal;
        }, 0)

        var totalSum = state.items.reduce((currentSum, currentItem) => {
           currentSum += currentItem.amount*currentItem.price;
           return currentSum; 
        }, 0)
        
        totalSum = parseFloat(totalSum.toFixed(2))

        return {...state, amount: totalItems, total: totalSum}
    }

    if(action.type === 'LOADING'){
        return {...state, isLoading: true};
    }

    if(action.type === 'DISPLAY_ITEMS'){
        return {...state, items: action.payload, isLoading: false}
    }

    return state
}

export default reducer