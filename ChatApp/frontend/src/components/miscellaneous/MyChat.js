import React, { useEffect, useState } from 'react'
import { Box, Button, Text } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import AddUser from '../Simple/AddUser'
import { UseContextAPI } from '../../Context/ChatProvider'
import GroupChatModal from '../Simple/GroupChatModel'


const MyChat = () => {
    const [selectChat, setselectChat] = useState('')
    const { chat, fetchChats } = UseContextAPI()
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
                ml={2}
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
                        return (<AddUser user={element} key={element._id} selectChat={selectChat} setselectChat={setselectChat} />)
                    })}
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default MyChat
