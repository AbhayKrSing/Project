import { useDisclosure, DrawerOverlay, DrawerCloseButton, DrawerHeader, DrawerBody, Input, DrawerFooter, Button, Drawer, Box, DrawerContent, useToast, Skeleton, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios'
const Drawered = ({ children, setlabelbug }) => {
    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [loading, setloading] = useState(false)
    const [text, settext] = useState('')
    const [searchData, setsearchData] = useState([''])
    const submitt = async () => {
        setloading(true)
        if (!text) {
            toast({
                title: 'Search Poeple here',
                description: "No people found",
                status: 'warning',
                duration: 3000,
                isClosable: true,
                position: 'top-left',
            })
            setsearchData([''])
            setloading(false)
            return
        }
        const response = await axios({
            url: `/api/user?search=${text}`,
            method: 'get',
            headers: {
                'auth-token': JSON.parse(localStorage.getItem('UserInfo')).token,
            }
        })
        setloading(false)
        setsearchData(response.data)
    }

    const labelBug = (cond) => {
        if (cond) {
            setlabelbug(false)
        }
        else {
            setlabelbug(true)
        }
    }
    const handlechange = (e) => {
        settext(e.target.value)
    }
    return (
        <>
            {children ? <Box display={'flex'} alignItems={'center'} onClick={() => { onOpen(); labelBug(true) }} >{children}</Box> : 'Don\'t Do anything'}
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={() => { onClose(); labelBug(false) }}

            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Search People</DrawerHeader>

                    <DrawerBody>
                        <Box display={'flex'}>
                            <Input placeholder='Type here...' onChange={handlechange} value={text} mr={2} />
                            <Button onClick={submitt}>Go</Button>
                        </Box>
                        <Stack mt={5} display={loading ? '' : 'none'}>
                            <Skeleton height='20px' />
                            <Skeleton height='20px' />
                            <Skeleton height='20px' />
                        </Stack>
                        {searchData.map((element, index) => {
                            return (<Box w="100%" p={4} key={index}>
                                {element.name}
                            </Box>)
                            //skeleton or toast bhi dalna hai

                        })}

                    </DrawerBody>

                    <DrawerFooter>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Drawered
