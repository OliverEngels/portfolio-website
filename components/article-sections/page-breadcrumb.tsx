import { Breadcrumb, BreadcrumbItem, Button, Text, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link'
import { useRouter } from 'next/router';

interface PageBreadcrumbProps {
    children: React.ReactNode;
    page?: string;
}

export const PageBreadcrumb: React.FC<PageBreadcrumbProps> = ({ children, page = 'experience' }) => {
    const router = useRouter();
    const buttonColor = useColorModeValue('blue.400', 'red.300');
    const capitalizedPage = page.charAt(0).toUpperCase() + page.slice(1);

    const goBack = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        router.back();
    };

    return (
        <Breadcrumb>
            <BreadcrumbItem>
                <Link href='#' onClick={goBack} scroll={false}>
                    <Button color={buttonColor} size='sm' variant='link'>
                        <Text as='samp' fontWeight={100}>
                            {capitalizedPage}
                        </Text>
                    </Button>
                </Link>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <Text fontSize={['sm', 'md', 'lg', '2xl']} letterSpacing={2}>
                    {children}
                </Text>
            </BreadcrumbItem>
        </Breadcrumb>
    );
};
