import { useDisclosure, DrawerOverlay, DrawerCloseButton, DrawerHeader, DrawerBody, Input, DrawerFooter, Button, Drawer, Box, DrawerContent } from '@chakra-ui/react'
import React from 'react'

const Drawered = ({ children, setlabelbug }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const labelBug = (cond) => {
        if (cond) {
            setlabelbug(false)
        }
        else {
            setlabelbug(true)
        }
    }
    return (
        <>
            {children ? <Box display={'flex'} alignItems={'center'} onClick={() => { onOpen(); labelBug(true) }} >{children}</Box> : 'Don\'t Do anything'}
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={() => { onClose(); labelBug(false) }}

            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton onClick={() => { labelBug(false) }} />
                    <DrawerHeader>Search People</DrawerHeader>

                    <DrawerBody>
                        <Input placeholder='Type here...' />
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={() => { onClose(); labelBug(false) }}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Drawered
