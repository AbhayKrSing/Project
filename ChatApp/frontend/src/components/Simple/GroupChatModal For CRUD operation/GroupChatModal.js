import React from 'react'
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
    Box
} from '@chakra-ui/react'
import { ViewIcon } from '@chakra-ui/icons'
import { UseContextAPI } from '../../../Context/ChatProvider'
import UserbadgeInGroupChat from '../UserbadgeInGroupChat'

const GroupChatModal = () => {
    const { selectChat, setPeople } = UseContextAPI()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const handlechange = async (e) => {
        const value = e.target.value;
        console.log(value)
        const { data } = await axios.get(`/api/user?search=${value}`, {
            headers: {
                'auth-token': JSON.parse(localStorage.getItem('UserInfo')).token
            }
        })
        console.log(data)
        if (!data) {
            console.log('something went wrong')
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
