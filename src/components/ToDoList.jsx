import React, { useState } from "react";
import { connect } from "react-redux";
import ToDos from "./ToDos";
import AddForm from "./AddForm";

import {newToDoAction, markToDoAction, deleteToDoAction} from "../action/actions";

const ToDoList = ({ someList, newToDo, markToDo, removeToDo }) => {
  
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

  return (
    <>
      <ToDos toDoList={someList} doneToDo={doneToDo} deleteToDo={deleteToDo} />
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
