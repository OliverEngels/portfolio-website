import page_types from "./types";

const data = {
    year: 2023,

    // thumbnail - info
    title: '',
    thumb: '',
    sDesc: ``,

    // conent that will be displayed on the page
    sections: [
        {
            type: page_types.paragraph,
            value: ``
        },
        {
            type: page_types.labels,
            value: [
                {
                    meta: "Platform",
                    value: 'Quest 1 and 2, Vive Focus'
                },
            ]
        },
        {
            type: page_types.paragraph,
            value: `Example Paragraph`
        },
    ]
};

export default data;