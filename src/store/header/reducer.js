import data from "../../utils/data.json";
const initialState=data

export default(state=initialState,action)=>{
    return state
}
export const getDataHeader=(state)=>{
    return   state.dataHeaderReducer
    
}