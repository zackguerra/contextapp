import React from 'react';

const ToDos = ({toDoList, doneToDo}) => {

    const list = toDoList.length ? ( 
        toDoList.map(todo => {
            return(
                <div className="collection-item" key={todo.id}>
                    {console.log(todo.isDone)}
                    <span 
                        style={{textDecoration: todo.isDone ? "line-through" : "none"}}
                        onClick={()=> doneToDo(todo.id)}
                    >
                        {todo.content}
                    </span>
                </div>
            )
        }) 
    ) : (
        <p>No ToDos</p>
    )

    return(
        <div className="collection">
            {list}
        </div>
    )
}

export default ToDos;