import React, { useState } from 'react'
import { Box, Button, FormControl, Input } from '@chakra-ui/react'
import { ArrowRightIcon } from '@chakra-ui/icons'
import { UseContextAPI } from '../../Context/ChatProvider'
import axios from 'axios'
const MessageTyping = () => {
    const [value, setvalue] = useState('')
    const { selectChat, user, setchatcontent } = UseContextAPI()
    const handlechange = (e) => {
        setvalue(e.target.value)
    }
    const sendMessage = async () => {
        const { data } = await axios.post('/api/messages/single', JSON.stringify({
            content: value,
            chat: selectChat._id,
        }), {
            headers: {
                'Content-Type': 'application/json',
                'auth-token': user.token
            }
        })
        setchatcontent(data.content)
    }
    return (
        <>
            {selectChat ? <FormControl>
                <Box display={'flex'} width={'100%'} height={'60px'}>
                    <Input type='text' placeholder='Write message' width={'90%'} height={'80%'} border={'solid 1px black'} onChange={handlechange} />
                    <Button height={'80%'} width={'10%'} colorScheme='blue' onClick={sendMessage}><ArrowRightIcon /></Button>
                </Box>
            </FormControl > : ''
            }
        </>

    )
}

export default MessageTyping
