import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ToDos from "./ToDos";
import AddForm from "./AddForm";
import FilterButtons from "./FilterButtons";

const ToDoList = () => {
  const [filterValue, setFilterValue] = useState("SHOW_ALL");
  const someList = useSelector(state  => state.toDoList); //gets the state from Redux store
  const dispatch = useDispatch();  //to send to Reducer
  
  const addToDo = (content) => {
    dispatch({ type: "NEW_TO_DO", payload: content });
  };

  const doneToDo = id => {
    dispatch({ type: "DONE_TO_DO", payload: id});
  }

  const deleteToDo = id => {
    dispatch({ type: "REMOVE_TO_DO", payload: id });
  }

  const filterFunc = action => {
    setFilterValue(action);
  }

  const getVisibleToDos = (someList, filterValue) => {
    switch(filterValue){
      case "SHOW_COMPLETED":
        return someList.filter(item => item.isDone)
      case "SHOW_ACTIVE":
        return someList.filter(item => !item.isDone);
      case "SHOW_ALL":
        return someList;
      default:
        break;
    }
  }

  const visibleList = getVisibleToDos(someList, filterValue);

  return (
    <>
      <FilterButtons filterFunc={filterFunc} filterValue={filterValue} />
      <ToDos toDoList={visibleList} doneToDo={doneToDo} deleteToDo={deleteToDo} />
      <AddForm addToDo={addToDo} />
    </>
  );
};

export default ToDoList;
