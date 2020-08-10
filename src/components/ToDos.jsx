import React from 'react';

const ToDos = ({toDoList}) => {

    const list = toDoList.length ? ( 
        toDoList.map(todo => {
            return(
                <div className="collection-item" key={todo.id}>
                    <span>
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