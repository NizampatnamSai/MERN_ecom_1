// // import {useEffect} from 'react'
// // import { useSelector } from 'react-redux';
// // import {Navigate} from 'react-router'

// // let Login=()=>{
// //     const {token}=useSelector(state=>state.authreducer)
// //     console.log(token)
// //     return (
// //     <div>
// //         Login
// //     </div>)
// // }
// // export default Login;
// // import {
// //     Flex,
// //     Box,
// //     FormControl,
// //     FormLabel,
// //     Input,
// //     Checkbox,
// //     Stack,
// //     Link,
// //     Button,
// //     Heading,
// //     Text,
// //     useColorModeValue,
// //   } from '@chakra-ui/react';
  
// //   import { useState, useEffect } from 'react';
// // import { Loginuser } from '../Actions/auth';
// // import { useDispatch,useSelector } from 'react-redux';
// // import { Navigate } from 'react-router';
// //   export default function Login() {
// //     const [email,setEmail]=useState('');
// //     const [password,setPassword]=useState('')
// //     const dispath=useDispatch()
// //     const {token}=useSelector(state=>state.authreducer)
// //     useEffect(()=>{
// //       if (token) console.log('redict user')
// //       else console.log('don;t redirct user')
// //     },[token])

// //     const handleLogin=()=>{
// //       // console.log({email,password})
// //       console.log(Loginuser(email,password))
// //      dispath(Loginuser(email,password))
    
// //     }
// //     return token ? <Navigate to='/'/>: 
// //       <Flex
// //         minH={'100vh'}
// //         align={'center'}
// //         justify={'center'}
// //         bg={'white'}>
// //         <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
// //           <Stack align={'center'}>
// //             <Heading fontSize={'4xl'}>Sign in to your account</Heading>
// //             <Text fontSize={'lg'} color={'gray.600'}>
// //               to enjoy all of our cool <Link color={'blue.400'}>features</Link> ❤✌️
// //             </Text>
// //           </Stack>
// //           <Box
// //             rounded={'lg'}
// //             bg={('white'}
// //             boxShadow={'lg'}
// //             p={8}>
// //             <Stack spacing={4}>
// //               <FormControl id="email">
// //                 <FormLabel>Email address</FormLabel>
// //                 <Input onChange={e=>setEmail(e.target.value)} type="email" />
// //               </FormControl>
// //               <FormControl id="password">
// //                 <FormLabel>Password</FormLabel>
// //                 <Input onChange={e=>setPassword(e.target.value)} type="password" />
// //               </FormControl>
// //               <Stack spacing={10}>
// //                 <Stack
// //                   direction={{ base: 'column', sm: 'row' }}
// //                   align={'start'}
// //                   justify={'space-between'}>
// //                   <Checkbox>Remember me</Checkbox>
// //                   <Link color={'blue.400'}>Forgot password?</Link>
// //                 </Stack>
// //                 <Button onClick={()=>{
// //                   handleLogin()
// //                 }}
// //                   bg={'blue.400'}
// //                   color={'white'}
// //                   _hover={{
// //                     bg: 'blue.500',
// //                   }}>
// //                   Sign in
// //                 </Button>
// //               </Stack>
// //             </Stack>
// //           </Box>
// //         </Stack>
// //       </Flex>
// //     ;
// //   }

// import {
//   Flex,
//   Box,
//   FormControl,
//   FormLabel,
//   Input,
//   Checkbox,
//   Stack,
//   Link,
//   Button,
//   Heading,
//   Text,

// } from '@chakra-ui/react';
// import { useState, useEffect } from 'react';
// // import { loginUser } from '../Actions/auth';

// import { Loginuser } from '../Actions/auth';
// import { useDispatch, useSelector } from 'react-redux'
// import { Navigate } from 'react-router';

// export default function Login() {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const dispatch = useDispatch()

//   const { token } = useSelector(state => state.authreducer)


//   const handleLogin = () => {
//       dispatch(Loginuser(email, password))
//   }

//   return token ? <Navigate to='/' /> : <Flex
//       minH={'100vh'}
//       align={'center'}
//       justify={'center'}
//       bg={'gray.50'}>
//       <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
//           <Stack align={'center'}>
//               <Heading fontSize={'4xl'}>Sign in to your account</Heading>
//               <Text fontSize={'lg'} color={'gray.600'}>
//                   to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
//               </Text>
//           </Stack>
//           <Box
//               rounded={'lg'}
//               bg={'white'}
//               boxShadow={'lg'}
//               p={8}>
//               <Stack spacing={4}>
//                   <FormControl id="email">
//                       <FormLabel>Email address</FormLabel>
//                       <Input onChange={e => { setEmail(e.target.value) }} type="email" />
//                   </FormControl>
//                   <FormControl id="password">
//                       <FormLabel>Password</FormLabel>
//                       <Input onChange={e => { setPassword(e.target.value) }} type="password" />
//                   </FormControl>
//                   <Stack spacing={10}>
//                       <Stack
//                           direction={{ base: 'column', sm: 'row' }}
//                           align={'start'}
//                           justify={'space-between'}>
//                           <Checkbox>Remember me</Checkbox>
//                           <Link color={'blue.400'}>Forgot password?</Link>
//                       </Stack>
//                       <Button
//                           onClick={handleLogin}
//                           bg={'blue.400'}
//                           color={'white'}
//                           _hover={{
//                               bg: 'blue.500',
//                           }}>
//                           Sign in
//                       </Button>
//                   </Stack>
//               </Stack>
//           </Box>
//       </Stack>
//   </Flex >
// }


import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,

} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { loginUser } from '../Actions/auth';
// import { Loginuser } from '../Actions/auth';
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router';

// export default function Login() {
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const dispatch = useDispatch()

//     const { token } = useSelector(state => state.auth)


//     const handleLogin = () => {
//         dispatch(loginUser(email, password))
//     }

//     return token ? <Navigate to='/' /> : <Flex
//         minH={'100vh'}
//         align={'center'}
//         justify={'center'}
//         bg={'gray.50'}>
//         <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
//             <Stack align={'center'}>
//                 <Heading fontSize={'4xl'}>Sign in to your account</Heading>
//                 <Text fontSize={'lg'} color={'gray.600'}>
//                     to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
//                 </Text>
//             </Stack>
//             <Box
//                 rounded={'lg'}
//                 bg={'white'}
//                 boxShadow={'lg'}
//                 p={8}>
//                 <Stack spacing={4}>
//                     <FormControl id="email">
//                         <FormLabel>Email address</FormLabel>
//                         <Input onChange={e => { setEmail(e.target.value) }} type="email" />
//                     </FormControl>
//                     <FormControl id="password">
//                         <FormLabel>Password</FormLabel>
//                         <Input onChange={e => { setPassword(e.target.value) }} type="password" />
//                     </FormControl>
//                     <Stack spacing={10}>
//                         <Stack
//                             direction={{ base: 'column', sm: 'row' }}
//                             align={'start'}
//                             justify={'space-between'}>
//                             <Checkbox>Remember me</Checkbox>
//                             <Link color={'blue.400'}>Forgot password?</Link>
//                         </Stack>
//                         <Button
//                             onClick={handleLogin}
//                             bg={'blue.400'}
//                             color={'white'}
//                             _hover={{
//                                 bg: 'blue.500',
//                             }}>
//                             Sign in
//                         </Button>
//                     </Stack>
//                 </Stack>
//             </Box>
//         </Stack>
//     </Flex >
// }







export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const { token } = useSelector(state => state.auth)


    const handleLogin = () => {
        dispatch(loginUser(email, password))
    }

    return token ? <Navigate to='/' /> : <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={'gray.50'}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
                <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                <Text fontSize={'lg'} color={'gray.600'}>
                    to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
                </Text>
            </Stack>
            <Box
                rounded={'lg'}
                bg={'white'}
                boxShadow={'lg'}
                p={8}>
                <Stack spacing={4}>
                    <FormControl id="email">
                        <FormLabel>Email address</FormLabel>
                        <Input onChange={e => { setEmail(e.target.value) }} type="email" />
                    </FormControl>
                    <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input onChange={e => { setPassword(e.target.value) }} type="password" />
                    </FormControl>
                    <Stack spacing={10}>
                        <Stack
                            direction={{ base: 'column', sm: 'row' }}
                            align={'start'}
                            justify={'space-between'}>
                            <Checkbox>Remember me</Checkbox>
                            <Link color={'blue.400'}>Forgot password?</Link>
                        </Stack>
                        <Button
                            onClick={handleLogin}
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.500',
                            }}>
                            Sign in
                        </Button>
                    </Stack>
                </Stack>
            </Box>
        </Stack>
    </Flex >
}