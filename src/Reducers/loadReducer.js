// const initialstate={
//     isLoading:null
// }

// const loadreducer=(state=initialstate, action)=>{
//     const {type, payload}=action
//     switch (type){
//         default:
//             return state;
//     }
// }
// export default loadreducer;

const initialState = {
    isLoading: false
}
const loadreducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        default:
            return state
    }

}
export default loadreducer;