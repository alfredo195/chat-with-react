import React from "react";


const CTX = React.createContext();

const initState = {
    general: [
        
            {from: "rafa", msg: "hello"},
            {from: "gladys", msg: "hello"},
            {from: "luis", msg: "hello"},
        
    ],
    topic2:[
        {from: "rafa", msg: "hello"},
        {from: "rafa", msg: "hello"},
        {from: "rafa", msg: "hello"},
    ]
}

function reducer(state, action) {
    const {from, msg, topic} = action.payload;
    switch(action.type) {
       case 'RECEIVED MESSAGE' : 
       return {
         ...state,
           [topic]: [
               ...state[topic],
               {
                    from,
                    msg
               }
            ]
       }
       default:
           return state
    }
}

export default function store() {

    const reducerHook = React.useReducer(reducer, initState);

    return (
        <CTX.Provider value = {reducerHook}>
            {props.children}
        </CTX.Provider>
    )
}