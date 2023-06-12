import { Box, Avatar, Text, Spinner } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { UseContextAPI } from '../../Context/ChatProvider'

const AllMessages = () => {
    const { selectChat, user, chatcontent, FetchAllMessages } = UseContextAPI()
    const [load, setload] = useState(false)
    useEffect(() => {
        async function fetchData() {
            if (selectChat) {
                setload(true)
                await FetchAllMessages()
                setload(false)
            }

        }
        fetchData()
        // eslint-disable-next-line
    }, [selectChat])

    return (
        <>{load && <Box display={'flex'} justifyContent={'center'} width={'100%'} height={'100%'} alignItems={'center'} >
            <Box >
                <Spinner />
            </Box>
        </Box>}
            {!load && chatcontent.map((element) => {
                if (element.sender._id === user.id) {
                    return (<Box background={'lightgreen'} p={2} m={2} borderRadius={'20px 20px 0 20px'} key={element._id}>
                        {element.content}
                    </Box>)
                }
                else {
                    return (<Box background={'lightblue'} p={2} m={2} borderRadius={'0px 20px 20px 20px'} key={element._id} display={selectChat.isGroupChat ? 'flex' : 'block'} justifyContent={selectChat.isGroupChat ? 'space-between' : ''}>
                        {selectChat.isGroupChat ? <Avatar size='sm' src={element.sender.pic} /> : ''}
                        <Text>{element.content}</Text>
                    </Box>)
                }
            })}
        </>
    )
}

export default AllMessages
