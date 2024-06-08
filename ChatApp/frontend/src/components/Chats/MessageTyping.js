import React, { useState, useEffect, useRef } from 'react'
import { Box, FormControl, Input } from '@chakra-ui/react'
import { UseContextAPI } from '../../Context/ChatProvider'
import axios from 'axios'
import { io } from 'socket.io-client';


const MessageTyping = () => {
    const [value, setvalue] = useState('')
    const { selectChat, user, setchatcontent, chatcontent, FetchAllMessages, setTypingIndicator } = UseContextAPI()
    const socketRef = useRef(null)
    useEffect(() => {
        const element = document.getElementById('scroll')
        element.scrollTop = element.scrollHeight

    }, [chatcontent])
    useEffect(() => {
        if (selectChat) {
            socketRef.current = io('https://talktive.onrender.com/');
        }
        const { current: socket } = socketRef;  //This is called destructuring assignment. It is a shorthand syntax in JavaScript that allows you to extract values from arrays or properties from objects and assign them to variables. In this case, it is used to extract the value of the current property from the socketRef object and assign it to a new variable called socket. This is equivalent to writing:
        if (selectChat) {
            try {
                socket.on('connect', () => {
                    console.log('User is connect with' + socket.id)
                    console.log(socket)
                })
                socket.emit('join-room', selectChat.isGroupChat ? selectChat._id : [selectChat._id, user.id], (Id) => {
                    console.log('Socket connected with room having id ', Id)
                })
                socket.on('receive-message', async (message, callback) => {
                    if (message) {
                        await FetchAllMessages()
                        callback(message)
                    }
                })
                socket.on('Typing-message', (message, callback) => {
                    setTypingIndicator(message.length > 0 ? true : false)
                })
                return () => {
                    socket.disconnect()
                }
            } catch (error) {
                console.log(error);
            }
        }
        // eslint-disable-next-line
    }, [selectChat])
    const handlechange = (e) => {
        const message = e.target.value
        setvalue(message) //will remove if neccessary.
        if (message.length >= 0) {
            const { current: socket } = socketRef;
            socket.emit('Typing', message, selectChat.isGroupChat ? selectChat._id : user.id)
        }
    }
    const sendMessage = async (e) => {
        if (e.key === 'Enter' && e.target.value) {
            const { current: socket } = socketRef;

            const { data } = await axios.post('https://talktive.onrender.com/api/messages/single', JSON.stringify({
                content: value,
                chat: selectChat._id,
            }), {
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': user.token
                }
            })
            e.target.value = ''
            setchatcontent([...chatcontent, data])
            socket.emit('send-message', value, selectChat.isGroupChat ? selectChat._id : user.id)
            socket.emit('Typing', '', selectChat.isGroupChat ? selectChat._id : user.id)
        }
    }
    return (
        <>
            {selectChat ? <FormControl>
                <Box display={'flex'} width={'100%'} height={'60px'}>
                    <Input type='text' placeholder='Write message' width={'100%'} height={'80%'} border={'solid 1px black'} onChange={handlechange} onKeyDown={(e) => { sendMessage(e) }} />
                </Box>
            </FormControl > : ''
            }
        </>

    )
}

export default MessageTyping
