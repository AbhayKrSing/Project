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
    Stack,
} from '@chakra-ui/react'
import { ViewIcon } from '@chakra-ui/icons'
import { UseContextAPI } from '../../../Context/ChatProvider'
import UserbadgeInGroupChat from '../UserbadgeInGroupChat'
import GroupchatSearchPeople from '../GroupchatSearchPeople'
const GroupChatModal = ({ openMODAL }) => {
    const { selectChat, setPeople, chat, Toast, setchat, Add_RemoveUserFrommGroupChat, user } = UseContextAPI()
    const [searchpeople, setsearchpeople] = useState([])
    const [value, setvalue] = useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()
    const updateChatName = async () => {
        if (value.length === 0) {
            Toast('Write here something', '', 'warning', 1000, 'bottom')
            return
        }
        try {
            const { data } = await axios.put('/api/chats/rename', JSON.stringify({
                id: selectChat._id,
                ChatName: value
            }),
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'auth-token': JSON.parse(localStorage.getItem('UserInfo')).token
                    }
                }
            )
            console.log(data)
            if (data !== 'Not authorized to rename group') {
                let index = 0;
                while (index < chat.length) {
                    if (chat[index]._id === data._id) {
                        break;
                    }
                    index++
                }
                chat.splice(index, 1)           //logic to remove and insert element in specific index of array.
                chat.splice(index, 0, data)
                setchat([...chat])
                Toast('GroupChat Name Changed', '', 'success', 1000, 'bottom')
            }
            else {
                Toast('Only GroupAdmin Allowed to perform such actions', '', 'error', 1000, 'bottom')
            }
        } catch (error) {
            console.log(error.message)
        }

    }

    const handlechange = async (value, select) => {
        if (select === '2') {
            setsearchpeople([])
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
        else {
            try { //to rename group chat
                setvalue(value)
            } catch (error) {
                console.log(error.message)
            }
        }
    }
    return (
        <>
            <ViewIcon onClick={() => { onOpen(); setPeople(selectChat.users) }} height={'90px'} width={'50px'}></ViewIcon>
            <Modal isOpen={isOpen} onClose={() => { onClose(); setPeople([]) }}> {/*Logic to use reuse UserbadgeInGroupChat component*/}
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{selectChat.chatName}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <UserbadgeInGroupChat />
                        {user.id === selectChat.groupAdmin._id ? <FormControl>
                            <FormLabel>ChatName</FormLabel>
                            <Box display={'flex'}>
                                <Input type='text' onChange={(e) => { handlechange(e.target.value, '1') }} />
                                <Button ml={1} onClick={updateChatName}>Update</Button>
                            </Box>
                            <FormLabel>SelectUser</FormLabel>
                            <Box display={'flex'}>
                                <Input type='text' onChange={(e) => { handlechange(e.target.value, '2') }} />
                            </Box>
                            <Box>
                                <Stack overflowY={searchpeople.length > 3 ? 'scroll' : ''} height={searchpeople.length > 3 ? '22vh' : ''}>
                                    {searchpeople.map((element, index) => {
                                        return (<GroupchatSearchPeople element={element} key={element._id} />)
                                    })}
                                </Stack>
                            </Box>
                        </FormControl> : ''}
                    </ModalBody>

                    <ModalFooter>
                        {user.id === selectChat.groupAdmin._id ? <Button colorScheme='blue' mr={3} onClick={() => { Add_RemoveUserFrommGroupChat('People') }} >
                            ChangeUsers
                        </Button> : ''}
                        {user.id !== selectChat.groupAdmin._id ? <Button colorScheme='red' onClick={() => { Add_RemoveUserFrommGroupChat('oneUser') }}>
                            LeaveGroup
                        </Button> : ''}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default GroupChatModal
