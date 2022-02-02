import { Box, ChakraProvider, Flex, Spacer } from '@chakra-ui/react'

import Link from 'next/link'
const apiURL =
  process.env.NODE_ENV === 'development'
    ? '/api'
    : 'https://nx-next-nest-prisma.an.r.appspot.com/api'

export function Index() {
  return (
    <ChakraProvider>
      <Flex>
        <Box>
          <Link href='/next'>
            <a>1. Next</a>
          </Link>
        </Box>
        <Spacer />
        <Box>
          <Link href='/nest'>
            <a>2. Nest</a>
          </Link>
        </Box>
      </Flex>
    </ChakraProvider>
  )
}

export default Index
