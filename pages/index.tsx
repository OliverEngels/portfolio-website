import { Box, Container } from '@chakra-ui/react'
import Layout from '@components/layout'
import LifeHistorySection from '@components/page/life-history-section'
import LatestArticlesSection from '@components/page/latest-acticle-section'
import IntroductionSection from '@components/page/introduction-section'
import RecreationSection from '@components/page/recreation-section'
import ThreeCanvas from '@components/cube/three-canvas'

const Home = () => (
    <Layout title='Homepage'>
        <Container>
            <Box height="450px" width='100%' top="30px" position="absolute" left='0px'>
                <ThreeCanvas />
            </Box>
            <IntroductionSection />
            <RecreationSection />
            <LifeHistorySection />
            <LatestArticlesSection />
        </Container>
    </Layout>
)

export default Home;