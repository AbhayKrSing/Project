import React, { useState } from 'react'
import axios from 'axios'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    FormLabel,
    Input,
    Box,
    Stack
} from '@chakra-ui/react'
import { ViewIcon } from '@chakra-ui/icons'
import { UseContextAPI } from '../../../Context/ChatProvider'
import UserbadgeInGroupChat from '../UserbadgeInGroupChat'
import GroupchatSearchPeople from '../GroupchatSearchPeople'
const GroupChatModal = () => {
    const { selectChat, setPeople } = UseContextAPI()
    const [searchpeople, setsearchpeople] = useState([])
    const { isOpen, onOpen, onClose } = useDisclosure()
    const handlechange = async (e) => {
        setsearchpeople([])
        const value = e.target.value;
        if (value.length === 0) {
            setsearchpeople([])
        }
        else if (value.length > 0) {
            try {
                const { data } = await axios.get(`/api/user?search=${value}`, {
                    headers: {
                        'auth-token': JSON.parse(localStorage.getItem('UserInfo')).token
                    }
                })
                setsearchpeople(data)
            } catch (error) {
                console.log(error.message)
            }
        }
    }
    return (
        <>
            <ViewIcon onClick={() => { onOpen(); setPeople(selectChat.users) }} height={'90px'} width={'50px'}>Open Modal</ViewIcon>

            <Modal isOpen={isOpen} onClose={() => { onClose(); setPeople([]) }}> {/*Logic to use reuse UserbadgeInGroupChat component*/}
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{selectChat.chatName}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <UserbadgeInGroupChat />
                        <FormControl>
                            <FormLabel>ChatName</FormLabel>
                            <Box display={'flex'}>
                                <Input type='text' />
                                <Button ml={1}>Update</Button>
                            </Box>
                            <FormLabel>Adduser</FormLabel>
                            <Box display={'flex'}>
                                <Input type='text' onChange={handlechange} />
                            </Box>
                            <Box>
                                <Stack overflowY={searchpeople.length > 3 ? 'scroll' : ''} height={searchpeople.length > 3 ? '22vh' : ''}>
                                    {searchpeople.map((element, index) => {
                                        return (<GroupchatSearchPeople element={element} key={element._id} />)
                                    })}
                                </Stack>
                            </Box>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            leave
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default GroupChatModal
