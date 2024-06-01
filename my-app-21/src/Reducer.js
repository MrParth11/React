import { INCREMENT, DECREMENT } from "./Action";

const Reducer = (state, action) => {

    switch(action.type) {
        case INCREMENT : return{
            ...state,
            Prices : state.Prices.map(item=> item.id === action.playload ? {...item, value : item.value + item.price} : item)
        }

        case DECREMENT : return{
            ...state,
            Prices : state.Prices.map(item=> item.id === action.playload ? {...item, value : item.value - item.price} : item)
        }

    }

}

export default Reducer