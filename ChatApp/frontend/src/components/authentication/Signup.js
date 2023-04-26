import React, { useState } from 'react'
import { Input, VStack, FormControl, FormLabel, FormHelperText, Button } from '@chakra-ui/react'

const Signup = () => {
    const [credentials, setcredentials] = useState({ name: '', email: '', password: '', cpassword: '', img: '' })
    const handlechange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const processPics = (e) => {
        console.log(e.target.files)
    }
    const handleSubmit = () => {

    }
    return (
        <React.Fragment>

            <VStack spacing={'10'}>
                <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input type='text' marginBottom={4} id='name' name='name' onChange={handlechange} />

                    <FormLabel>Email address</FormLabel>
                    <Input type='email' id='email' name='email' onChange={handlechange} />
                    <FormHelperText textAlign={'start'} marginBottom={4}>We'll never share your email.</FormHelperText>

                    <FormLabel>Password</FormLabel>
                    <Input type='password' id='password' name='password' onChange={handlechange} />
                    <FormHelperText textAlign={'start'} marginBottom={4}>Must be strong password</FormHelperText>

                    <FormLabel>Confirm Password</FormLabel>
                    <Input type='password' marginBottom={4} id='cpassword' name='cpassword' onChange={handlechange} />

                    <FormLabel>Upload Img</FormLabel>
                    <Input type="file" id="img" accept="image/*" marginBottom={4} name='img' onChange={processPics} />

                    <Button id='submit' cursor={'pointer'} width={'100%'} background={'blue.300'} onClick={handleSubmit}>SignUp</Button>
                </FormControl>
            </VStack>

        </React.Fragment>
    )
}

export default Signup
