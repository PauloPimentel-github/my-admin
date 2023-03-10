
import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form'
import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react'

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
    error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> 
= ({ name, label, error = null, ...rest }: InputProps, ref) => {
    return (
        <FormControl>
            { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }

            <ChakraInput 
                id={name}
                name={name}
                focusBorderColor='purple.500'
                bgColor='gray.900'
                variant='filled'
                size='lg'
                rounded='md'
                _hover={{
                    bgColor: 'gray.900'
                }}
                ref={ref}
                {...rest}
            />
        </FormControl>
    )
}

export const Input = forwardRef(InputBase)