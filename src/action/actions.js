export const newToDoAction = content => {
    return { type: "NEW_TO_DO", payload: content }
}
//Done
export const markToDoAction = id => {
    return { type: "DONE_TO_DO", payload: id};
}

//Remove
export const deleteToDoAction = id => {
    return { type: "REMOVE_TO_DO", payload: id }
}