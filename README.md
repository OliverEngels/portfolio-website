
# Portfolio Web Page
Hi there! I'm Oliver Engels—Game Producer and Full-Stack Developer. Welcome to my portfolio site's codebase! Dive in, tailor it to your needs, and use it as you like. Questions or thoughts? I'm just an email away `contact@oliverengels.com`.

[https://www.oliverengels.com/](https://www.oliverengels.com/)

## Run

Simply using [yarn](https://yarnpkg.com/getting-started/install) in the root dir:
```sh
yarn install
```
then
```sh
yarn dev
```

## Stack

-   [Next.js](https://nextjs.org/) - React Framework
-   [Chakra UI](https://chakra-ui.com/) - Modular and accessible component library for React
-   [Three.js](https://threejs.org/) - 3D graphics in a web browser using WebGL
-   [Framer Motion](https://www.framer.com/motion/) - An animation library for React
-   [FontAwesome Free Version](https://fontawesome.com/) - Icon library and toolkit

## File Structure and Naming Convention

Project data is stored in the `data/page-data/[Project]` directory, the example.ts file in `data/example.ts` can be used as an example to create projecrts. After which you can add the project to `data/db/articles.ts`:

```
{ id: 'unique_hash', active: true, year: 24, page: 'name_of_project_in_page-data' },
```

After this you can add the project to pages:

```
{ id: ['39b73b'], sc: 'management', ids: ['34fb2b', 'unique_hash'] },
```

### Adding a new page

To add a new page you can go into header and add a new navLink:

```
{ href: '/page_name', label: 'page_label' },
```

Copy **experience.tsx** and give it a new name and random hash:

```
import PageContent from '@components/page/page-content';
import Layout from '../components/layout';
import useFetchPageData from '@components/page/use-fetch-page-data';

const Experience = () => { <--- Change Function
    const { page, isLoading } = useFetchPageData(`/api/page?id=unique_hash`); <--- Change unique_hash

    return (
        <Layout title='Experience'>
            <PageContent page={isLoading ? null : page} title='Experience' />
        </Layout>
    );
};

export default Experience; <--- Change Function
```

After that go into **pages.ts** and add another page there:

```
{
    id: 'unique_hash',
    c: 'blog', <--- page name
    scs: [
        { id: '39b73b', sc: 'management', ids: ['34fb2b'] }, <-- add page categories
        { id: '77aa54', sc: 'development', ids: ['34fb2b'] }
    ],
},
```

After which it should be visible in the header.

## Inspiration

The design is heavily inspired by Craftzdog - [https://www.craftz.dog/](https://www.craftz.dog/) - [devaslife](https://www.youtube.com/channel/UC7yZ6keOGsvERMp2HaEbbXQ)

## License

MIT License.

Use at your own discretion.
