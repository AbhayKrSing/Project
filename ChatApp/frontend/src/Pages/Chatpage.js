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
        {user && <SideDrawer />}
        <Grid templateColumns={{ base: 'repeat(1,1fr)', lg: 'repeat(3, 1fr)' }} gap={{ base: 0, lg: 6 }}>
          <GridItem w='100%' colSpan={1} m={3}>
            {user && <MyChat />}
          </GridItem>
          <GridItem w='100%' colSpan={2} m={3}>
            {user && <ChatBox />}
          </GridItem>
        </Grid>
      </Box>
    </React.Fragment>
  )
}

export default Chatpage
