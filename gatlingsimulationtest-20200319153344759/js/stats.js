var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1200",
        "ok": "784",
        "ko": "416"
    },
    "minResponseTime": {
        "total": "1006",
        "ok": "1006",
        "ko": "30004"
    },
    "maxResponseTime": {
        "total": "31003",
        "ok": "30753",
        "ko": "31003"
    },
    "meanResponseTime": {
        "total": "19896",
        "ok": "14275",
        "ko": "30489"
    },
    "standardDeviation": {
        "total": "10175",
        "ok": "8203",
        "ko": "292"
    },
    "percentiles1": {
        "total": "20549",
        "ok": "14462",
        "ko": "30480"
    },
    "percentiles2": {
        "total": "30280",
        "ok": "20281",
        "ko": "30739"
    },
    "percentiles3": {
        "total": "30846",
        "ok": "28702",
        "ko": "30958"
    },
    "percentiles4": {
        "total": "30978",
        "ok": "30103",
        "ko": "30996"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 14,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 770,
    "percentage": 64
},
    "group4": {
    "name": "failed",
    "count": 416,
    "percentage": 35
},
    "meanNumberOfRequestsPerSecond": {
        "total": "13.187",
        "ok": "8.615",
        "ko": "4.571"
    }
},
contents: {
"req_callable-deferr-5f65a": {
        type: "REQUEST",
        name: "Callable Deferred attack",
path: "Callable Deferred attack",
pathFormatted: "req_callable-deferr-5f65a",
stats: {
    "name": "Callable Deferred attack",
    "numberOfRequests": {
        "total": "1200",
        "ok": "784",
        "ko": "416"
    },
    "minResponseTime": {
        "total": "1006",
        "ok": "1006",
        "ko": "30004"
    },
    "maxResponseTime": {
        "total": "31003",
        "ok": "30753",
        "ko": "31003"
    },
    "meanResponseTime": {
        "total": "19896",
        "ok": "14275",
        "ko": "30489"
    },
    "standardDeviation": {
        "total": "10175",
        "ok": "8203",
        "ko": "292"
    },
    "percentiles1": {
        "total": "20549",
        "ok": "14462",
        "ko": "30480"
    },
    "percentiles2": {
        "total": "30280",
        "ok": "20281",
        "ko": "30739"
    },
    "percentiles3": {
        "total": "30846",
        "ok": "28702",
        "ko": "30958"
    },
    "percentiles4": {
        "total": "30978",
        "ok": "30103",
        "ko": "30996"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 14,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 770,
    "percentage": 64
},
    "group4": {
    "name": "failed",
    "count": 416,
    "percentage": 35
},
    "meanNumberOfRequestsPerSecond": {
        "total": "13.187",
        "ok": "8.615",
        "ko": "4.571"
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
