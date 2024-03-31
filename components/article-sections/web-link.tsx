import { Link, useColorModeValue } from '@chakra-ui/react';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface WebLinkProps {
    link: string;
    title?: string;
}

const WebLink: React.FC<WebLinkProps> = ({ link, title }) => (
    <Link
        href={link}
        color={useColorModeValue('blue.400', 'red.300')}
        isExternal
        mb={4}
    >
        {title || link} <FontAwesomeIcon icon={faUpRightFromSquare} style={{ marginLeft: '5px' }} />
    </Link>
);

export default WebLink;
