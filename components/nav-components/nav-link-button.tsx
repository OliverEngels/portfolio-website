import { Button, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavLinkButtonProps {
    href: string;
    color?: string;
    children: React.ReactNode;
}

const NavLinkButton: React.FC<NavLinkButtonProps> = ({ href, color, children }) => {
    const router = useRouter();
    const isActive = router.pathname == href;

    function getTextDecoration(currentPath, path) {
        return currentPath === path ? "underline" : undefined;
    }

    function getTextColor(isActive) {
        return isActive ? "#000" : undefined;
    }

    return (
        <Link href={href} passHref scroll={false}>
            <Button mr={6} size='sm' variant='link' backgroundColor={isActive ? "red.300" : undefined} p={2} color={color}>
                <Text as='samp' textDecoration={getTextDecoration(router.pathname, href)} color={getTextColor(isActive)}>
                    {children}
                </Text>
            </Button>
        </Link>
    );
};

export default NavLinkButton;