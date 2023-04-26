import React, { useState } from 'react'
import { Input, VStack, FormControl, FormLabel, FormHelperText, Button } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'

const Signup = () => {
    const toast = useToast()
    const [loading, setloading] = useState(false)
    const [credentials, setcredentials] = useState({ name: '', email: '', password: '', cpassword: '', img: '' })
    const handlechange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const processPics = (pic) => {
        setloading(true)
        if (!pic) {
            toast({
                title: 'Please select image',
                description: "Account creation Failed due to internal server error",
                status: 'danger',
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
                    setcredentials({ img: data.url.toString() })  //img url in cloudnary
                    setloading(false)
                })

                .catch(err => {
                    console.error(err.message)
                    setloading(false)
                });
        }

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
                    <Input type="file" id="img" accept="image/*" marginBottom={4} onChange={(e) => { processPics(e.target.files[0]) }} />

                    <Button id='submit' cursor={'pointer'} width={'100%'} background={'blue.300'} onClick={handleSubmit} isLoading={loading}>SignUp</Button>
                </FormControl>
            </VStack>

        </React.Fragment>
    )
}

export default Signup
