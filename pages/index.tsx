import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { TableContainer, Table, Thead, Tr, Th, Tbody, Td, Text, Skeleton, Link, Box, Flex, Button, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons';
import Select from 'react-select'
import Hero from '@/components/hero';
import { useConstituency, useCounty, useResults, useResultsSummary, useWard } from '@/lib/hooks';
import { filterStyles } from '@/components/filterStyles';
import ReportedResults from '@/components/reportedResults';


const inter = Inter({ subsets: ['latin'] })

const defaultFilters = {
  county_name: null,
  constituency_name: null,
  ward_name: null
};


export default function Home() {
  const ref = useRef<null | HTMLDivElement>(null);
  // const [queryParams, setQueryParams] = useState('')
  const { data, isLoading } = useResults()
  const { summaryData } = useResultsSummary()
  // const [filters, setFilters] = useState(defaultFilters);
  // const { county, countyLoading } = useCounty()
  // const { constituency, constituencyLoading } = useConstituency(filters.county_name && `?county_name=${filters.county_name.value}`)
  // const { ward, wardLoading } = useWard(filters.constituency_name && `?constituency_name=${filters.constituency_name.value}`)



  // const countyOptions = county?.map(
  //   ({ county_name }) => ({
  //     value: county_name,
  //     label: county_name
  //   })
  // );

  // const constituencyOptions = constituency?.map(
  //   ({ constituency_name }) => ({
  //     value: constituency_name,
  //     label: constituency_name
  //   })
  // );
  // const wardOptions = ward?.map(
  //   ({ ward_name }) => ({
  //     value: ward_name,
  //     label: ward_name
  //   })
  // );



  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {

  })

  // const onChange = ({ key, value }) => {
  //   if (queryParams) {
  //     setQueryParams(`${queryParams}&${key}=${value?.value}`)
  //   } else {
  //     setQueryParams(`?${key}=${value?.value}`)
  //   }

  //   setFilters({ ...filters, [key]: value });
  // };

  // const onSearch = (e: any) => {
  //   setQueryParams(`?search=${e}`)


  //   if (queryParams) {
  //     setQueryParams(`${queryParams}&search=${e}`)
  //   } else {
  //     setQueryParams(`?search=${e}`)
  //   }
  // };

  // const clearFilters = () => {
  //   setFilters(defaultFilters);
  //   setQueryParams('')
  // }

  return (
    <>
      <Head>
        <title>Zanzibar Elections</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero handleClick={handleClick} />
        <Box ref={ref}>
          <Box
            bgColor="#f39253" h="65px"
            p={{ base: '0px 5px 0px 5px', lg: '0px 50px' }}
            mb={7}
          >
            <Flex alignItems="center" justifyContent="space-between">
              <Flex alignItems="center" justifyContent="space-between"  >
                <Image src='/logo.png' width={60} height={60} alt='logo' />
                <Text color="#424242" fontSize="20px" ml={3} fontWeight="bold">
                  {`Elections 2024 Results`}
                </Text>
              </Flex>

              <Box>
                <Select
                  // options={newOptions}
                  styles={filterStyles}
                  instanceId="long-value-select"
                  defaultValue={{ label: "National Elections", value: `national` }}
                  // onChange={(filter) => {
                  //   onChange({ key: "constituency_name", value: filter });
                  // }}
                />
              </Box>
            </Flex>
          </Box>

          <Box
            height="100vh"
            // ref={ref}
            p={{ base: '0px 5px 0px 5px', lg: '0px 140px 0px 140px' }}
          >
            {/* <Flex
            gap={2}
            pt='30px'
            direction={{ base: 'column', md: 'row' }}
            position='sticky' top={0}
            bgColor='white'
            >
            <InputGroup >
              <InputLeftElement pointerEvents='none'>
                <SearchIcon color='gray.300' />
              </InputLeftElement>
              <Input
                borderRadius='12px'
                h='35px'
                bgColor='#F5F7F8'
                placeholder='Search by Polling Center'
                onChange={(e) => onSearch(e.target.value)}
              />
            </InputGroup>
            <Select
              options={countyOptions}
              styles={filterStyles}
              isLoading={countyLoading}
              instanceId="long-value-select"
              value={filters.county_name}
              placeholder="County"
              onChange={(filter) => {
                onChange({ key: "county_name", value: filter });
              }}
            />
            <Select
              options={constituencyOptions}
              styles={filterStyles}
              isLoading={constituencyLoading}
              instanceId="long-value-select"
              value={filters.constituency_name}
              placeholder="Constituency"
              isDisabled={!filters.county_name}
              onChange={(filter) => {
                onChange({ key: "constituency_name", value: filter });
              }}
            />

            <Select
              options={wardOptions}
              styles={filterStyles}
              isLoading={wardLoading}
              instanceId="long-value-select"
              value={filters.ward_name}
              placeholder="Ward"
              isDisabled={!filters.constituency_name}
              onChange={(filter) => {
                onChange({ key: "ward_name", value: filter });
              }}
            />
            <Button onClick={clearFilters} variant='ghost' color='#0052FE'>Reset</Button>

          </Flex> */}
            <Box>

              {/* {data?.map((result: any, index) => (
              <Flex
                alignItems='center'
                my={4}
                borderTop='1px solid #EDEDED'
                borderBottom='1px solid #EDEDED'
                py={19}
                key={index}
              >
                <Flex >
                  <Image src="/pdf-icon.svg" alt="Vercel Logo" width={57} height={16} />
                  <VStack alignItems='left' ml={2}>
                    <Text fontWeight={700} fontSize={24}>{result.polling_center_name}</Text>
                    <Text color='#B4B4B4' fontSize={16}>{result.polling_center_code}</Text>
                  </VStack>
                </Flex>
                <Spacer />
                <Link
                  border='1px solid #0052FE'
                  borderRadius={100}
                  color='#0052FE'
                  fontSize={20}
                  fontWeight={700}
                  bgColor='white'
                  p='11px 21px'
                  href={result.report_page_link}
                  isExternal
                >
                  View Results
                </Link>
              </Flex>
            ))} */}

              <Flex>
                <TableContainer
                  flex={1} mr={8}
                  bgColor='white'
                  p={4}
                  borderRadius="13px"
                >

                  <Table variant='simple'>
                    <Thead>
                      <Tr>
                        <Th color="#B5B7C0">Polling Center</Th>
                        <Th isNumeric color="#B5B7C0">Polling Center Code</Th>
                        <Th isNumeric color="#B5B7C0">Results</Th>
                        <Th isNumeric color="#B5B7C0">Winners Results</Th>
                      </Tr>
                    </Thead>
                    <Tbody>

                      {isLoading ? Array(30).fill({}).map((_item, index) => (
                        <Tr key={index}>
                          <Td><Skeleton height='20px' /></Td>
                          <Td><Skeleton height='20px' /></Td>
                          <Td><Skeleton height='20px' /></Td>
                          <Td><Skeleton height='20px' /></Td>
                          <Td><Skeleton height='20px' /></Td>
                        </Tr>
                      )) :
                        data.map((item) => (
                          <Tr key={item.polling_center_code}>
                            <Td>{item.polling_center_name}</Td>
                            <Td isNumeric>{item.polling_center_code}</Td>
                            <Td isNumeric color="#f39253" fontWeight="600">
                              <Link
                                href={item.report_page_link}
                                isExternal
                              >
                                View
                              </Link>
                            </Td>
                            <Td isNumeric color="#f39253" fontWeight="600">
                              <Link
                                href={item.results_page_link}
                                isExternal
                              >
                                View
                              </Link>
                            </Td>
                          </Tr>
                        ))
                      }
                    </Tbody>
                  </Table>
                </TableContainer>
                {/* <Box display={{ base: "none", md: "block" }}>
                <ReportedResults resultsData={summaryData} />
              </Box> */}
              </Flex>

            </Box>

          </Box>
        </Box>


      </main>
    </>
  )
}
