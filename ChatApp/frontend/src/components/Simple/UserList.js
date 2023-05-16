import { Avatar, Box, Text } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import React from 'react'
//Never use useState hook inside components that render multiple time,due this various hook state formed.
const UserList = ({ element, accessChats }) => {


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
                borderRadius={'lg'}
            >
                <Box display={'flex'}>

                    <Avatar
                        mr={2}
                        size={'sm'}
                        cursor={'pointer'}
                        name={element.name}
                        src={element.pic}>
                    </Avatar>
                    <Box>
                        <Text>{element.name}</Text>
                        <Text fontSize="xs">
                            <b>Email:</b>
                            {element.email}
                        </Text>
                    </Box>
                </Box>
                <Box>
                    <AddIcon m={2} onClick={() => { accessChats(element._id) }} />
                </Box>
            </Box>
        </>
    )
}

export default UserList
