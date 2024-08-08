import { Flex, Button, Box, Text } from '@chakra-ui/react';
import Image from 'next/image';

import React from 'react'
import Voter from '../public/maasai.jpg'
import Logo from '../public/logo.png'

const Hero = ({ handleClick }: any) => {

  return (
    <Flex width="100vw" height="100vh">
      <Box
        flex='1'
        px={10}
        overflow="hidden"
        position="relative"
        bgColor="#ffffff"
      >
        {/* <Image
          src="/bg-image.png"
          width={200}
          height={300}
          alt={''}
          style={{
            opacity: '8%',
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%'
          }}
        /> */}
        <Box mt={5}>
          <Image src={Logo} width={197} height={36} alt='logo' />
        </Box>

        <Box mt='12vw'>
          <Text
            color='white'
            fontSize={{ base: '10.2vw', md: '4.2vw' }}
            fontWeight={700}
            lineHeight='normal'
          >
            <span style={{ color: '#424242' }}>Elections <span style={{ color: '#f39253' }} >2024</span> Results</span>
          </Text>
        </Box>

        <Box mt={50}>
          <Button
            color='white'
            borderRadius='100px'
            bgColor='#0052FE'
            fontSize={{ lg: '1.2vw' }}
            p={{ md: '1.2vw 1.2vw' }}
            onClick={handleClick}
          >
            View all Results
          </Button>
        </Box>
      </Box>
      <Box display={{ base: 'none', lg: 'block' }}>
        <Image
          src={Voter}
          alt='Voter'
          style={{
            width: '600px',
            height: '100%',
          }}
        />
      </Box>

    </Flex>
  )
}

export default Hero