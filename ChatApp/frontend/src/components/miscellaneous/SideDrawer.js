import React from 'react'
import { Box, Button, Tooltip, Text, MenuButton, Menu, MenuItem, MenuList, Wrap, WrapItem, Avatar } from '@chakra-ui/react'
import { BellIcon, ChevronDownIcon, SearchIcon } from '@chakra-ui/icons'
const SideDrawer = () => {
    return (

        <React.Fragment>
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={'100%'} bg={'white'} textAlign={'center'} fontFamily={'work sans'} fontSize={'3em'} borderRadius={'0 0 0.5rem 0.5rem'} padding={'0 0.5rem 0 0.5rem'}>
                <Tooltip label='Search People' hasArrow >
                    <Button colorScheme='gray'>
                        <SearchIcon />
                        <Text p={2}>Search People</Text>
                    </Button>
                </Tooltip>
                <Box>TalkTive</Box>
                <Box>
                    <Menu>
                        <MenuButton as={Button} p={1} bg={'transparent'}>
                            <BellIcon fontSize={'2xl'} />
                        </MenuButton>
                        {/* <MenuList>
                            <MenuItem>
                            </MenuItem>
                        </MenuList> */}
                    </Menu>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            <Wrap>
                                <WrapItem>
                                    <Avatar
                                        size='sm'
                                        name="Might Guy"
                                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1700&q=80"
                                    />
                                </WrapItem>
                            </Wrap>
                            <MenuList>
                                <MenuItem>My Profile</MenuItem>
                                <MenuItem>LogOut</MenuItem>
                            </MenuList>
                        </MenuButton>
                    </Menu>
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default SideDrawer
