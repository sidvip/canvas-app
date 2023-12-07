export const nodes = [
    {
        id: '1',
        type: 'custom',
        position: { x: 0, y: 0 },
        data: {
            logos: {
                main: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png',
            },
            meta: {
                name: "Google",
                className: "left-card-color",
                childClassName: 'left--google-card-color'
            }
        },
    },
    {
        id: '2',
        type: 'custom',
        className: 'circle',
        data: {
            logos: {
                children: ['labelA'],
            },
            meta: {
                name: "New York Sites",
                className: "left-card-color",
                childClassName: 'left--other-card-color'
            }
        },
        position: { x: 0, y: 200 },
        // sourcePosition: Position.Right,
        // targetPosition: Position.Left,
    },
    {
        id: '3',
        type: 'custom',
        className: 'circle',
        data: {
            logos: {
                children: ['labelB'],
            },
            meta: {
                name: "New Jersey Sites",
                className: "left-card-color",
                childClassName: 'left--other-card-color'
            }
        },
        position: { x: 140, y: 200 },
    },
    {
        id: '4',
        type: 'custom',
        className: 'circle',
        data: {
            logos: {
                children: ['labelC'],
            },
            meta: {
                name: "Vermonet Sites",
                className: "left-card-color",
                childClassName: 'left--other-card-color'
            }
        },
        position: { x: 280, y: 200 },
    },
    {
        id: '5',
        type: 'custom',
        className: 'circle',
        data: {
            logos: {
                children: ['labelD'],
            },
            meta: {
                name: "Massachusetts Sites",
                className: "left-card-color",
                childClassName: 'left--other-card-color'
            }
        },
        position: { x: 420, y: 200 },
    },
    {
        id: '6',
        type: 'custom',
        className: 'circle',
        data: {
            logos: {
                children: ['label1', 'label2', 'label3', 'label4', 'label5'],
            },
            meta: {
                name: "California Sites",
                className: "left-card-color",
                childClassName: 'left--other-card-color'
            }
        },
        position: { x: 560, y: 200 },
    },
];

export const edges = [
    {
        id: 'e1-2',
        source: '1',
        target: '2',
        type: 'straight',
    },
    {
        id: 'e1-3',
        source: '1',
        target: '3',
        type: 'straight',
    },
    {
        id: 'e1-4',
        source: '1',
        target: '4',
        type: 'straight',
    },
    {
        id: 'e1-5',
        source: '1',
        target: '5',
        type: 'straight',
    },
    {
        id: 'e1-6',
        source: '1',
        target: '6',
        type: 'straight',
    }
];