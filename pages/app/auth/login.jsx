import React, {useState, useEffect} from 'react';
import { Flex, Box, FormControl, FormLabel, Input, Checkbox, Stack, Button, Heading, Text, useColorModeValue, useToast } from '@chakra-ui/react';
import Link from 'next/link'
import Router from 'next/router'
import { parseCookies, setCookie, destroyCookie } from "nookies"
import { authenticate, addUser } from "../../../src/slices/authSlice"
import { useSelector, useDispatch } from "react-redux"
import { Spinner } from '@chakra-ui/react'


const Login = () => {
  const [emailInput, setEmailInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")
  const auth = useSelector(state => state.auth.isAuthenticated)
  const [isAuth, setisAuth] = useState(auth)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    if (isAuth) return Router.push('/app')
  }, [isAuth])

  const handleSubmit = async () => {
    setIsSubmitting(true);

    const loginInfo = {
      "identifier": emailInput,
      "password": passwordInput,
    }

    try {
      const res = await fetch("/api/auth/login", {
        method: 'POST',
        headers: {'Content-Type' : 'application/json', 'Accept': 'application/json'},
        body: JSON.stringify(loginInfo),
      })
      const json = await res.json();

      setEmailInput("")
      setPasswordInput("")

      if (res.status === 200) {
        dispatch(authenticate());
        dispatch(addUser(json))
        toast({
          status: 'success',
          title: 'Success',
          description: 'Login Successful...',
          isClosable: true,
          duration: 2000,
          position: 'top',
      })
        return Router.push("/app")
      }
    } catch (error) {
      toast({
          status: 'error',
          title: 'Error',
          description: 'Oh no, Invalid Email or Password! Try Again',
          isClosable: true,
          duration: 6000,
          position: 'top',
      })
      setTimeout(() => {
        setIsSubmitting(false)
      }, 1000);
    }
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your Workspace</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" name="email" placeholder="jondoe@example.com" onChange={(e) => setEmailInput(e.target.value)} value={emailInput} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" placeholder="Minimun 8 characters" onChange={(e) => setPasswordInput(e.target.value)} value={passwordInput} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link href="/app" >
                    <a style={{color: "skyblue"}} >Forgot Password?</a>
                  </Link>
              </Stack>
              <Button
                type="submit"
                onClick={handleSubmit}
                bg='blue.400'
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                disabled={isSubmitting}>
                {isSubmitting ? <Spinner /> : 'Log In'}
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Don't have an account? 
                <Link href="./signup" >
                  <a style={{color: "skyblue"}} > Sign Up</a>
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default Login;