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
        case "DONE_TO_DO":
            const tempList = state.toDoList.map(item => {
                item.id === action.payload && (item.isDone = !item.isDone)
                return item;
            });
            return {
                ...state,
                todoList: tempList
            }
        case "REMOVE_TO_DO":
            const newArray = state.toDoList.filter(item => {
                return item.id !== action.payload
            });
            console.log(newArray);
            return{
                ...state,
                todoList: newArray
            };
        default:
            return state;
    }
    
}

export default Reducer;