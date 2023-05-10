import React from 'react'
import { Avatar, Box, Text } from '@chakra-ui/react'

const AddUser = ({ user }) => {
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
                {/* <Box>
                    <AddIcon m={2} onClick={() => { accessChats(element._id) }} />
                </Box> */}
            </Box>
        </>
    )
}

export default AddUser
