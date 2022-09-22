export interface IPie {
    name: string, value: number
}
export interface IBar {
    uv: number, name: string | number
}
export interface ITEST_DATA {
    id: number
    value: number
    date: string
    start: string
    end: string
    noseTime: string
    time: string
    barChartdata: IBar[]
    pieChartdata: IPie[]
}
export const TEST_DATA = [
    {
        id: 1,
        date: "19일 (금)",
        start: "5:21",
        end: "6:09",
        noseTime: "27분-56%",
        time: "0시간 48분",
        value: Math.floor(Math.random() * 100),
        barChartdata: Array.from({ length: 50 }, (_, i) => {
            return {
                uv: Math.floor(Math.random() * 100),
                name: i + 1,
            }
        }),
        pieChartdata: [
            { name: "Group A", value: Math.floor(Math.random() * 100) },
            { name: "Group B", value: Math.floor(Math.random() * 100) },
            { name: "Group C", value: Math.floor(Math.random() * 100) },
        ]
    },
    {
        id: 2,
        date: "20일 (토)",
        start: "5:21",
        end: "6:09",
        noseTime: "27분-56%",
        time: "1시간 47분",
        value: Math.floor(Math.random() * 100),
        barChartdata: Array.from({ length: 50 }, (_, i) => {
            return {
                uv: Math.floor(Math.random() * 100),
                name: i + 1,
            }
        }),
        pieChartdata: [
            { name: "Group A", value: Math.floor(Math.random() * 100) },
            { name: "Group B", value: Math.floor(Math.random() * 100) },
            { name: "Group C", value: Math.floor(Math.random() * 100) },
        ]
    },
    {
        id: 3,
        date: "21일 (일)",
        start: "5:21",
        end: "6:09",
        noseTime: "27분-56%",
        time: "1시간 27분",
        value: Math.floor(Math.random() * 100),
        barChartdata: Array.from({ length: 50 }, (_, i) => {
            return {
                uv: Math.floor(Math.random() * 100),
                name: i + 1,
            }
        }),
        pieChartdata: [
            { name: "Group A", value: Math.floor(Math.random() * 100) },
            { name: "Group B", value: Math.floor(Math.random() * 100) },
            { name: "Group C", value: Math.floor(Math.random() * 100) },
        ]
    },
    {
        id: 4,
        date: "22일 (월)",
        start: "5:21",
        end: "6:09",
        noseTime: "27분-56%",
        time: "7시간 12분",
        value: Math.floor(Math.random() * 100),
        barChartdata: Array.from({ length: 50 }, (_, i) => {
            return {
                uv: Math.floor(Math.random() * 100),
                name: i + 1,
            }
        }),
        pieChartdata: [
            { name: "Group A", value: Math.floor(Math.random() * 100) },
            { name: "Group B", value: Math.floor(Math.random() * 100) },
            { name: "Group C", value: Math.floor(Math.random() * 100) },
        ]
    },
    {
        id: 5,
        date: "14일 (일)",
        start: "5:21",
        end: "6:09",
        noseTime: "27분-56%",
        time: "3시간 48분",
        value: Math.floor(Math.random() * 100),
        barChartdata: Array.from({ length: 50 }, (_, i) => {
            return {
                uv: Math.floor(Math.random() * 100),
                name: i + 1,
            }
        }),
        pieChartdata: [
            { name: "Group A", value: Math.floor(Math.random() * 100) },
            { name: "Group B", value: Math.floor(Math.random() * 100) },
            { name: "Group C", value: Math.floor(Math.random() * 100) },
        ]
    },
    {
        id: 6,
        date: "14일 (일)",
        start: "5:21",
        end: "6:09",
        noseTime: "27분-56%",
        time: "3시간 48분",
        value: Math.floor(Math.random() * 100),
        barChartdata: Array.from({ length: 50 }, (_, i) => {
            return {
                uv: Math.floor(Math.random() * 100),
                name: i + 1,
            }
        }),
        pieChartdata: [
            { name: "Group A", value: Math.floor(Math.random() * 100) },
            { name: "Group B", value: Math.floor(Math.random() * 100) },
            { name: "Group C", value: Math.floor(Math.random() * 100) },
        ]
    },
    {
        id: 7,
        date: "14일 (일)",
        start: "5:21",
        end: "6:09",
        noseTime: "27분-56%",
        time: "3시간 48분",
        value: Math.floor(Math.random() * 100),
        barChartdata: Array.from({ length: 50 }, (_, i) => {
            return {
                uv: Math.floor(Math.random() * 100),
                name: i + 1,
            }
        }),
        pieChartdata: [
            { name: "Group A", value: Math.floor(Math.random() * 100) },
            { name: "Group B", value: Math.floor(Math.random() * 100) },
            { name: "Group C", value: Math.floor(Math.random() * 100) },
        ]
    },
    {
        id: 8,
        date: "14일 (일)",
        start: "5:21",
        end: "6:09",
        noseTime: "27분-56%",
        time: "3시간 48분",
        value: Math.floor(Math.random() * 100),
        barChartdata: Array.from({ length: 50 }, (_, i) => {
            return {
                uv: Math.floor(Math.random() * 100),
                name: i + 1,
            }
        }),
        pieChartdata: [
            { name: "Group A", value: Math.floor(Math.random() * 100) },
            { name: "Group B", value: Math.floor(Math.random() * 100) },
            { name: "Group C", value: Math.floor(Math.random() * 100) },
        ]
    },
];

export const PIE_DATA_PER_MONTH = Array.from({ length: 30 }, (_, i) => {
    return [
        { name: "Group A", value: Math.floor(Math.random() * 100) },
        { name: "Group B", value: Math.floor(Math.random() * 100) },
        { name: "Group C", value: Math.floor(Math.random() * 100) }
    ];
});

export interface ITrend {
    date: string
    count: number
    avg: number
    charts: IPie[][]
}

export const TREND_LIST =
    [
        {
            date: "2022년 1월", count: 14, avg: 23,
            charts: Array.from({ length: 30 }, (_, i) => {
                return Math.floor(Math.random() * 100) > 35 ? [
                    { name: "Group A", value: Math.floor(Math.random() * 100) },
                    { name: "Group B", value: Math.floor(Math.random() * 100) },
                    { name: "Group C", value: Math.floor(Math.random() * 100) }
                ] : []
            })
        },
        {
            date: "2022년 2월", count: 9, avg: 12,
            charts: Array.from({ length: 30 }, (_, i) => {
                return Math.floor(Math.random() * 100) > 35 ? [
                    { name: "Group A", value: Math.floor(Math.random() * 100) },
                    { name: "Group B", value: Math.floor(Math.random() * 100) },
                    { name: "Group C", value: Math.floor(Math.random() * 100) }
                ] : []
            })
        },
        {
            date: "2022년 3월", count: 11, avg: 13,
            charts: Array.from({ length: 30 }, (_, i) => {
                return Math.floor(Math.random() * 100) > 35 ? [
                    { name: "Group A", value: Math.floor(Math.random() * 100) },
                    { name: "Group B", value: Math.floor(Math.random() * 100) },
                    { name: "Group C", value: Math.floor(Math.random() * 100) }
                ] : []
            })
        },
        {
            date: "2022년 4월", count: 22, avg: 25,
            charts: Array.from({ length: 30 }, (_, i) => {
                return Math.floor(Math.random() * 100) > 35 ? [
                    { name: "Group A", value: Math.floor(Math.random() * 100) },
                    { name: "Group B", value: Math.floor(Math.random() * 100) },
                    { name: "Group C", value: Math.floor(Math.random() * 100) }
                ] : []
            })
        },
        {
            date: "2022년 5월", count: 17, avg: 34,
            charts: Array.from({ length: 30 }, (_, i) => {
                return Math.floor(Math.random() * 100) > 35 ? [
                    { name: "Group A", value: Math.floor(Math.random() * 100) },
                    { name: "Group B", value: Math.floor(Math.random() * 100) },
                    { name: "Group C", value: Math.floor(Math.random() * 100) }
                ] : []
            })
        },
        {
            date: "2022년 6월", count: 20, avg: 32,
            charts: Array.from({ length: 30 }, (_, i) => {
                return Math.floor(Math.random() * 100) > 35 ? [
                    { name: "Group A", value: Math.floor(Math.random() * 100) },
                    { name: "Group B", value: Math.floor(Math.random() * 100) },
                    { name: "Group C", value: Math.floor(Math.random() * 100) }
                ] : []
            })
        },
        {
            date: "2022년 7월", count: 19, avg: 27,
            charts: Array.from({ length: 30 }, (_, i) => {
                return Math.floor(Math.random() * 100) > 35 ? [
                    { name: "Group A", value: Math.floor(Math.random() * 100) },
                    { name: "Group B", value: Math.floor(Math.random() * 100) },
                    { name: "Group C", value: Math.floor(Math.random() * 100) }
                ] : []
            })
        },
        {
            date: "2022년 8월", count: 22, avg: 12,
            charts: Array.from({ length: 30 }, (_, i) => {
                return Math.floor(Math.random() * 100) > 35 ? [
                    { name: "Group A", value: Math.floor(Math.random() * 100) },
                    { name: "Group B", value: Math.floor(Math.random() * 100) },
                    { name: "Group C", value: Math.floor(Math.random() * 100) }
                ] : []
            })
        },
        {
            date: "2022년 9월", count: 15, avg: 14,
            charts: Array.from({ length: 30 }, (_, i) => {
                return Math.floor(Math.random() * 100) > 35 ? [
                    { name: "Group A", value: Math.floor(Math.random() * 100) },
                    { name: "Group B", value: Math.floor(Math.random() * 100) },
                    { name: "Group C", value: Math.floor(Math.random() * 100) }
                ] : []
            })
        }
    ];

export const getTrendData = (index: number, delay?: number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve(TREND_LIST[index])
            } catch (err: unknown) {
                reject(err)
            }
        }, delay || 1000)
    })
}