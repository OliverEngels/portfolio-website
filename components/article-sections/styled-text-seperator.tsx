import { chakra, ChakraProps } from '@chakra-ui/react';
import React from 'react';

interface StyledTextSeparatorProps {
    value: string;
    separatorStyle?: ChakraProps;
}

export const StyledTextSeparator: React.FC<StyledTextSeparatorProps> = ({ value, separatorStyle }) => {
    if (!value) {
        return null;
    }

    const separator = '//';
    const txtArray = value.split(separator);

    const defaultStyle: ChakraProps = {
        color: 'red.400',
        fontSize: '.75rem',
        ...separatorStyle,
    };

    return (
        <>
            {txtArray.map((text, index) => (
                <React.Fragment key={`separator-${index}`}>
                    {text}
                    {index !== txtArray.length - 1 && <chakra.span {...defaultStyle}>/</chakra.span>}
                </React.Fragment>
            ))}
        </>
    );
}
