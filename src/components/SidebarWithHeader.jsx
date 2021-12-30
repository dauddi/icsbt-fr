import React, {useState, useEffect} from 'react';
import { IconButton, Avatar, Box, CloseButton, Flex, HStack, VStack, Icon, useColorModeValue, Drawer, DrawerContent, Text, useDisclosure, BoxProps, FlexProps, Menu, MenuButton, MenuDivider, MenuItem, MenuList, color, } from '@chakra-ui/react';
import { FiHome,FiUsers, FiFolder, FiFileText, FiDollarSign, FiEdit, FiRotateCw, FiBarChart, FiBook, FiArchive, FiSettings, FiMenu, FiBell, FiChevronDown } from 'react-icons/fi';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import Link from 'next/link';

import { parseCookies, setCookie, destroyCookie } from "nookies"
import { clearUser, deauthenticate } from "../slices/authSlice";
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router';

const LinkItems = [
  { name: 'My Space', icon: FiHome, route: '/app' },
  { name: 'Clients', icon: FiUsers, route: '/app/clients' },
  { name: 'Projects', icon: FiFolder, route: '/app/projects' },
  { name: 'Invoices', icon: FiDollarSign, route: '/app/invoices' },
  { name: 'Proposals', icon: FiFileText, route: '/app/proposals' },
  { name: 'Contracts', icon: FiEdit, route: '/app/contracts'},
  { name: 'Subscriptions', icon: FiRotateCw, route: '/app/subscriptions'},
  { name: 'Transactions', icon: FiBarChart, route: '/app/transactions'},
  { name: 'Statements', icon: FiBook, route: '/app/statements'},
  { name: 'Receipt Box', icon: FiArchive, route: '/app/receiptsBox'},

];

const SidebarWithHeader = ({ children }) => {
  const { user: data } = useSelector(state => state.auth);
  const [user, setUser] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    setUser(data);
  }, [data])

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />

      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav user={user} dispatch={dispatch} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p={{base: 0, md: 4}}>
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Workspace
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} route={link.route} onClose={onClose} >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, route, onClose, children, ...rest }) => {
  return (
    <Link href={route + ""} style={{ textDecoration: 'none' }}>
      <Flex
        onClick={onClose}
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ user, dispatch, onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
        cursor='pointer'
        onClick={()=>Router.push('/app')}
        >
        Workspace
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}>
              <HStack spacing={{ base: '0.5', md: '1'}} >
                <Avatar
                  size={'sm'}
                  name={user?.Name}
                  src={ user?.avatar || 'https://avatars.githubusercontent.com/u/64232602?v=4' }
                />
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <Link href="/app/settings/profile">
                <MenuItem p='0.5'>
                  <HStack spacing={0} pl={2} >
                    <Avatar 
                    size={'md'}
                    src={ user?.avatar || 'https://avatars.githubusercontent.com/u/64232602?v=4' } 
                    />
                    <VStack w="full" alignItems="left" spacing={0} p="2">
                      <Text> {user?.Name} </Text>
                      <Text> {user?.email} </Text>
                    </VStack>                    
                  </HStack>
                </MenuItem>
              </Link>

              <MenuDivider />

              <Link href="/app/settings">
                <MenuItem>Settings</MenuItem>                
              </Link>

              <Link href="/app/settings/tab/payments">
                <MenuItem>Payments</MenuItem>
              </Link>
              <MenuDivider />
              <MenuItem 
              _hover={{bg: "tomato", color: "white", fontWeight:'500'}}
              onClick={() => {
                fetch("/api/auth/logout");
                dispatch(clearUser());
                dispatch(deauthenticate())
                Router.push('/app/auth/login')
              }} >Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

export default SidebarWithHeader;