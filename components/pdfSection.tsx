import { SearchIcon } from '@chakra-ui/icons'
import { Box, Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'

const PdfSection = ({ref}: any) => {
  return (
    <Box
      height="100vh"
      ref={ref}
      display='flex'
      justifyContent='center'
      // alignItems='center'
      p='40px 140px 0px 140px'
    >
      <Flex p='6px 8px' w='350px' >
        <InputGroup borderRadius='12px'>
          <InputLeftElement pointerEvents='none'>
            <SearchIcon color='gray.300' />
          </InputLeftElement>
          <Input bgColor='#F5F7F8' type='tel' placeholder='Search by Polling Center' />
        </InputGroup>
      </Flex>

    </Box>
  )
}

export default PdfSection