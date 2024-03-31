import { IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

interface MobileMenuButtonProps {
    navLinks: { href: string, label: string }[]
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ navLinks }) => (
    <Menu>
        <MenuButton as={IconButton} icon={<FontAwesomeIcon icon={faBars} />} display={{ base: 'block', md: 'none' }} height={35}
            width={35} aria-label="Options" />
        <MenuList>
            {navLinks.concat({ href: 'https://github.com/OliverEngels/portfolio-website', label: 'Source' }).map((link) => (
                <Link key={link.href} href={link.href} passHref>
                    <MenuItem>{link.label}</MenuItem>
                </Link>
            ))}
        </MenuList>
    </Menu>
)

export default MobileMenuButton;