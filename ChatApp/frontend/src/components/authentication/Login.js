import React, { useState } from 'react'
import { Input, VStack, FormControl, FormLabel, FormHelperText, Button, useToast } from '@chakra-ui/react'
import axios from "axios";
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate()
    const toast = useToast();
    const [loading, setloading] = useState(false)
    const [credentials, setcredentials] = useState({ email: '', password: '' })
    const handlechange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const handleSubmit = () => {
        const { email, password } = credentials

        if (!email || !password) {
            setloading(true)
            toast({
                title: 'Please fill all fields',
                description: "Login Failed",
                status: 'warning',
                duration: 5000,
                isClosable: true,
            })
            setloading(false)
            return
        }
        else {
            setloading(true)
            axios.post("api/user/login", {
                email: email,
                password: password,
            }).then((response) => {
                const { data } = response
                localStorage.setItem('UserInfo', data.token)
                toast({
                    title: 'We have loged you in',
                    description: "Login Successfully",
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                })
                setloading(false)
                navigate('/chats')

            }).catch((err) => {
                console.log(err.message)
                toast({
                    title: 'Try again,using valid credentials',
                    description: "Login Failed",
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                })
                setloading(false)
            })
        }
    }
    const guest = () => {
        setloading(true)
        axios.post("api/user/login", {
            email: "guestexample@gamil.com",
            password: "159753789",
        }).then((response) => {
            const { data } = response
            localStorage.setItem('GuestUserInfo', data.token)
            toast({
                title: 'We have loged you in',
                description: "Login Successfully as guest User",
                status: 'success',
                duration: 5000,
                isClosable: true,
            })
            setloading(false)
            navigate('/chats')

        }).catch((err) => {
            console.log(err.message)
            toast({
                title: 'Try again,using valid credentials',
                description: "Login Failed",
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
            setloading(false)
        })
    }
    return (
        <React.Fragment>
            <VStack spacing={10}>
                <FormControl isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input type='email' id='emailL' name='email' onChange={handlechange} />
                    <FormHelperText textAlign={'start'} marginBottom={4}>We'll never share your email.</FormHelperText>

                    <FormLabel>Password</FormLabel>
                    <Input type='password' id='passwordL' name='password' onChange={handlechange} />
                    <FormHelperText textAlign={'start'} marginBottom={4}>Must be strong password</FormHelperText>

                    <Button id='submitL' cursor={'pointer'} width={'100%'} background={'blue.300'} onClick={handleSubmit} isLoading={loading}>Login</Button>
                    <Button id='guest' cursor={'pointer'} width={'100%'} background={'red.400'} marginTop={2} onClick={guest}>Get guest User credientials</Button>
                </FormControl>
            </VStack>
        </React.Fragment>
    )
}

export default Login
