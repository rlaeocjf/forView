export interface ITEST_DATA {
    id: number
    value: number
    date: string
    start: string
    end: string
    noseTime: string
    time: string
    barChartdata: { uv: number, name: string | number }[]
    pieChartdata: { name: string, value: number }[]
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