import { Alert as AlertChakra, AlertIcon, AlertDescription, AlertStatus } from '@chakra-ui/react'
import { ErrorMessage } from '@hookform/error-message'
import { FieldErrors } from 'react-hook-form';

interface AlertProps {
    status: AlertStatus;
    errors?: FieldErrors;
    name: string;
}

export function Alert({ status, errors, name }: AlertProps) {
    return (
        <AlertChakra rounded='md' bgColor='red.300' color='red.700' status={status}>
            <AlertIcon />
            <AlertDescription>
                <ErrorMessage errors = { errors } name={name} />
            </AlertDescription>
        </AlertChakra>
    )
}