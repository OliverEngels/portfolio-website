
# Oliver's Homepage
Hello, I'm Oliver Engels, a Game Producer and Full-Stack Developer. Welcome to my portfolio website example repository. Please feel free to download, customize, and use it at your own discretion. If you have any questions or inquiries, don't hesitate to reach out to me.

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
-   [Framer Motion](https://www.framer.com/motion/) - An animation library for React
-   [FontAwesome Free Version](https://fontawesome.com/) - Icon library and toolkit

## File Structure and Naming Convention

Project data is stored in the `data/page-data/[Project]` directory, following a straightforward naming convention:

* The first letter designates its placement as either 'Experience' or 'Tinkering.'
* The second letter is user-adjustable and can be modified through the filter settings in the ArticleGrid element.

### Example:

File: `eiFirebaseToAws.ts`
Code: 
```ts
<ArticleGrid title="Backend" filter="i" />
```

To showcase the project on the Experience page, assign it the title 'Backend.'

You can set the thumbnail image for the project in the `public/images/thumbnails` directory. Simply use the project's name, excluding the first two letters. For example, in this case, the thumbnail image should be named `firebasetoaws`, all lower caps.

If you wish to include additional images on the project page, you can place them in the `public/images/article_images` directory. These images can then be referenced in the project object, this is the `eiFirebaseToAws.ts` file in this case. Files can be added to `public/files` and referenced in the same way.

## Inspiration

The design is heavily inspired by Craftzdog - [https://www.craftz.dog/](https://www.craftz.dog/) - [devaslife](https://www.youtube.com/channel/UC7yZ6keOGsvERMp2HaEbbXQ)

## License

MIT License.

Use at your own discretion.
