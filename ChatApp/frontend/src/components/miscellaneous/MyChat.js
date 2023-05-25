import React, { useEffect } from 'react'
import { Box, Button, Text } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import AddUser from '../Simple/AddUser'
import { UseContextAPI } from '../../Context/ChatProvider'
import GroupChatModal from '../Simple/GroupChatModel'


const MyChat = () => {
    const { chat, fetchChats, selectChat } = UseContextAPI()
    useEffect(() => {
        fetchChats()
        // eslint-disable-next-line
    }, [])
    return (
        <React.Fragment>
            <Box
                bg={'gray.200'}
                height={'80vh'}
                borderRadius={'4px'}
                m={selectChat ? 0 : ''}
                mr={{ base: 5, lg: 0 }}
                ml={{ lg: 2 }}
                display={{ base: selectChat ? 'none' : 'block', lg: 'block' }}

            >
                <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                >
                    <Text fontSize={'2rem'} m={2} fontFamily={'work sans'}> My Chats</Text>
                    <GroupChatModal>
                        <Button m={2}>
                            <Text> New Group Chat</Text>
                            <AddIcon ml={4} />
                        </Button>
                    </GroupChatModal>
                </Box>
                <Box overflowY={'scroll'} overflowX={'hidden'} height={'76%'} bg={'white'}>
                    {(chat).map((element, index) => {
                        return (<AddUser user={element} key={element._id} />)
                    })}
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default MyChat
