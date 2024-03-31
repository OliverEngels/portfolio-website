interface Page {
    id: string,
    c: string,
    scs: sCs[]
}
export interface sCs {
    id: string,
    sc: string,
    ids: string[]
}

const pages: Page[] = [
    {
        id: '2607f4', // hash
        c: 'experience',
        scs: [
            { id: '39b73b', sc: 'management', ids: ['34fb2b'] },
            { id: '77aa54', sc: 'development', ids: ['34fb2b'] }
        ],
    },
];

export default pages;