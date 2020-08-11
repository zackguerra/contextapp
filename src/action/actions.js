export const newToDoAction = content => {
    return { type: "NEW_TO_DO", payload: content }
}
//Done
export const markToDoAction = id => {
    return { type: "DONE_TO_DO", payload: id};
}

//Remove