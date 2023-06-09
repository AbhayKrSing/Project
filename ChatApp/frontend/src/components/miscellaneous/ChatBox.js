import React from 'react'
import { Box, Text, Button } from '@chakra-ui/react'
import { UseContextAPI } from '../../Context/ChatProvider'
import GroupChatModal from '../Simple/GroupChatModal For CRUD operation/GroupChatModal'
import { ArrowBackIcon } from '@chakra-ui/icons'
import ProfileModal from '../Simple/ProfileModal'
import MessageTyping from '../Chats/MessageTyping'
import AllMessages from '../MessageDisplayer/AllMessages'
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
                        {selectChat.chatName ? <GroupChatModal></GroupChatModal> : <ProfileModal></ProfileModal>}
                    </Button>
                </Box>
                <Box id='scroll' height={'76%'} fontSize={'1rem'} width={'100%'} bg={'white'} overflowY={'scroll'} scrollBehavior={'smooth'} >
                    <Box fontFamily={'work sans'} display={selectChat ? 'none' : 'block'}>
                        <Text align={'center'} fontSize={'1.9rem'}>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            Select the User for Chatting
                        </Text>
                    </Box>
                    <Box display={selectChat ? 'flex' : 'none'} flexDirection={'column'} fontFamily={'work sans'} height={'100%'} alignItems={'flex-end'}>
                        <AllMessages></AllMessages>
                    </Box>
                </Box>
                <MessageTyping />
            </Box>

        </React.Fragment >
    )
}

export default ChatBox
