import page_types from "./types";

const data = {
    year: 2023,

    // labels - assigned on top of page
    labels: [
        {
            meta: "Platform",
            value: 'Quest 1 and 2, Vive Focus'
        },
    ],

    // short description - used for thumbnail
    sDesc: ``,

    // long description - used on page
    desc: ``,

    // conent that will be displayed on the page
    content: [
        {
            type: page_types.paragraph,
            value: `Example Paragraph`
        },
    ]
};

export default data;