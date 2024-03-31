import { Tag, WrapItem, Flex, Wrap } from "@chakra-ui/react"
import { IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Link from "next/link"

interface ContactButtonProps {
    href: string,
    icon: IconDefinition,
    name: string,
    color: string
}

const ContactData = [
    { href: 'mailto:contact@oliverengels.com', icon: faEnvelope, name: 'Mail', color: 'teal' },
    { href: 'https://api.whatsapp.com/message/3DA2BXXYRSF4J1?autoload=1&app_absent=0', icon: faWhatsapp, name: 'Whatsapp', color: 'whatsapp' },
    { href: 'https://github.com/OliverEngels?tab=repositories', icon: faGithubAlt, name: 'Github', color: 'gray' },
    { href: 'https://se.linkedin.com/in/oliverengels?trk=people-guest_people_search-card', icon: faLinkedin, name: 'LinkedIn', color: 'linkedin' }
]

const ContactButton: React.FC<ContactButtonProps> = ({ href, icon, name, color }) => {
    return (
        <WrapItem key={`wrap-item-${name}`}>
            <Link href={href} passHref scroll={false} target="_blank">
                <Tag variant="outline" colorScheme={color} size="sm" cursor="pointer">
                    <Flex align="center" gap="2">
                        <FontAwesomeIcon icon={icon} />
                        {name}
                    </Flex>
                </Tag>
            </Link>
        </WrapItem>
    )
}

const ContactButtons: React.FC = () => {
    return (
        <Wrap spacing={2} justify='center' mb={2}>
            {ContactData.map((e) => (
                ContactButton(e)
            ))}
        </Wrap>
    )
}

export default ContactButtons;