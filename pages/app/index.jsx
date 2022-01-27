import React, {useState, useEffect} from "react";
import { Container, Box, Stack, Flex, Spacer } from '@chakra-ui/react'
import { Welcome,  InvoiceStats, RevenueStat } from "../../src/features/homepage"
import { AppLayout } from "../../src/components";
import Router from "next/router"
import axios from 'axios';
import { authenticate, deauthenticate, addUser, clearUser } from "../../src/slices/authSlice";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const auth = useSelector(state => state.auth.isAuthenticated)
  const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch();
  const [isAuth, setIsAuth] = useState(auth);

  useEffect(() => {
    if (!isAuth) {
      Router.push('/app/auth/login')
      return;
    }
  }, [isAuth])

  return (
      <Container maxW="container.xl" >
        <Box w="100%" mt={{base: 2, md: 4}}>
          <Stack spacing={{base: 6, md: 10}} >
            <Welcome user={user} />
            {/* <GetStarted /> */}
            <Box bg='white' padding={10} boxShadow="sm" >
              <Flex justify="space-between" >
                <InvoiceStats />
                <Spacer />
                <RevenueStat />
              </Flex>
            </Box>

          </Stack>
        </Box>
      </Container>
  );
}

App.getLayout = function getLayout(page) {
  return (
    <AppLayout>
      {page}
    </AppLayout>
  )
}

// export const getServerSideProps = async (ctx) => {
//   const { tkn: token } = nookies.get(ctx);

//   const res = await axios.get(`${process.env.STRAPI_API}/users/me`, {
//     headers: {
//       contentType: 'application/json',
//       Authorization: `Bearer ${token}`,
//     }
//   })

//   console.log(res.status);

//   return {
//     props: res.status,
//    }
// }

export default App;
