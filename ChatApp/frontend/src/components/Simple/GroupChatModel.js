import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,
    Box,
    Stack,
    Button

} from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { UseContextAPI } from '../../Context/ChatProvider'
import GroupchatSearchPeople from './GroupchatSearchPeople'
import UserbadgeInGroupChat from './UserbadgeInGroupChat'
const GroupChatModel = ({ children }) => {


    const [searchpeople, setsearchpeople] = useState([])
    const [GroupchatName, setGroupchatName] = useState('')
    const { Toast, createGroupChat, load } = UseContextAPI()
    const handlechange = async (value, identity) => {
        if (identity === 'search') {
            if (value && value !== null) {
                const { data } = await axios.get(`https://talktive.onrender.com/api/user?search=${value}`, {
                    headers: {
                        'auth-token': JSON.parse(localStorage.getItem('UserInfo')).token
                    }
                })
                setsearchpeople(data)
            }
            else {
                Toast('Write something here', '', 'warning', 1000)
                setsearchpeople([])
            }
        }
        else {
            setGroupchatName(value)
        }
    }
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>  <div onClick={onOpen}>{children}</div>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textAlign={'center'} fontFamily={'Work sans'} fontSize={'2rem'}>Create Group Chat</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel>Chat Name</FormLabel>
                            <Input type='text' placeholder='Write Chat Name' mb={6} onChange={(e) => { handlechange(e.target.value, 'name') }} />
                            <FormLabel>Search People</FormLabel>
                            <Input type='text' placeholder='eg piyush abhay teth etc.' onChange={(e) => { handlechange(e.target.value, 'search') }} />
                        </FormControl>
                        <UserbadgeInGroupChat />
                        <Box w={'100%'} mt={2}>
                            <Stack overflowY={searchpeople.length > 3 ? 'scroll' : ''} height={searchpeople.length > 3 ? '30vh' : ''}>
                                {searchpeople.map((element, index) => {
                                    return (<GroupchatSearchPeople element={element} key={element._id} />)
                                })}
                            </Stack>
                        </Box>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' onClick={() => { createGroupChat(GroupchatName) }} isLoading={load}>Create</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default GroupChatModel
