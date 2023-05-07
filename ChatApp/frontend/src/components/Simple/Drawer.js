import { useDisclosure, DrawerOverlay, DrawerCloseButton, DrawerHeader, DrawerBody, Input, DrawerFooter, Drawer, Box, DrawerContent } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from './Loading'
import UserList from './UserList'
import { UseContextAPI } from '../../Context/ChatProvider'

const Drawered = ({ children, setlabelbug }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [loading, setloading] = useState(false)
    const [text, settext] = useState('')
    const [searchData, setsearchData] = useState([])
    const { Toast } = UseContextAPI()
    useEffect(() => {       //For fetching data dynamically.
        if (text) {
            SearchUser()
        }
        else {
            setsearchData([])
        }
        // eslint-disable-next-line
    }, [text])

    const SearchUser = async () => {
        setloading(true)
        if (!text) {
            setsearchData([])
            setloading(false)
            return
        }
        try {
            const response = await axios({
                url: `/api/user?search=${text}`,
                method: 'get',
                headers: {
                    'auth-token': JSON.parse(localStorage.getItem('UserInfo')).token,
                }
            })
            setloading(false)
            setsearchData(response.data)
        } catch (error) {
            Toast('Error', error.message, 'error', 1000, 'bottom')
        }

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
    const accessChats = async (UserId) => {
        try {
            const { data } = await axios.post('/api/chats', {
                "userId": UserId
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': JSON.parse(localStorage.getItem('UserInfo')).token
                }
            })
            console.log(data)

        } catch (error) {
            Toast('Error', error.message, 'error', 1000, 'bottom')
        }
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
                        </Box>
                        <Loading loading={loading} />
                        {searchData.map((element, index) => {
                            return (<UserList element={element} key={index} accessChats={accessChats} />)
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
