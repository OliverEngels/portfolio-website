import P from '@components/paragraph';
import Picture from '@components/article-sections/picture';
import { Title, Video } from '@components/article-sections/misc';
import WebLink from '@components/article-sections/web-link';
import CodeElement from '@components/article-sections/code-element';
import { Divider } from '@chakra-ui/react';
import { BulletPoints } from '@components/article-sections/bullet-points';
import { TextHandler } from '@components/article-sections/text-handler';
import { LabelsList } from '@components/article-sections/labels-list';

const LabelComponent = ({ value }) => <LabelsList labels={value} />;
const TitleComponent = ({ value }) => <Title>{value}</Title>;
const ParagraphComponent = ({ value }) => <P><TextHandler text={value} /></P>;
const PictureComponent = ({ value }) => <Picture src={`article_images/${value}`} alt={value} />;
const LinkComponent = ({ value }) => <WebLink link={value} title={value} />;
const VideoComponent = ({ value }) => <Video src={value} title="" />;
const CodeComponent = ({ value }) => <CodeElement code={value} />;
const DividerComponent = () => <Divider mb={4} borderColor={null} />;
const BulletComponent = ({ value }) => <BulletPoints value={value} />;

const componentMap = {
    0: LabelComponent,
    1: TitleComponent,
    2: ParagraphComponent,
    3: PictureComponent,
    4: LinkComponent,
    5: VideoComponent,
    6: CodeComponent,
    7: DividerComponent,
    8: BulletComponent
};

export default componentMap;