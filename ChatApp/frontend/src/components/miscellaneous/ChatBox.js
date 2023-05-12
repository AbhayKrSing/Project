import React from 'react'
import { Box, Text, Button } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'

const ChatBox = () => {
    return (
        <React.Fragment>
            <Box mr={9}
                bg={'white'}
                height={'80vh'}
                display={'flex'}
                justifyContent={'space-between'}
                borderRadius={'4px'}


            > <Text fontSize={'2rem'} m={2} fontFamily={'work sans'}> ChatBox</Text>
                <Button m={2}>
                    <Text>
                        Box Chats
                    </Text>
                    <AddIcon ml={4} />
                </Button>
            </Box>

        </React.Fragment>
    )
}

export default ChatBox
