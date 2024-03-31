import { Box, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface ExternalLinkProps {
    href: string,
    label: string,
    icon: any
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, label, icon }) => (
    <Link href={href} passHref scroll={false}>
        <Button mr={2} variant='link' size="sm" colorScheme="red" p={2}>
            <Box mr={2}>
                <FontAwesomeIcon icon={icon} />
            </Box>
            {label}
        </Button>
    </Link>
);

export default ExternalLink;