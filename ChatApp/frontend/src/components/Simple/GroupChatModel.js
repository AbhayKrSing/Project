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
    Text,
    Avatar
} from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { UseContextAPI } from '../../Context/ChatProvider'
import { AddIcon } from '@chakra-ui/icons'
const GroupChatModel = ({ children }) => {
    const [searchpeople, setsearchpeople] = useState([])
    const { Toast } = UseContextAPI()
    const handlechange = async (search) => {
        console.log(search)
        if (search && search !== null) {
            const { data } = await axios.get(`/api/user?search=${search}`, {
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
                            <Input type='text' placeholder='Write Chat Name' mb={6} />
                            <FormLabel>Search People</FormLabel>
                            <Input type='text' placeholder='eg piyush abhay teth etc.' onChange={(e) => { handlechange(e.target.value) }} />
                        </FormControl>
                        <Box w={'100%'} mt={2}>
                            <Stack >
                                {searchpeople.map((element, index) => {
                                    return (<Box bg={'gray.200'} p={1} border={'2px'} alignItems={'center'} justifyContent={'space-between'} borderRadius={'3px'} key={index} display={'flex'}>
                                        <Box>
                                            <Box display={'flex'} alignItems={'center'}>
                                                <Avatar mr={3}
                                                    name={element.name}
                                                    src={element.pic}
                                                />
                                                <Text fontFamily={'work sans'}>
                                                    {element.name}
                                                </Text>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <AddIcon />
                                        </Box>
                                    </Box>)
                                })}
                            </Stack>
                        </Box>
                    </ModalBody>

                    <ModalFooter>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default GroupChatModel
