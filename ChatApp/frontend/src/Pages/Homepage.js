import React from 'react'
import { Container, Box, Text } from '@chakra-ui/react'
const Homepage = () => {
  return (
    <React.Fragment>
      <Container p={4}>
        <Box bg='white' w='100%' p={4} m={10} borderRadius={'lg'} textAlign={'center'} color='black'>
          <Text fontSize={'4xl'} fontFamily={'work sans'}> Talk-tive</Text>
        </Box>
      </Container>
    </React.Fragment>
  )
}

export default Homepage
