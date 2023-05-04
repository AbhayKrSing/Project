import { Box, Grid, GridItem } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { UseContextAPI } from '../Context/ChatProvider'
import SideDrawer from '../components/miscellaneous/SideDrawer'
import MyChat from '../components/miscellaneous/MyChat'
import ChatBox from '../components/miscellaneous/ChatBox'



// import axios from 'axios';

const Chatpage = () => {
  const { user } = UseContextAPI()
  const fetchData = async () => {
    //  const res= await axios.get('/api/chats')
    //  console.log(res) 
    //  console.log(res.data)
  }
  useEffect(() => {
    fetchData()
    window.scrollTo({ top: 0, behavior: 'smooth' })  //To scroll to top
    document.body.style.overflow = 'hidden'
  }, [])

  return (
    <React.Fragment>
      <Box w={'100%'}>
        <Box>
          {user && <SideDrawer />}
        </Box>
        <Grid templateColumns='repeat(3, 1fr)' gap={6} bg='blue.500'>
          <GridItem w='100%' colSpan={1}>  {user && <MyChat />}</GridItem>
          <GridItem w='100%' colSpan={2}>  {user && <ChatBox />}</GridItem>
        </Grid>
      </Box>
    </React.Fragment>
  )
}

export default Chatpage
