import { useDisclosure, DrawerOverlay, DrawerCloseButton, DrawerHeader, DrawerBody, Input, DrawerFooter, Button, Drawer, Box, DrawerContent } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios'
import Loading from './Loading'
import { UseContextAPI } from '../../Context/ChatProvider'
import UserList from './UserList'

const Drawered = ({ children, setlabelbug }) => {
    const { Toast } = UseContextAPI()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [loading, setloading] = useState(false)
    const [text, settext] = useState('')
    const [searchData, setsearchData] = useState([])
    const submitt = async () => {
        setloading(true)
        if (!text) {
            Toast('Please Write Something', 'Type here', 'warning', 1000, 'top-left')
            setsearchData([])
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
                        <Loading loading={loading} />
                        {searchData.map((element, index) => {
                            return (<UserList element={element} key={index} />)

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
