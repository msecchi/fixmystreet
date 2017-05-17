$(function(){

    Chart.defaults.global.defaultFontFamily = "'MuseoSans', 'Helmet', 'Freesans', sans-serif";
    Chart.defaults.global.defaultFontSize = 16;

    var chartAllReports = new Chart($('#chart-all-reports'), {
        type: 'line',
        data: {
            labels: [
                '2008-12-31', '2009-12-31', '2010-12-31', '2011-12-31', '2012-12-31',
                '2013-12-31', '2014-12-31', '2015-12-31', '2016-12-31', '2017-05-23'
            ],
            datasets: [{
                label: 'Problems reported',
                data: [
                    200, 400, 800, 1600, 3200,
                    6400, 12800, 25600, 51200, 102400
                ],
                fill: false,
                borderWidth: 3,
                pointRadius: [
                    0, 0, 0, 0, 0,
                    0, 0, 0, 0, 4
                ],
                pointBackgroundColor: '#F4A140',
                pointHitRadius: 0,
                pointBorderWidth: 0,
                borderColor: '#F4A140'
            }, {
                label: 'Reports marked as fixed',
                data: [
                    50, 100, 200, 400, 800,
                    1600, 3200, 6400, 12800, 25600
                ],
                fill: false,
                borderWidth: 3,
                pointRadius: [
                    0, 0, 0, 0, 0,
                    0, 0, 0, 0, 4
                ],
                pointBackgroundColor: '#62B356',
                pointHitRadius: 0,
                pointBorderWidth: 0,
                borderColor: '#62B356'
            }]
        },
        options: {
            responsive: true,
            animation: {
                duration: 0
            },
            legend: {
                display: false
            },
            tooltips: {
                enabled: false
            },
            scales: {
                xAxes: [{
                    type: 'time',
                    time: {
                        displayFormats: {
                            year: 'YYYY'
                        },
                        unit: 'year',
                        round: 'year'
                    },
                    gridLines: {
                        display: false
                    }
                }],
                yAxes: [{
                    type: "linear",
                    ticks: {
                        display: false
                    },
                    gridLines: {
                        drawBorder: false
                    }
                }]
            }
        }
    });
});