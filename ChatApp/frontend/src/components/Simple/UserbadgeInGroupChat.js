import React from 'react'
import { UseContextAPI } from '../../Context/ChatProvider'
import { Stack, Badge } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
const UserbadgeInGroupChat = () => {
    const { People } = UseContextAPI()
    return (

        <Stack direction='row' wrap={'wrap'}>
            {People.map((element) => {
                return (
                    <span style={{ margin: '2px' }}><Badge _disabled={true} colorScheme='purple' bg={'peru'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>{element.name}
                        <CloseIcon />
                    </Badge>
                    </span>)
            })}

        </Stack>

    )
}

export default UserbadgeInGroupChat
