import React from 'react'
import { Box, Button, FormControl, Input } from '@chakra-ui/react'
import { ArrowRightIcon } from '@chakra-ui/icons'
import { UseContextAPI } from '../../Context/ChatProvider'
const SingleChat = () => {
    const { selectChat } = UseContextAPI()
    return (
        <>
            {selectChat ? <FormControl>
                <Box display={'flex'} width={'100%'} height={'60px'}>
                    <Input type='text' placeholder='Write message' width={'90%'} height={'80%'} border={'solid 1px black'} />
                    <Button height={'80%'} width={'10%'} colorScheme='blue'><ArrowRightIcon /></Button>
                </Box>
            </FormControl > : ''
            }
        </>

    )
}

export default SingleChat
