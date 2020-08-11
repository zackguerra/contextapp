import React, { useState } from "react";
import { connect } from "react-redux";
import ToDos from "./ToDos";
import AddForm from "./AddForm";

import {newToDoAction, markToDoAction} from "../action/actions";

const ToDoList = ({ someList, newToDo, markToDo }) => {
  
  const addToDo = (content) => {
    //somefunction for reducer......
    // console.log("content: ", content);
    newToDo(content);
  };

  const doneToDo = id => {
    //somefunction for reducer
    console.log(id)
    markToDo(id);
  }

  return (
    <>
      <ToDos toDoList={someList} doneToDo={doneToDo} />
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
        markToDo: id  => { dispatch(markToDoAction(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
