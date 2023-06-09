import React, { useState, useEffect } from 'react'
import { Box, Button, FormControl, Input } from '@chakra-ui/react'
import { ArrowRightIcon } from '@chakra-ui/icons'
import { UseContextAPI } from '../../Context/ChatProvider'
import axios from 'axios'
import { io } from 'socket.io-client';

let socket;
const MessageTyping = () => {
    const [value, setvalue] = useState('')
    const { selectChat, user, setchatcontent, chatcontent } = UseContextAPI()
    useEffect(() => {
        const element = document.getElementById('scroll')
        element.scrollTop = element.scrollHeight

    }, [chatcontent])
    useEffect(() => {
        if (selectChat) {
            socket = io('http://localhost:5000/')
        }
    }, [selectChat])
    const handlechange = (e) => {
        setvalue(e.target.value)
    }
    const sendMessage = async (identifier) => {
        if (identifier === 'clicked' || identifier === 'Enter') {
            const { data } = await axios.post('/api/messages/single', JSON.stringify({
                content: value,
                chat: selectChat._id,
            }), {
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': user.token
                }
            })
            console.log(user)
            setchatcontent([...chatcontent, data])

        }
    }
    return (
        <>
            {selectChat ? <FormControl>
                <Box display={'flex'} width={'100%'} height={'60px'}>
                    <Input type='text' placeholder='Write message' width={'90%'} height={'80%'} border={'solid 1px black'} onChange={handlechange} onKeyDown={(e) => { sendMessage(e.key) }} />
                    <Button height={'80%'} width={'10%'} colorScheme='blue' onClick={() => { sendMessage('clicked') }}><ArrowRightIcon /></Button>
                </Box>
            </FormControl > : ''
            }
        </>

    )
}

export default MessageTyping
