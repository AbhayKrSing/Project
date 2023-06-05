import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { UseContextAPI } from '../../Context/ChatProvider'
import axios from 'axios'

const AllMessages = () => {
    const { selectChat, user, chatcontent, setchatcontent } = UseContextAPI()
    useEffect(() => {
        if (selectChat) {
            FetchAllMessages()
        }
        // eslint-disable-next-line
    }, [selectChat])

    const FetchAllMessages = async () => {
        try {
            const { data } = await axios.get(`/api/messages/chat/${selectChat._id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': user.token
                }
            })

            setchatcontent(data)
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
            {chatcontent.map((element) => {
                if (element.sender === user.id) {
                    return (<Box background={'lightgreen'} p={2} m={2} borderRadius={'20px 20px 0 20px'} key={element._id}>
                        {element.content}
                    </Box>)
                }
                else {
                    return (<Box background={'lightblue'} p={2} m={2} borderRadius={'0px 20px 20px 20px'} key={element._id}>
                        {element.content}
                    </Box>)
                }
            })}
        </>
    )
}

export default AllMessages
