import { Flex, Box, SimpleGrid, Text, theme } from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { AuthContext } from '../contexts/AuthContext'
import { api } from '../services/api'
import { ApexOptions } from 'apexcharts'

import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false
})
  
const options: ApexOptions = {
    chart: {
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        foreColor: theme.colors.gray[500]
    },
    grid: {
        show: false,
    },
    dataLabels: {
        enabled: false
    },
    tooltip: {
        enabled: false
    },
    xaxis: {
        type: 'datetime',
        axisBorder: {
            color: theme.colors.gray[600]
        },
        axisTicks: {
            color: theme.colors.gray[600]
        },
        categories: [
            '2022-06-15T00:00:00.000Z',
            '2022-06-16T00:00:00.000Z',
            '2022-06-17T00:00:00.000Z',
            '2022-06-18T00:00:00.000Z',
            '2022-06-19T00:00:00.000Z',
            '2022-06-20T00:00:00.000Z',
            '2022-06-21T00:00:00.000Z'
        ]
    },
    fill: {
            opacity: 0.3,
            type: 'gradient',
            gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3
        }
    }
};

const series = [
    { name: 'series1', data: [1, 120, 10, 28, 61, 18, 109] }
]

export default function Dashboard() {
    const { user } = useContext(AuthContext)
    
    const [showChart, setShowChart] = useState(false);

    setTimeout(() => {
        setShowChart(true);
    }, 500);

    useEffect(() => {
        if (user) {
            api.get(`/ead-authuser/users/${user?.userId}`)
            .then(response => console.log('Login Dashboard:', response))
            .catch(error => console.log(error));
        }
        
    }, [])
    
    return (
        <Flex direction="column" h="100vh">
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                { showChart && (
                <SimpleGrid flex="1" gap="4" minChildWidth="320px">
                    <Box
                        p={["6", "8"]}
                        bg="gray.800"
                        borderRadius={8}
                        pb="4"
                    >
                        <Text fontSize="lg" mb="4">Inscritos da semana</Text>
                        <Chart options={options} series={series} type="area" height={160} />
                    </Box>
                    <Box
                        p={["6", "8"]}
                        bg="gray.800"
                        borderRadius={8}
                        pb="4"
                    >
                        <Text fontSize="lg" mb="4">Taxa de abertura</Text>
                        <Chart options={options} series={series} type="area" height={160} />
                    </Box>
                </SimpleGrid>
                )}
            </Flex>
        </Flex>
    )
}