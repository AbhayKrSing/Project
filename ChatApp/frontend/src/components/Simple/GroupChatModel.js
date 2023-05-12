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
} from '@chakra-ui/react'

import React from 'react'
const GroupChatModel = ({ children }) => {
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
                            <Input type='text' placeholder='eg piyush abhay teth etc.' />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default GroupChatModel
