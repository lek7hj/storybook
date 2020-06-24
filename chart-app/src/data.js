export const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
        {
            label: "First dataset",
            data: [33, 53, 85, 41, 44, 65],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
        },
        {
            label: "Second dataset",
            data: [33, 25, 35, 51, 54, 76],
            fill: true,
            borderColor: "#742774",
            backgroundColor: "rgba(168, 131, 242 ,0.2)"
        }
    ]
};
export const data2 = {
    labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple'],
    datasets: [{
        label: 'Number of Votes',
        data: [12, 19, 3, 5, 5, 3],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)'


        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(153, 102, 255, 1)'


        ],
        borderWidth: 1
    }]
};
export const data3 = {
    datasets: [{
        label: "first",
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        data: [{ x: 1, y: 2, r: 5 }, { x: 3, y: 5, r: 10 }, { x: 7, y: 3, r: 15 }, { x: 9, y: 7, r: 5 }, { x: 3, y: 2, r: 30 }, { x: 10, y: 2, r: 25 }],
    }]
}