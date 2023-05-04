import React from 'react'
import { Box, Button, Tooltip, Text, MenuButton, Menu, MenuItem, MenuList, Wrap, WrapItem, Avatar } from '@chakra-ui/react'
import { BellIcon, ChevronDownIcon, SearchIcon } from '@chakra-ui/icons'
import { UseContextAPI } from '../../Context/ChatProvider'
import ProfileModal from '../Simple/ProfileModal'

const SideDrawer = () => {
    const { user } = UseContextAPI()
    return (

        <React.Fragment>
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={'100%'} bg={'white'} textAlign={'center'} fontFamily={'work sans'} fontSize={'3em'} borderRadius={'0 0 0.5rem 0.5rem'} padding={'0 0.5rem 0 0.5rem'}>
                <Tooltip label='Search People' hasArrow >
                    <Button colorScheme='gray'>
                        <SearchIcon />
                        <Text p={2}>Search People</Text>
                    </Button>
                </Tooltip>
                <Box fontSize={'5xl'}>TalkTive</Box>
                <Box>
                    <Menu>
                        <MenuButton as={Button} p={1} bg={'transparent'}>
                            <BellIcon fontSize={'2xl'} />
                        </MenuButton>
                        <MenuList fontSize={'3xl'}>
                            <MenuItem>Hello
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
                                <MenuList>
                                    <MenuItem>My Profile</MenuItem>
                                    <MenuItem>LogOut</MenuItem>
                                </MenuList>
                            </Wrap>
                        </MenuButton>
                    </Menu>
                </Box>
            </Box>
            <ProfileModal />
        </React.Fragment>
    )
}

export default SideDrawer
