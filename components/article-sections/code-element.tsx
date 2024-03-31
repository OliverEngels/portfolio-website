import { VStack, Code } from '@chakra-ui/react';
import React from 'react';

interface CodeElementProps {
    code: string;
}

const CodeElement: React.FC<CodeElementProps> = ({ code }) => {
    const codeLines = code.split("\n").filter((line, index, array) => index < array.length - 1 ? true : line.trim() !== '');

    const getPaddingLeft = (line: string): string => {
        const tabSize = 4;
        const matchTabs = line.match(/^(\t| {4})*/);
        const indentLength = matchTabs ? matchTabs[0].length / tabSize : 0;
        return `${30 * indentLength}px`;
    };

    return (
        <VStack alignItems='flex-start' spacing={1} mb={4}>
            {codeLines.map((line, i) => (
                <Code colorScheme='teal' key={`code-line-${i}`} pl={getPaddingLeft(line)} textAlign="left">
                    {line}
                </Code>
            ))}
        </VStack>
    );
};

export default CodeElement;
