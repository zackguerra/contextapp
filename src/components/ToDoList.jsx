import React, { useState } from "react";
import { connect } from "react-redux";
import ToDos from "./ToDos";
import AddForm from "./AddForm";
import FilterButtons from "./FilterButtons";

import {newToDoAction, markToDoAction, deleteToDoAction} from "../action/actions";

const ToDoList = ({ someList, newToDo, markToDo, removeToDo }) => {
  const [filterValue, setFilterValue] = useState("SHOW_ALL")
  
  const addToDo = (content) => {
    //somefunction for reducer......
    // console.log("content: ", content);
    newToDo(content);
  };

  const doneToDo = id => {
    //somefunction for reducer
    console.log(someList)
    markToDo(id);
  }

  const deleteToDo = id => {
    //somefunction for reducer
    removeToDo(id);
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

const mapStateToProps = (state) => {
  return {
    someList: state.toDoList,
  };
};

const mapDispatchToProps = dispatch => {
    return {
        newToDo: content => { dispatch(newToDoAction(content)) },
        // newToDo: content => { dispatch({ type: "NEW_TO_DO", payload: content }) }
        markToDo: id  => { dispatch(markToDoAction(id)) },
        removeToDo: id => { dispatch(deleteToDoAction(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
