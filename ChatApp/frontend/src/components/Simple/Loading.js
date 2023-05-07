import { Stack, Skeleton } from '@chakra-ui/react'
import React from 'react'

const Loading = ({ loading }) => {
    return (
        <Stack mt={5} display={loading ? '' : 'none'}>
            <Skeleton height='30px' />
            <Skeleton height='30px' />
            <Skeleton height='30px' />
        </Stack>
    )
}

export default Loading
