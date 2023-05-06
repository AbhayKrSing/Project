import React, { useState } from 'react'
import { Input, VStack, FormControl, FormLabel, FormHelperText, Button } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { UseContextAPI } from '../../Context/ChatProvider';
const Signup = () => {
    const { setuser } = UseContextAPI()
    const navigate = useNavigate()
    const toast = useToast()
    const [loading, setloading] = useState(false)
    const [credentials, setcredentials] = useState({ name: '', email: '', password: '', cpassword: '', pic: '' })
    const handlechange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const processPics = (pic) => {
        const { name, email, password, cpassword } = credentials
        setloading(true)
        if (!pic) {
            toast({
                title: 'Please select image',
                description: "Account creation Failed",
                status: 'warning',
                duration: 5000,
                isClosable: true,
            })
            setloading(false)
            return
        }
        else if (pic.type === 'image/png' || 'image/jpeg') {
            //adding file into cloudnary
            const data = new FormData()
            data.append('file', pic)      //file key must be there(because there must be file named key used in cloudnary code to save data)
            data.append('upload_preset', 'ChatApp')
            data.append('cloud_name', 'do8whoupu')
            fetch("https://api.cloudinary.com/v1_1/do8whoupu/image/upload", {
                method: 'POST',
                body: data,
            })
                .then(response => response.json())
                .then((data) => {
                    console.log(data)
                    setcredentials({ name: name, email: email, password: password, cpassword: cpassword, pic: data.url.toString() })  //img url in cloudnary
                    setloading(false)
                })

                .catch(err => {
                    console.error(err.message)
                    toast({
                        title: 'Image not uploaded successfully, Try again',
                        description: "Account creation Failed",
                        status: 'error',
                        duration: 5000,
                        isClosable: true,
                    })
                    setloading(false)
                });
        }

    }
    const handleSubmit = () => {
        const { name, email, password, cpassword, pic } = credentials

        if (!name || !email || !password) {
            setloading(true)
            toast({
                title: 'Please fill all fields',
                description: "Account creation Failed",
                status: 'warning',
                duration: 5000,
                isClosable: true,
            })
            setloading(false)
            return
        }
        else if (!(password === cpassword)) {
            setloading(true)
            toast({
                title: 'Password must matches to confirm Password',
                description: "Account creation Failed",
                status: 'warning',
                duration: 5000,
                isClosable: true,
            })
            setloading(false)
            return
        }
        else {
            setloading(true)
            axios.post("api/user", {
                name: name,
                email: email,
                password: password,
                pic: pic
            }).then((response) => {
                const { data } = response
                localStorage.setItem('UserInfo', JSON.stringify(data))
                toast({
                    title: 'We have loged you in',
                    description: "SignUp Successfully",
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                })
                setuser(JSON.parse(localStorage.getItem('UserInfo')))
                setloading(false)
                navigate('/chats')

            }).catch((err) => {
                console.log(err.message)
                toast({
                    title: 'Internal server Error or Email already exists,Try again',
                    description: "Account creation Failed",
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                })
                setloading(false)
            })
        }

    }
    return (
        <React.Fragment>

            <VStack spacing={'10'}>
                <FormControl >
                    <FormLabel>Name</FormLabel>
                    <Input type='text' marginBottom={4} id='name' name='name' onChange={handlechange} isRequired />

                    <FormLabel>Email address</FormLabel>
                    <Input type='email' id='email' name='email' onChange={handlechange} isRequired />
                    <FormHelperText textAlign={'start'} marginBottom={4}>We'll never share your email.</FormHelperText>

                    <FormLabel>Password</FormLabel>
                    <Input type='password' id='password' name='password' onChange={handlechange} isRequired />
                    <FormHelperText textAlign={'start'} marginBottom={4}>Must be strong password</FormHelperText>

                    <FormLabel>Confirm Password</FormLabel>
                    <Input type='password' marginBottom={4} id='cpassword' name='cpassword' onChange={handlechange} isRequired />

                    <FormLabel>Upload Img</FormLabel>
                    <Input type="file" id="img" accept="image/*" marginBottom={4} onChange={(e) => { processPics(e.target.files[0]) }} />

                    <Button id='submit' disabled={false} cursor={'pointer'} width={'100%'} background={'blue.300'} isLoading={loading} onClick={handleSubmit}>SignUp</Button>
                </FormControl>
            </VStack>

        </React.Fragment>
    )
}

export default Signup
