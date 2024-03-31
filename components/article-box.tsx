import { Box, GridItem, Text, Grid, Heading, Badge } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import PropTypes from 'prop-types';
import { StyledTextSeparator } from './article-sections/styled-text-seperator'

const blurDtaUrlImage = 'data:image/webp;base64,UklGRpYGAABXRUJQVlA4WAoAAAAAAAAA/wMAPwIAVlA4ICIGAACQnACdASoABEACPm02m0mkIyKhILM4QIANiWlu4XaxG/ONo9ACCnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dCM38xZUON8cHv3a06dKjKAn+2VyEpxCwGLFixYsWLFixYsWLFixYsWLFixYsUxZHBE+HJ08Y2MmBy4qYHLipgcsWW3aApSz/nYGVk48gLly5cuXLly5cuXLly5cuXLly5cuXI9YJQlDIqwObIMBiIeRmlGaRnkvZs2bNmzZs2bNmzZs2bNmzZs2bNmzY/WKyAaNAYcRfUASv/egGefmfzAmbK+6B8a13qNYtnOiRIkSJEiRIkSJEiRIkSJEiRIkSJD690Scjo3YPhbPV0JFWAPLgAqqr0+Dh21xW/9XE903Fs2bNmzZs2bNmzZs2bNmzZs2bNmzZo0UGmTk6TKycbEtj+dOnTp06dOnTp06dOnTp06dOnTp06bKKDTJydJlZONexbOdEiRIkSJEiRIkSJEiRIkSJEiRIkSH17olk5OkysnGvYuLU2bNmzZs2bNmzZs2bNmzZs2bNmzZsfrFXWZbpG2J4j3lxUwOUp3rPIlYrFs50SJEiRIkSJEiRIkSJEiRIkSJEiRIfXuiTmq3Gf+XFTA5boOFp6eihOk48ePHjx48ePHjx48ePHjx48ePHjwxAerhgUiDlMG3Y6lNmlaj/y4qYHLipfnTD3wCBKbVBGxTbj0A/v379+/fv379+/fv379+/fv379+/fYWh7TqbxfYTQ1xnUGQyGO1aT3qiijxiEKkrj86JEiRIkSJEiRIkSJEiRIkSJEiRHsfyJ54oLasauOiPQ0Efm2y90SJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEegAAP7/cZkAAAAAAAAAAAAAAAAAAAAAAAAAAVPHZkuW7zW/I0AjjIKnNOp9lzbPCvhG2ILllDGACeH710+TbHC2HFyTPaha/EahLJ6x/DiIO0IBdM/+OdvmjhqA9TDZZe/Az/uDwhuApQDMCApbRS/8fFI47KTW22epOrN2T/jjUbN4bzt8mRJ2FYJB8MRFWnRIrVyFlH8D6AA4/FZqDG4oVZ8saXHNj2YRrAyBcXjetB4hEoDk6S+PFcJ3kiTkW9KYCIRu6ZKp4AE1wcOYXUUApCo5DggFhJYHJSY2FAmbg/mAK3Z3XejwYyyDj5QA0/rApuh1Ejdp90HdrHdTLJzwLwDdBoWrDmAyAAQZ1WHkFxG6jYDTNQW0AyHF6hReJ+7KAAAAAAAAAAAAAAAAAAAAAAAAAAAAUFNBSU4AAAA4QklNA+0AAAAAABAASAAAAAEAAQBIAAAAAQABOEJJTQQoAAAAAAAMAAAAAj/wAAAAAAAAOEJJTQRDAAAAAAAOUGJlVwEQAAYAUAAAAAA=';

const ArticleBox = ({ data }) => {
    return (
        <Link href={`/article?id=${data.id}`} passHref scroll={false}>
            <Box overflow="hidden" position="relative">
                {data.contribution && (
                    <Box sx={{ position: 'absolute', zIndex: '4', left: '5px' }}>
                        <Badge backgroundColor="rgba(0,0,0,.75)" fontSize=".6rem" color="#FFF">
                            <StyledTextSeparator value={data.contribution} />
                        </Badge>
                    </Box>
                )}
                <Grid>
                    <GridItem>
                        <Box cursor='pointer' position='relative' borderRadius={6} overflow='hidden' _hover={{ '& > img': { transform: 'scale(1.05)' } }}>
                            <Image
                                src={`/images/thumbnails/${data.thumb}.webp`}
                                width={600}
                                height={400}
                                blurDataURL={blurDtaUrlImage}
                                placeholder='blur'
                                alt={`${data.title} Thumbnail`}
                                loading="lazy"
                                style={{ transition: "transform .1s ease-in-out" }}
                            />
                        </Box>
                    </GridItem>
                    <GridItem mt={3}>
                        <Heading textAlign="left" as='h4' size='sm' fontWeight='600' fontSize={{ base: '1.15rem', sm: '1rem' }} mb={1}>
                            {data.title}
                        </Heading>
                    </GridItem>
                    <GridItem color={'gray.500'}>
                        <Text fontSize='.80rem' noOfLines={[1, 2, 3]} textAlign='left'>
                            {data.shortDescription}
                        </Text>
                    </GridItem>
                </Grid>
            </Box>
        </Link>
    )
}

ArticleBox.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        thumb: PropTypes.string,
        title: PropTypes.string.isRequired,
        shortDescription: PropTypes.string,
        contribution: PropTypes.string,
    }).isRequired,
};

export default ArticleBox;