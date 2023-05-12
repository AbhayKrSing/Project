import React, { useEffect } from 'react'
import { Box, Button, Text, Stack } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import AddUser from '../Simple/AddUser'
import { UseContextAPI } from '../../Context/ChatProvider'
import GroupChatModal from '../Simple/GroupChatModel'


const MyChat = () => {

    const { chat, fetchChats } = UseContextAPI()
    useEffect(() => {
        fetchChats()
        // eslint-disable-next-line
    }, [])
    return (
        <React.Fragment>
            <Box
                bg={'white'}
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
                <Stack overflowY={'scroll'} overflowX={'hidden'} height={'80%'}>
                    {(chat).map((element, index) => {
                        return (<AddUser user={element} key={index} />)
                    })}
                </Stack>
            </Box>
        </React.Fragment>
    )
}

export default MyChat
