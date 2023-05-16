import React from 'react'
import { Box, Text, Button } from '@chakra-ui/react'
import { UseContextAPI } from '../../Context/ChatProvider'
import ProfileModal from '../Simple/ProfileModal'
import { ArrowBackIcon } from '@chakra-ui/icons'

const ChatBox = () => {
    const { selectChat, setselectChat } = UseContextAPI()
    return (
        <React.Fragment>
            <Box
                bg={selectChat ? 'gray.300' : 'white'}
                height={'80vh'}
                borderRadius={'4px'}
                mr={{ base: 5, lg: 9 }}
                ml={{ lg: 0 }}
                display={{ base: selectChat ? 'block' : 'none', lg: 'block' }}
            >
                <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                >
                    <Text fontSize={'2rem'} m={2} fontFamily={'work sans'} display={{ base: 'none', lg: 'block' }}>{selectChat ? `${selectChat.name || selectChat.chatName}` : ''}</Text>
                    <Text display={{ base: 'block', lg: 'none' }}>
                        <ArrowBackIcon height={'100px'} width={'60px'} onClick={() => { setselectChat('') }} />
                    </Text>

                    <Button m={2} bg={'transparent'} display={selectChat ? 'flex' : 'none'}>
                        <ProfileModal></ProfileModal>
                    </Button>
                </Box>
                <Box height={'76%'} fontSize={'2.8rem'} width={'100%'} bg={'white'} overflowY={'scroll'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Box fontFamily={'work sans'}>
                        {selectChat ? '' : "Select the User for Chatting"}</Box>
                </Box>
            </Box>

        </React.Fragment >
    )
}

export default ChatBox
