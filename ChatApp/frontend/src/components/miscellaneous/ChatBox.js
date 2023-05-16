import React from 'react'
import { Box, Text } from '@chakra-ui/react'

const ChatBox = () => {
    return (
        <React.Fragment>
            <Box></Box>
            <Box mr={9}
                bg={'gray.300'}
                height={'80vh'}
                borderRadius={'4px'}
            >
                <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                >
                    <Text fontSize={'2rem'} m={2} fontFamily={'work sans'}>Chat Box</Text>
                    {/* <Button m={2}>
                        <Text> New Group Chat</Text>
                        <AddIcon ml={4} />
                    </Button> */}
                </Box>
                <Box height={'76%'} width={'100%'} bg={'white'} overflowY={'scroll'}>
                </Box>
            </Box>

        </React.Fragment >
    )
}

export default ChatBox
