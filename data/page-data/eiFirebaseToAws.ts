import page_types from "./types";

const data = {
    year: 2023,

    // labels - assigned on top of page
    labels: [
        {
            meta: "Platform",
            value: 'Google Firebase // Amazon Web Services (China)'
        },
        {
            meta: 'Contribution',
            value: 'Producer'
        },
        {
            meta: 'Duration',
            value: '5 Months'
        }
    ],

    // short description - used for thumbnail
    sDesc: `Migrating a game's backend infrastructure from Google Firebase to Amazon Web Services (AWS).`,

    // long description - used on page
    desc: `As part of my contract with Infinity Labs, I collaborated with a team of Backend and Frontend developers to strategize and execute the migration of an existing backend from Google Firebase to a 
    Chinese version hosted on AWS. The goal was to cater to the specific requirements of the Chinese market. Working closely with a small group of developers, we successfully implemented the new 
    backend infrastructure.`,

    // conent that will be displayed on the page
    content: [
        {
            type: page_types.title,
            value: 'My Responsibilities'
        },
        {
            type: page_types.list,
            value: `Helping the team with creating a high level plan // Starting from the high-level objectives, I created a detailed low-level planning // Was responsible for developing a project timeline and maintaining it, updating it whenever changes occurred // 
            Closely monitored and tracked modifications made to the planning throughout the project's duration //  Maintained communication with stakeholders by providing regular updates on the project's planning changes and its ongoing progress //
            Kept track of hourly budgets during the project's execution // Handled negotiations related to extensions, extra work hours, and other factors that could potentially impact the project's budget // Conducted a analysis of potential risks and actively tracked their status //
            Help the team by providing guidance on communication strategies, informing the team with best practices and approaches // Monitored and assessed team morale, taking proactive steps to adjust and uplift it when necessary`
        },
    ]
};

export default data;
