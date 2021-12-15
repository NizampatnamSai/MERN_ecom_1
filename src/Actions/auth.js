// import jwt from 'jsonwebtoken'

// export const Loginuser=(email,password)=>{
//     // Verify email and password
//     // create & dign jwt

//     const user=JSON.parse(localStorage.getItem('user'))
//     const user1=user.find(u=>u.email===email)

//     if(user1.email===email && user1.password===password)

//     // if(email==='admin@mail.com' && password==='password')
//     {
//         const token=jwt.sign({email},'SECRET')
//         return {
//             type:"LOGIN_SUCCESS",
//             payload:{ token }
//     }}
//     else {
//         window.alert("Incorrect Creds")
//         return {
//             type:"LOGIN_FAILED",
//             payload:{ token:null }
//         }
//     }
    
//     // const token=jwt.sign({email})
// }


// import jwt from 'jsonwebtoken'

// export const loginUser = (email, password) => {
//     // VERIFY EMAIL AND PASSWORD
//     // create and sign a JWT
//     const users = JSON.parse(localStorage.getItem('users')) ?? []
//     const user = users.find(u => u.email === email)

//     if (user.password === password) {
//         const token = jwt.sign({ email: user.email }, 'SECRET')
//         return {
//             type: "LOGIN_SUCCESS",
//             payload: { token }
//         }
//     } else {
//         window.alert("INCORRECT CREDS")
//         return {
//             type: "LOGIN_FAILED",
//             payload: { token: null }
//         }
//     }
// } 



  // const users = JSON.parse(localStorage.getItem('users')) ?? []
    // const user = users.find(u => u.email === email)

    // if (user.password === password) {
    //     const token = jwt.sign({ email: user.email }, 'SECRET')
    //     return {
    //         type: "LOGIN_SUCCESS",
    //         payload: { token }
    //     }
    // } else {
    //     window.alert("INCORRECT CREDS")
    //     return {
    //         type: "LOGIN_FAILED",
    //         payload: { token: null }
    //     }
    // }



import jwt from 'jsonwebtoken'
import axios from 'axios'
import { toast } from 'react-hot-toast'


export const loginUser = (email, password)=> async(dispatch) =>{
    // VERIFY EMAIL AND PASSWORD
    // create and sign a JWT

      try {
const base_Url='https://nsai-recipe-api.herokuapp.com'
    const res= await axios.post(`${base_Url}/api/v1/auth/login`,{email,password})
          
    const {token,message}=res.data;

    if(token)
    {
        toast.success(message)
        dispatch({
            type:"LOGIN_SUCCESS",
            payload:{token}
        })

    }
    else {
        toast.error(message)
        dispatch({
            type:"LOGIN_FAILED",
            payload:{token:null}
        })
    }
      }
       catch (error) {
          console.log(error.message)
          toast.error(error.message)
      }

    // console.log(res.data)
  
}

export const signupUser = (email, firstName, lastName, password) => async (dispatch) => {

    try {
        const base_Url = 'http://localhost:8080'

        const res = await axios.post(`${base_Url}/api/v1/auth/signup`, {
            email, firstName, lastName, password
        })
        console.log(res)
        const { user } = res.data
        if (user) {
            toast.success('Signup Success')
            dispatch({
                type: "SIGNUP_SUCCESS",
                payload: {
                    signup: true
                }
            })
        } else {
            toast.error('Signup Failed')
            dispatch({
                type: "SIGNUP_FAILED",
                payload: { signup: false }
            })
        }
    } catch (error) {
        console.log(error.message)
        toast.error(error.message)
    }
};