import {
    extendTheme,
    type ThemeConfig,
} from '@chakra-ui/react'

import { mode } from '@chakra-ui/theme-tools'

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false
}
  
export const theme = extendTheme({
    config,
    styles: {
        global: props => ({
            body: {
                bg: mode('#DFE8EE', '#1F232C')(props)
            }
        })
    }
})