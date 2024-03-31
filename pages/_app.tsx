import { Box } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import Header from '../components/header'
import Footer from '../components/footer'
import Chakra from '../components/chakra'
import { usePathname } from "next/navigation";
import { container } from '../components/animation-setup'
import { useEffect, useState } from 'react'

function App({ Component, pageProps, router }) {
    const pathname = usePathname();
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        setIsAnimating(false);
        setTimeout(() => {
            setIsAnimating(true);
        }, 700);
    }, [router.pathname]);

    return (
        <Chakra cookies={pageProps.cookies}>
            <Header />

            <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
                <motion.div
                    key={pathname}
                    initial='initial'
                    animate={isAnimating ? 'animate' : 'initial'}
                    exit='exit'
                    variants={container}
                >
                    <Box textAlign='center' pt={70}>
                        <Component {...pageProps} key={router.asPath} />
                    </Box>
                    <Footer />
                </motion.div>
            </AnimatePresence>

        </Chakra>
    )
}

export default App
