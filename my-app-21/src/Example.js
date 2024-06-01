import React,{useReducer} from "react";
import InitialState from "./InitialState";
import { increment, decrement } from "./Action";
import Reducer from "./Reducer";

function Example () {
    const [state, dispatch] = useReducer(Reducer, InitialState);

    const HandleIncrement = (id) => {
        dispatch(increment(id));
    }

    const HandleDecrement = (id) => {
        dispatch(decrement(id));
    }

    const total = state.Prices.reduce((sum, item)=> sum + item.value, 0);

    return(
        
        
        <div className="main" style={{height: '100vh', width: '100%'}}>

            {
                state.Prices.map((item)=>(
                    <div className="box" key={item.id}>
                        <div className="output">
                  <h1>Price : {item.price} </h1>
                    <h1>Amount : {item.value}</h1>
                    </div>

                    <div className="btn">
                    <button onClick={()=> HandleIncrement(item.id)}>Increment</button>
                    <button onClick={()=> HandleDecrement(item.id)}>Decrement</button>
                    </div>
                    </div>
                ))
            }

            <h1>Total : {total}</h1>

        </div>
        
        
        
    )

}

export default Example