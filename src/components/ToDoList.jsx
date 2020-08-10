import React, { useState } from "react";
import { connect } from "react-redux";
import ToDos from "./ToDos";
import AddForm from "./AddForm";

import {newToDoAction} from "../action/actions";

const ToDoList = ({ someList, newToDo }) => {
  
  const addToDo = (content) => {
    //somefunction for reducer......
    // console.log("content: ", content);
    newToDo(content);
  };

  return (
    <>
      <ToDos toDoList={someList} />
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
        newToDo: content => { dispatch(newToDoAction(content)) }
        // newToDo: content => { dispatch({ type: "NEW_TO_DO", payload: content }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
