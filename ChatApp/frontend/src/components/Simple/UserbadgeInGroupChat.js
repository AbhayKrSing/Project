import React from 'react'
import { UseContextAPI } from '../../Context/ChatProvider'
import { Stack, Badge } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
const UserbadgeInGroupChat = () => {
    const { People, remove, selectChat, user } = UseContextAPI()
    return (

        <Stack direction='row' wrap={'wrap'}>
            {(People).map((element) => {
                return (
                    <span style={{ margin: '2px' }} key={element._id}><Badge _disabled={true} colorScheme='purple' bg={'peru'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>{element.name}
                        <CloseIcon onClick={() => { remove(element) }} pointerEvents={user.id === selectChat.groupAdmin._id ? "" : 'none'} />
                    </Badge>
                    </span>)
            })}

        </Stack>

    )
}

export default UserbadgeInGroupChat
