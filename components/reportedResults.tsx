import { Card, CardHeader, CardBody, CardFooter, Box, Button, Heading, Stack, Image, Text, Flex, CircularProgress, CircularProgressLabel, Spacer, HStack, VStack } from '@chakra-ui/react'
import { InfoIcon, CompletedIcon, FrameIcon } from './icons'
import React from 'react'

const ReportedResults = ({ resultsData }) => {
  console.log({ resultsData });

  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      w="450px"
      h="250px"
    >
      <CardBody>
        <Flex gap="10px">
          <Box>
            <VStack alignItems="left" spacing='34px'>
              <Box
                display="flex"
                padding="12px"
                alignItems="center"
                w="40px"
                borderRadius="26px"
                background="#D0E6D4"
              >
                <FrameIcon />
              </Box>

              <Text color="#797979" fontSize="16px">Reported Results</Text>
              {/* <Text fontSize="28px" fontWeight="400" color="#060606">{resultsData[0]?.reported}</Text> */}
            </VStack>
          </Box>

          <Spacer />
          <Box>
            <CircularProgress value={40} color='#1A932E' size="196px">
              {/* <CircularProgressLabel>{resultsData[0]?.progress}%</CircularProgressLabel> */}
            </CircularProgress>

          </Box>
        </Flex>
      </CardBody>
    </Card>
  )
}

export default ReportedResults