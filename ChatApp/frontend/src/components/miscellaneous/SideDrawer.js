import React, { useState } from 'react'
import { Box, Button, Tooltip, Text, MenuButton, Menu, MenuItem, MenuList, Wrap, WrapItem, Avatar, MenuDivider } from '@chakra-ui/react'
import { BellIcon, ChevronDownIcon, SearchIcon } from '@chakra-ui/icons'
import { UseContextAPI } from '../../Context/ChatProvider'
import ProfileModal from '../Simple/ProfileModal'
import { useNavigate } from 'react-router-dom'
import Drawered from '../Simple/Drawer'
const SideDrawer = () => {
    const [labelbug, setlabelbug] = useState(true)
    const { user, setuser } = UseContextAPI()
    const navigate = useNavigate()
    const Logout = () => {
        setuser(null)
        localStorage.removeItem('UserInfo')
        navigate('/')
    }
    return (

        <React.Fragment>
            <Box display={'flex'} flexWrap={'wrap'} justifyContent={'space-between'} alignItems={'center'} width={'100%'} bg={'white'} textAlign={'center'} fontFamily={'work sans'} fontSize={'3em'} borderRadius={'0 0 0.5rem 0.5rem'} padding={'0 0.5rem 0 0.5rem'}>
                <Tooltip label={labelbug ? 'Search People' : ''} hasArrow >
                    {/*If you use Drawered component her it will give warning message that ref cannot be used in function components. */}
                    <Button colorScheme='gray'>
                        <Drawered setlabelbug={setlabelbug}>
                            <SearchIcon />
                            <Text p={2}>Search People</Text>
                        </Drawered>
                    </Button>

                </Tooltip>
                <Box fontSize={'5xl'}>TalkTive</Box>
                <Box>
                    <Menu>
                        <MenuButton as={Button} p={1} bg={'transparent'}>
                            <BellIcon fontSize={'2xl'} />
                        </MenuButton>
                        <MenuList fontSize={'3xl'} >
                            <MenuItem >Hello
                            </MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            <Wrap>
                                <WrapItem>
                                    <Avatar
                                        size='sm'
                                        name={user.name}
                                        src={user.pic}
                                    />
                                </WrapItem>
                            </Wrap>
                        </MenuButton>    {/*Never use value MenuList inside MenuButton,It takes my 1 day*/}
                        {/* All warning and error automatically removed*/}
                        {/*Agar koi chiz button ke andar warpped hai to sirf button pe hi to event trigger hoga */}
                        <MenuList fontSize={'3xl'}>
                            <ProfileModal>
                                <MenuItem >Profile</MenuItem>
                            </ProfileModal>
                            <MenuDivider />
                            <MenuItem onClick={Logout}>Logout</MenuItem>
                        </MenuList>



                    </Menu>
                </Box>
            </Box>

        </React.Fragment>
    )
}

export default SideDrawer
