var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1200",
        "ok": "1170",
        "ko": "30"
    },
    "minResponseTime": {
        "total": "1006",
        "ok": "1006",
        "ko": "60001"
    },
    "maxResponseTime": {
        "total": "60005",
        "ok": "59611",
        "ko": "60005"
    },
    "meanResponseTime": {
        "total": "31036",
        "ok": "30294",
        "ko": "60003"
    },
    "standardDeviation": {
        "total": "17456",
        "ok": "17043",
        "ko": "1"
    },
    "percentiles1": {
        "total": "31052",
        "ok": "30297",
        "ko": "60004"
    },
    "percentiles2": {
        "total": "46084",
        "ok": "44943",
        "ko": "60004"
    },
    "percentiles3": {
        "total": "58118",
        "ok": "57012",
        "ko": "60005"
    },
    "percentiles4": {
        "total": "60004",
        "ok": "59070",
        "ko": "60005"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 10,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1160,
    "percentage": 97
},
    "group4": {
    "name": "failed",
    "count": 30,
    "percentage": 3
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10",
        "ok": "9.75",
        "ko": "0.25"
    }
},
contents: {
"req_blocking-attack-cffd0": {
        type: "REQUEST",
        name: "Blocking attack",
path: "Blocking attack",
pathFormatted: "req_blocking-attack-cffd0",
stats: {
    "name": "Blocking attack",
    "numberOfRequests": {
        "total": "1200",
        "ok": "1170",
        "ko": "30"
    },
    "minResponseTime": {
        "total": "1006",
        "ok": "1006",
        "ko": "60001"
    },
    "maxResponseTime": {
        "total": "60005",
        "ok": "59611",
        "ko": "60005"
    },
    "meanResponseTime": {
        "total": "31036",
        "ok": "30294",
        "ko": "60003"
    },
    "standardDeviation": {
        "total": "17456",
        "ok": "17043",
        "ko": "1"
    },
    "percentiles1": {
        "total": "31052",
        "ok": "30297",
        "ko": "60004"
    },
    "percentiles2": {
        "total": "46084",
        "ok": "44943",
        "ko": "60004"
    },
    "percentiles3": {
        "total": "58118",
        "ok": "57012",
        "ko": "60005"
    },
    "percentiles4": {
        "total": "60004",
        "ok": "59070",
        "ko": "60005"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 10,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1160,
    "percentage": 97
},
    "group4": {
    "name": "failed",
    "count": 30,
    "percentage": 3
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10",
        "ok": "9.75",
        "ko": "0.25"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
