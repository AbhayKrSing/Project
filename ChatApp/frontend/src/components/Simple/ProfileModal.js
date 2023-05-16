import { ViewIcon } from '@chakra-ui/icons'
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
    Image,
    Text
} from '@chakra-ui/react'
import { UseContextAPI } from '../../Context/ChatProvider'
import React, { useEffect } from 'react'

const ProfileModal = ({ children }) => {
    const { user, setuser } = UseContextAPI()
    useEffect(() => {

        setuser(JSON.parse(localStorage.getItem('UserInfo')))
        // eslint-disable-next-line
    }, [])

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            {children ? <div onClick={onOpen}>{children}</div> :
                <ViewIcon onClick={onOpen} height={'100px'} width={'60px'} />}

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent textAlign={'center'}>
                    <ModalHeader fontSize={'3xl'}>Profile</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {user.name}
                    </ModalBody>
                    <Image
                        borderRadius='full'
                        boxSize='150px'
                        src={user.pic}
                        alt={user.name}
                        mx={'auto'}
                    />
                    <Text>{user.email}</Text>
                    <ModalFooter justifyContent={'center'}>
                        <Button colorScheme='blue' onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>

    )
}

export default ProfileModal
