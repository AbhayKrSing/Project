import React from 'react'
import { Input, VStack, FormControl, FormLabel, FormHelperText, Button } from '@chakra-ui/react'


const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('I m handlesumitt fn !')
    }
    const guest = () => {

    }
    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <VStack spacing={10}>
                    <FormControl isRequired>
                        <FormLabel>Email address</FormLabel>
                        <Input type='email' id='emailL' />
                        <FormHelperText textAlign={'start'} marginBottom={4}>We'll never share your email.</FormHelperText>

                        <FormLabel>Password</FormLabel>
                        <Input type='password' id='passwordL' />
                        <FormHelperText textAlign={'start'} marginBottom={4}>Must be strong password</FormHelperText>

                        <Button type='submit' id='submitL' cursor={'pointer'} width={'100%'} background={'blue.300'} >Login</Button>
                        <Button id='guest' cursor={'pointer'} width={'100%'} background={'red.400'} marginTop={2} onClick={guest}>Get guest User credientials</Button>
                    </FormControl>
                </VStack>
            </form>
        </React.Fragment>
    )
}

export default Login
