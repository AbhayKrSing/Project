import React from 'react'
import { Avatar, Box, Menu, Text, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import axios from 'axios'
import { UseContextAPI } from '../../Context/ChatProvider'


const AddUser = ({ user }) => {
    const { chat, setchat, Toast } = UseContextAPI()
    const deletechat = async (userId) => {
        //         axios.delete does supports both request body and headers.
        // It accepts two parameters: url and optional config.You can use config.data to set the request body and headers as follows:
        const { data } = await axios.delete('/api/chats/delete', {
            headers: {
                'auth-token': JSON.parse(localStorage.getItem('UserInfo')).token
            },
            data: {
                'userId': userId     //it goes into req.body
            }
        });
        console.log(data)
        if (data) {
            Toast('Chat deleted successfully', '', 'error', 1000, 'bottom')
        }

        //Logic to remove deleted user from chat variable
        const removedUser = data.users[1]._id
        let index = -1
        for (const element of chat) {
            index++
            if (element._id === removedUser) {
                break
            }
        }
        const newChat = chat
        newChat.splice(index, 1)
        // setchat(newChat)           //you cannot change chat directly you need to make copy of it.
        setchat([...newChat])

    }
    return (
        <>
            <Box w="100%" p={4}
                cursor={'pointer'}
                bg={'#E8E8E8'}
                _hover={{
                    background: '#38B2AC',
                    color: 'white',
                }}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-between'}
                color={'black'}
                px={3}
                py={2}
                mt={3}
            >
                <Box display={'flex'}>

                    <Avatar
                        mr={2}
                        size={'sm'}
                        cursor={'pointer'}
                        name={user.name}
                        src={user.pic}>
                    </Avatar>
                    <Box>
                        <Text>{user.name}</Text>
                        <Text fontSize="xs">
                            <b>Email:</b>
                            {user.email}
                        </Text>
                    </Box>
                </Box>
                <Menu >
                    <MenuButton >
                        <ChevronDownIcon />
                    </MenuButton>
                    <MenuList>
                        <MenuItem color={'darkred'} fontWeight={'bold'} fontSize={'0.9rem'} onClick={() => { deletechat(user._id) }}>delete chat</MenuItem>
                    </MenuList>
                </Menu>
            </Box>
        </>
    )
}

export default AddUser
