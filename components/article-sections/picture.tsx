import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import styles from './picture.module.css';

interface PictureProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
}

export const Picture: React.FC<PictureProps> = ({ src, alt, width = 573, height = 322 }) => (
    <Box borderRadius="5" mb={4} overflow="hidden" position="relative">
        <div className={styles.imageContainer}>
            <Image
                src={`/images/${src}.webp`}
                alt={alt}
                width={width}
                height={height}
                blurDataURL="data:image/webp;base64,UklGRpYGAABXRUJQVlA4WAoAAAAAAAAA/wMAPwIAVlA4ICIGAACQnACdASoABEACPm02m0mkIyKhILM4QIANiWlu4XaxG/ONo9ACCnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dCM38xZUON8cHv3a06dKjKAn+2VyEpxCwGLFixYsWLFixYsWLFixYsWLFixYsUxZHBE+HJ08Y2MmBy4qYHLipgcsWW3aApSz/nYGVk48gLly5cuXLly5cuXLly5cuXLly5cuXI9YJQlDIqwObIMBiIeRmlGaRnkvZs2bNmzZs2bNmzZs2bNmzZs2bNmzY/WKyAaNAYcRfUASv/egGefmfzAmbK+6B8a13qNYtnOiRIkSJEiRIkSJEiRIkSJEiRIkSJD690Scjo3YPhbPV0JFWAPLgAqqr0+Dh21xW/9XE903Fs2bNmzZs2bNmzZs2bNmzZs2bNmzZo0UGmTk6TKycbEtj+dOnTp06dOnTp06dOnTp06dOnTp06bKKDTJydJlZONexbOdEiRIkSJEiRIkSJEiRIkSJEiRIkSH17olk5OkysnGvYuLU2bNmzZs2bNmzZs2bNmzZs2bNmzZsfrFXWZbpG2J4j3lxUwOUp3rPIlYrFs50SJEiRIkSJEiRIkSJEiRIkSJEiRIfXuiTmq3Gf+XFTA5boOFp6eihOk48ePHjx48ePHjx48ePHjx48ePHjwxAerhgUiDlMG3Y6lNmlaj/y4qYHLipfnTD3wCBKbVBGxTbj0A/v379+/fv379+/fv379+/fv379+/fYWh7TqbxfYTQ1xnUGQyGO1aT3qiijxiEKkrj86JEiRIkSJEiRIkSJEiRIkSJEiRHsfyJ54oLasauOiPQ0Efm2y90SJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEegAAP7/cZkAAAAAAAAAAAAAAAAAAAAAAAAAAVPHZkuW7zW/I0AjjIKnNOp9lzbPCvhG2ILllDGACeH710+TbHC2HFyTPaha/EahLJ6x/DiIO0IBdM/+OdvmjhqA9TDZZe/Az/uDwhuApQDMCApbRS/8fFI47KTW22epOrN2T/jjUbN4bzt8mRJ2FYJB8MRFWnRIrVyFlH8D6AA4/FZqDG4oVZ8saXHNj2YRrAyBcXjetB4hEoDk6S+PFcJ3kiTkW9KYCIRu6ZKp4AE1wcOYXUUApCo5DggFhJYHJSY2FAmbg/mAK3Z3XejwYyyDj5QA0/rApuh1Ejdp90HdrHdTLJzwLwDdBoWrDmAyAAQZ1WHkFxG6jYDTNQW0AyHF6hReJ+7KAAAAAAAAAAAAAAAAAAAAAAAAAAAAUFNBSU4AAAA4QklNA+0AAAAAABAASAAAAAEAAQBIAAAAAQABOEJJTQQoAAAAAAAMAAAAAj/wAAAAAAAAOEJJTQRDAAAAAAAOUGJlVwEQAAYAUAAAAAA"
                placeholder="blur"
                loading="lazy"
            />
        </div>
    </Box>
);

export default Picture;
