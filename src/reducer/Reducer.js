const initState = {
    toDoList: [
        {id: 1, content: "Buy eggs", isDone: false},
        {id: 2, content: "Buy Milk", isDone: false},
    ]
}

const Reducer = (state=initState, action) => {
    switch(action.type){
        case "NEW_TO_DO":
            action.payload.id = Math.random(); //use uuid if you want
            action.payload.isDone = false;
            return {
                ...state,
                toDoList: [...state.toDoList, action.payload]
            };
        default:
            return state;
    }
    
}

export default Reducer;