import { Text } from '@chakra-ui/react'

export function Logo() {
    return (
        <Text 
            fontSize={['2xl', '3xl']} 
            fontWeight='bold' 
            letterSpacing='tight'
            w='64'
        >
            myAdmin
            <Text as='span' color='yellow.500' ml='1'>.</Text>
        </Text>
    )
}