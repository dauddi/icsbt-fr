import React, {useState, useEffect} from 'react'
import { Container, Flex, HStack, Heading, Text, Button, Box, Checkbox, Input } from '@chakra-ui/react'
import Router from 'next/router'

import { addTodo, clearTodo, deferTodo } from '../../slices/todoSlice'
import {useSelector, useDispatch} from 'react-redux'

import { useGetAllTodosQuery } from '../../services/strapiAPI'

const Todo = () => {
    const initialTodos = useSelector(state => state.todos)
    const [todos, setTodos] = useState(initialTodos ? [...initialTodos] : [])
    const dispatch = useDispatch();

    return (
        <Box bg="white" w="full" boxShadow='sm' rounded='4' >
            <HStack w="full" spacing={{base: "auto", md: "30"}} justifyContent="space-between" p={5} pb={0} >
                <Heading size="md" color="gray.600" >Tasks</Heading>
                <Button colorScheme="teal" variant="solid" >New Task</Button>
            </HStack>

            <Flex w="100%" spacing="10" p="10" >
                <Checkbox rounded={true} colorScheme="green"></Checkbox>
                <Input type="text" size='md' placeholder="type a todo item and press Enter" />
            </Flex>
        </Box>
    )
}

export default Todo
