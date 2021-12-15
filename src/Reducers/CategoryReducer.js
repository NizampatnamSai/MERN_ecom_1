// const initialstate={
//     CategoryReducer:null
// }

// const CategoryReducer=(state=initialstate, action)=>{
//     const {type, payload}=action
//     switch (type){
//         default:
//             return state;
//     }
// }
// export default CategoryReducer;
const initialState = {
    categories: []
}
const categoriesReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        default:
            return state
    }

}


export default categoriesReducer