import './App.css'
import { Button, Container , ButtonGroup, Link , Image , Text , Flex , Box , Stack } from '@chakra-ui/react'
import Login from './components/Login'
import image1 from './assets/react.svg'
function App() {
  
  return (
    <>
      <Box boxShadow='xl' bgColor='white' color='black'>
        <Container maxW={'container.lg'}>
        <Stack py={4} px={4} >
          <Flex alignItems={'center'} justify='space-between'>
            <Box>
              <Image src={image1}/>
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
        <Login />
      </Box>
      
    </>
  );
}

export default App
