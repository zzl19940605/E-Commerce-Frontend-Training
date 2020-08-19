export const ADD_NAME ='ADD_NAME'
export function addName(newName){
    return {
        type: ADD_NAME,
        payload: newName
    }

}