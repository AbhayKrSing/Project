import React from 'react'
import { Input, VStack, FormControl, FormLabel, FormHelperText, Button } from '@chakra-ui/react'

const Signup = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('I m handlesubmitt fn')
    }
    return (
        <React.Fragment>

            <VStack spacing={'10'}>
                <form onSubmit={handleSubmit}>
                    <FormControl isRequired onSubmit={handleSubmit}>
                        <FormLabel>Name</FormLabel>
                        <Input type='text' marginBottom={4} id='name' />

                        <FormLabel>Email address</FormLabel>
                        <Input type='email' id='email' />
                        <FormHelperText textAlign={'start'} marginBottom={4}>We'll never share your email.</FormHelperText>

                        <FormLabel>Password</FormLabel>
                        <Input type='password' id='password' />
                        <FormHelperText textAlign={'start'} marginBottom={4}>Must be strong password</FormHelperText>

                        <FormLabel>Confirm Password</FormLabel>
                        <Input type='password' marginBottom={4} id='confirm-password' />

                        <FormLabel>Upload Img</FormLabel>
                        <Input type="file" id="img" accept="image/*" marginBottom={4} />

                        <Button type='submit' id='submit' cursor={'pointer'} width={'100%'} background={'blue.300'} >SignUp</Button>
                    </FormControl>
                </form>
            </VStack>

        </React.Fragment>
    )
}

export default Signup
