import page_types from "../types";

const data = {
    year: 2024,

    // thumbnail - info
    title: 'Changelist',
    thumb: 'applicantflowtemplate',
    sDesc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit vehicula est, in consequat nisl interdum sed.`,

    // conent that will be displayed on the page
    sections: [
        {
            type: page_types.paragraph,
            value: `Integer nec finibus nisi. Nulla facilisi. Praesent tincidunt, magna sed vestibulum finibus, massa diam consequat quam, id efficitur leo elit vitae est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed sit amet consectetur libero.`
        },
        {
            type: page_types.labels,
            value: [
                {
                    meta: "Platform",
                    value: 'PC // Android // Mac'
                },
            ]
        },
        {
            type: page_types.paragraph,
            value: `Aliquam erat volutpat. In hac habitasse platea dictumst. Vivamus auctor, nisi id congue mattis, sapien mauris rutrum quam, eget facilisis justo sapien in risus. Phasellus non ex vel lectus dictum suscipit. Proin sit amet arcu orci. Duis vehicula, mauris nec auctor blandit, justo nulla aliquam massa, sit amet ultricies magna dolor eget lorem.`
        },
    ]
};

export default data;