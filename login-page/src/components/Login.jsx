// import './App.css'
import {
  Button,
  Container,
  ButtonGroup,
  Link,
  Text,
  Flex,
  Box,
  VStack,
  Input,
  Stack,
} from "@chakra-ui/react";
import { FaGithub, FaGoogle } from "react-icons/fa";
function Login() {
  return (
    <>
      <Stack
        borderColor={"black"}
        rounded={"2xl"}
        position={"absolute"}
        left={"20%"}
        bgColor={"gray.200"}
        height={"auto"}
        width={"96"}
        boxShadow={"xl"}
        gap={4}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexDirection={"column"}
        mx={"80"}
        my={20}
        p={6}
      >
        <Flex justifyContent={"center"}>
          <Text fontSize={"3xl"}>Login</Text>
        </Flex>
        <Text marginLeft={"4"} marginTop={"2"} fontSize={"xl"}>
          Email :
        </Text>
        <Input
          marginLeft={"4"}
          h={10}
          width={"90%"}
          size={"md"}
          placeholder={"Enter an Email"}
        ></Input>
        <Text marginLeft={"4"} marginTop={"2"} fontSize={"xl"}>
          Password
        </Text>
        <Input
          type={"password"}
          marginLeft={"4"}
          width={"90%"}
          size={"md"}
          h={10}
          placeholder={"Enter your Password"}
        ></Input>
        <Button
          leftIcon={<FaGoogle />}
          colorScheme={"facebook"}
          py={4}
          w={"60%"}
          rounded={"lg"}
        >
          Continue with Google
        </Button>
        <Button
          leftIcon={<FaGithub />}
          bgColor={"black"}
          colorScheme={"whiteAlpha"}
          py={4}
          w={"60%"}
          rounded={"lg"}
        >
          Continue with Github
        </Button>
      </Stack>
    </>
  );
}

export default Login;
