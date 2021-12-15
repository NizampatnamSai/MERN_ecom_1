// // const initialstate={
// //     token:null
// // }

// // const authreducer=(state=initialstate, action)=>{
// //     const {type, payload}=action
// //     switch (type){
// //         case "LOGIN_SUCCESS":
// //             return{
// //                 payload
// //             }
// //             case "LOGIN_FAILED":
// //             return{
// //                 ...payload
// //             }
// //             case "LOGOUT":
// //             return{
// //                 token:null
// //             }
// //         default:
// //             return state;
// //     }
// // }
// // export default authreducer;
// const initialState = {
//     token: null
// }

// const authReducer = (state = initialState, action) => {
//     const { type, payload } = action
//     console.log(state)
//     switch (type) {
//         case "LOGIN_SUCCESS":
//             return payload

//         case "LOGIN_FAILED":
//             return {
//                 ...payload
//             }
//         case "LOGOUT":
//             return {
//                 token: null
//             }
//         case "SIGNUP_SUCCESS":
//                 return state
//         case "SIGNUP_FAILED":
//                 return state

//         default:
//             return state
//     }

// }


// export default authReducer


const initialState = {
    token: null
}

const authReducer = (state = initialState, action) => {
    const { type, payload } = action
    console.log(state)
    switch (type) {
        case "LOGIN_SUCCESS":
            return payload

        case "LOGIN_FAILED":
            return {
                ...payload
            }
        case "SIGNUP_SUCCESS":
            return {
                ...payload
            }
        case "SIGNUP_FAILED":
            return {
                ...payload
            }
        case "REFRESH_SIGNUP":
            return {
                ...state,
                signup: false
            }
        case "LOGOUT":
            return {
                token: null
            }


        default:
            return state
    }

}


export default authReducer