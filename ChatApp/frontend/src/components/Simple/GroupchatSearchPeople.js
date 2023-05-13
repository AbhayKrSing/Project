import React from 'react'
import {
    Box,
    Avatar,
    Text,
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { UseContextAPI } from '../../Context/ChatProvider'
const GroupchatSearchPeople = ({ element }) => {
    const { add } = UseContextAPI()
    return (

        <Box bg={'gray.200'} p={1} border={'2px'} alignItems={'center'} justifyContent={'space-between'} borderRadius={'3px'} display={'flex'}>
            <Box>
                <Box display={'flex'} alignItems={'center'}>
                    <Avatar mr={3}
                        name={element.name}
                        src={element.pic}
                    />
                    <Text fontFamily={'work sans'}>
                        {element.name}
                    </Text>
                </Box>
            </Box>
            <Box>
                <AddIcon onClick={() => { add(element) }} />
            </Box>
        </Box>

    )
}

export default GroupchatSearchPeople
