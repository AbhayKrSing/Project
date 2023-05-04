import React, { useEffect } from 'react'
import { Container, Box, Text, Tab, Tabs, TabPanel, TabPanels, TabList } from '@chakra-ui/react'
import Login from '../components/authentication/Login'
import Signup from '../components/authentication/Signup'
const Homepage = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [])

  const handleclick = (key) => {
    if (key === 'signup') {
      document.body.style.overflow = "auto";
    }
    else {
      window.scrollTo({ top: 0, behavior: 'smooth' });  //To scroll to top
      document.body.style.overflow = "hidden";
    }
  }
  return (
    <React.Fragment>
      <Container p={4}>
        <Box bg='white' w='100%' p={4} marginBottom={2} borderRadius={'lg'} textAlign={'center'} color='black'>
          <Text fontSize={'4xl'} fontFamily={'work sans'}> Talk-tive</Text>
        </Box>
        <Box bg='white' w='100%' p={4} borderRadius={'lg'} textAlign={'center'} color='black'>
          <Tabs variant='soft-rounded' colorScheme='green'>
            <TabList>
              <Tab width={'50%'} onClick={handleclick}>Login</Tab>
              <Tab width={'50%'} onClick={() => { handleclick('signup') }}>SignUp</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <Signup />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </React.Fragment >
  )
}

export default Homepage
