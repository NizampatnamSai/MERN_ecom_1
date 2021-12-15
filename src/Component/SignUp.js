// // let Signup=()=>{
// //     return(
// //     <div>
// //         Signup
// //     </div>)
// // }
// // export default Signup;
// import {
//     Flex,
//     Box,
//     FormControl,
//     FormLabel,
//     Input,
//     InputGroup,
//     HStack,
//     InputRightElement,
//     Stack,
//     Button,
//     Heading,
//     Text,
//     useColorModeValue,
//     Link,
//   } from '@chakra-ui/react';
//   import { useState } from 'react';
//   import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
//   import {Link as routerLink} from 'react-router-dom'
  
//   export default function Signup() {
//     const [showPassword, setShowPassword] = useState(false);
//     const {email,setEmail}=useState('')
//     const {firstname,setFirstname}=useState('')
//     const {lastname,setLastname}=useState('')

//     const handleSignup=()=>{
//       console.log({
//         email,firstname,lastname
//       })
//       const user=JSON.parse(localStorage.getItem('user')) ??[]
      
//       localStorage.setItem('user',JSON.stringify([...user,{
//           email,firstname,lastname,showPassword
//         }]))}


//       // if(user){
//       // localStorage.setItem('users',JSON.stringify([...user,{
//       //   email,firstname,lastname,Password
//       // }]))}
//       // else {
//       //   localStorage.setItem('users',JSON.stringify([{
//       //     email,firstname,lastname,Password
//       //   }]))

//       // }
    
  
//     return (
//       <Flex
//         minH={'100vh'}
//         align={'center'}
//         justify={'center'}
//         bg={useColorModeValue('gray.50', 'gray.800')}>
//         <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
//           <Stack align={'center'}>
//             <Heading fontSize={'4xl'} textAlign={'center'}>
//               Sign up
//             </Heading>
//             <Text fontSize={'lg'} color={'gray.600'}>
//               to enjoy all of our cool features ✌️
//             </Text>
//           </Stack>
//           <Box
//             rounded={'lg'}
//             bg={useColorModeValue('white', 'gray.700')}
//             boxShadow={'lg'}
//             p={8}>
//             <Stack spacing={4}>
//               <HStack>
//                 <Box>
//                   <FormControl id="firstName" isRequired>
//                     <FormLabel>First Name</FormLabel>
//                     <Input onChange={e=>setFirstname(e.target.value)}  type="text" />
//                   </FormControl>
//                 </Box>
//                 <Box>
//                   <FormControl id="lastName">
//                     <FormLabel>Last Name</FormLabel>
//                     <Input onChange={e=>setLastname(e.target.value)} type="text" />
//                   </FormControl>
//                 </Box>
//               </HStack>
//               <FormControl id="email" isRequired>
//                 <FormLabel>Email address</FormLabel>
//                 <Input onChange={e=>setEmail(e.target.value)} type="email" />
//               </FormControl>
//               <FormControl id="password" isRequired>
//                 <FormLabel>Password</FormLabel>
//                 <InputGroup>
//                   <Input type={showPassword ? 'text' : 'password'} />
//                   <InputRightElement h={'full'}>
//                     <Button
//                       variant={'ghost'}
//                       onClick={() =>
//                         setShowPassword((showPassword) => !showPassword)
//                       }>
//                       {showPassword ? <ViewIcon /> : <ViewOffIcon />}
//                     </Button>
//                   </InputRightElement>
//                 </InputGroup>
//               </FormControl>
//               <Stack spacing={10} pt={2}>
//                 <Button onClick={()=>{
//                   handleSignup()
//                 }}
//                   loadingText="Submitting"
//                   size="lg"
//                   bg={'blue.400'}
//                   color={'white'}
//                   _hover={{
//                     bg: 'blue.500',
//                   }}>
//                   Sign up
//                 </Button>
//               </Stack>
//               <Stack pt={6}>
//                 <Text align={'center'}>
//                   Already a user? <Link as={routerLink} to='/login' color={'blue.400'}>Login</Link>
//                 </Text>
//               </Stack>
//             </Stack>
//           </Box>
//         </Stack>
//       </Flex>
//     );
//   }


// import {
//   Flex,
//   Box,
//   FormControl,
//   FormLabel,
//   Input,
//   InputGroup,
//   HStack,
//   InputRightElement,
//   Stack,
//   Button,
//   Heading,
//   Text,
//   useColorModeValue,
//   Link,
// } from '@chakra-ui/react';
// import { useState } from 'react';
// import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
// import { Link as routerLink } from 'react-router-dom'

// export default function Signup() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [firstName, setFirstName] = useState('')
//   const [lastName, setLastName] = useState('')
// const handleSignup = () => {
//         const users = JSON.parse(localStorage.getItem('users')) ?? []
//         localStorage.setItem('users', JSON.stringify([...users, {
//             email, firstName, lastName, password
//         }]))
//     }
//     // const handleSignup = () => {
//     //     const users = JSON.parse(localStorage.getItem('users')) ?? []
//     //     localStorage.setItem('users', JSON.stringify([...users, {
//     //         email, firstName, lastName, password
//     //     }]))
//     // }

//   return (
//       <Flex
//           minH={'100vh'}
//           align={'center'}
//           justify={'center'}
//           bg={useColorModeValue('gray.50', 'gray.800')}>
//           <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
//               <Stack align={'center'}>
//                   <Heading fontSize={'4xl'} textAlign={'center'}>
//                       Sign up
//                   </Heading>
//                   <Text fontSize={'lg'} color={'gray.600'}>
//                       to enjoy all of our cool features ✌️
//                   </Text>
//               </Stack>
//               <Box
//                   rounded={'lg'}
//                   bg={useColorModeValue('white', 'gray.700')}
//                   boxShadow={'lg'}
//                   p={8}>
//                   <Stack spacing={4}>
//                       <HStack>
//                           <Box>
//                               <FormControl id="firstName" isRequired>
//                                   <FormLabel>First Name</FormLabel>
//                                   <Input onChange={e => { setFirstName(e.target.value) }} type="text" />
//                               </FormControl>
//                           </Box>
//                           <Box>
//                               <FormControl id="lastName">
//                                   <FormLabel>Last Name</FormLabel>
//                                   <Input onChange={e => { setLastName(e.target.value) }} type="text" />
//                               </FormControl>
//                           </Box>
//                       </HStack>
//                       <FormControl id="email" isRequired>
//                           <FormLabel>Email address</FormLabel>
//                           <Input onChange={e => { setEmail(e.target.value) }} type="email" />
//                       </FormControl>
//                       <FormControl id="password" isRequired>
//                           <FormLabel>Password</FormLabel>
//                           <InputGroup>
//                               <Input onChange={e => { setPassword(e.target.value) }} type={showPassword ? 'text' : 'password'} />
//                               <InputRightElement h={'full'}>
//                                   <Button
//                                       variant={'ghost'}
//                                       onClick={() =>
//                                           setShowPassword((showPassword) => !showPassword)
//                                       }>
//                                       {showPassword ? <ViewIcon /> : <ViewOffIcon />}
//                                   </Button>
//                               </InputRightElement>
//                           </InputGroup>
//                       </FormControl>
//                       <Stack spacing={10} pt={2}>
//                           <Button
//                               onClick={handleSignup}
//                               loadingText="Submitting"
//                               size="lg"
//                               bg={'blue.400'}
//                               color={'white'}
//                               _hover={{
//                                   bg: 'blue.500',
//                               }}>
//                               Sign up
//                           </Button>
//                       </Stack>
//                       <Stack pt={6}>
//                           <Text align={'center'}>
//                               Already a user? <Link as={routerLink} to="/login" color={'blue.400'}>Login</Link>
//                           </Text>
//                       </Stack>
//                   </Stack>
//               </Box>
//           </Stack>
//       </Flex>
//   );
// }





import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link as routerLink, useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import { signupUser } from '../Actions/auth'
export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const dispatch = useDispatch()

    const handleSignup = () => {
        dispatch(signupUser(email, firstName, lastName, password))
    }


    //check to redirect the user once it has signed up
    // kjsdk
    const navigate = useNavigate()

    const { signup } = useSelector(state => state.auth)
    if (signup && signup === true) {
        navigate('/login')
    }


    useEffect(() => {
        return () => dispatch({
            type: "REFRESH_SIGNUP"
        })
    }, [])


    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                        Sign up
                    </Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool features ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <HStack>
                            <Box>
                                <FormControl id="firstName" isRequired>
                                    <FormLabel>First Name</FormLabel>
                                    <Input onChange={e => { setFirstName(e.target.value) }} type="text" />
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl id="lastName">
                                    <FormLabel>Last Name</FormLabel>
                                    <Input onChange={e => { setLastName(e.target.value) }} type="text" />
                                </FormControl>
                            </Box>
                        </HStack>
                        <FormControl id="email" isRequired>
                            <FormLabel>Email address</FormLabel>
                            <Input onChange={e => { setEmail(e.target.value) }} type="email" />
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input onChange={e => { setPassword(e.target.value) }} type={showPassword ? 'text' : 'password'} />
                                <InputRightElement h={'full'}>
                                    <Button
                                        variant={'ghost'}
                                        onClick={() =>
                                            setShowPassword((showPassword) => !showPassword)
                                        }>
                                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Stack spacing={10} pt={2}>
                            <Button
                                onClick={handleSignup}
                                loadingText="Submitting"
                                size="lg"
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Sign up
                            </Button>
                        </Stack>
                        <Stack pt={6}>
                            <Text align={'center'}>
                                Already a user? <Link as={routerLink} to="/login" color={'blue.400'}>Login</Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}














