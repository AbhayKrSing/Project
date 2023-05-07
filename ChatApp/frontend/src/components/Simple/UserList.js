import { Avatar, Box, Button, Text } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import React from 'react'
const UserList = ({ element }) => {
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
                            {element.name}
                        </Text>
                    </Box>
                </Box>
                <Box>
                    <AddIcon m={2} />
                </Box>
            </Box>
        </>
    )
}

export default UserList
