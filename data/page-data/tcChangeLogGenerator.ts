import page_types from "./types";

const data = {
    year: 2023,

    // labels - assigned on top of page
    labels: [
        {
            meta: "Github",
            value: 'https://github.com/OliverEngels/notion-changelog-generator'
        },
        {
            meta: 'Language',
            value: 'Python'
        },
        {
            meta: 'Type',
            value: 'Automation Tool'
        },
    ],

    // short description - used for thumbnail
    sDesc: `A python script that generates changelogs in Notion from git commit messages.`,

    // long description - used on page
    desc: ``,

    // conent that will be displayed on the page
    content: [
        {
            type: page_types.paragraph,
            value: 'This tool automates the generation of changelogs using git commits. It allows the QA team to efficiently check the implementation of features and bug fixes by examining the commits. Similarly, the development team can quickly identify any missing elements by referring to the changelogs. Additionally, integrating this tool with platforms like Jira enables task assignments for review by the QA team, streamlining the development and testing process.'
        },
        {
            type: page_types.paragraph,
            value: `The system employs a straightforward format of add, edit, feat, and fix for git commits. Nevertheless, there is room for expansion by including the name of the feature and adding additional prefixes like chore, docs, refactor, test, or any other relevant categories. This would enhance the clarity and organization of commit messages, making it easier for the team to understand the changes and contributions in the codebase.`
        },
        {
            type: page_types.picture,
            value: 'changelist-01'
        },
    ]
};

export default data;