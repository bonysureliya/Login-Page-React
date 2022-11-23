import './App.css'
import { Button, Container , ButtonGroup, Link , Text , Flex , Box , Stack } from '@chakra-ui/react'
function App() {
  

  return (
    <>
      <Box boxShadow='xl' bgColor='white' color='black'>
        <Container maxW={'container.lg'}>
        <Stack py={4} px={4} >
          <Flex alignItems={'center'} justify='space-between'>
            <Box>
              <Text>Login Page</Text>
            </Box>

            <Flex gap={4}>
              <Button  _hover={{ bg: '#805AD5' }} colorScheme={'gray'} variant={'ghost'}>Login</Button>
              <Button colorScheme={'purple'}>Signup</Button>
            </Flex>
          </Flex>
        </Stack>
        </Container>
      </Box>
      <Box>
        <Text noOfLines={[1,2,3]}>
          Hello World
        </Text>
      </Box>
    </>
  );
}

export default App
