/**
 * Created by RYServer on 2017/7/12.
 */
fetch("/api/seller").then(function(res) {
    if (res.ok) {
        res.json().then(function(data) {
            console.log(data);
        });
    } else {
        console.log("Looks like the response wasn't perfect, got status", res.status);
    }
});

fetch("/api/goods").then(function(res) {
    if (res.ok) {
        res.json().then(function(data) {
            console.log(data);
        });
    } else {
        console.log("Looks like the response wasn't perfect, got status", res.status);
    }
});

fetch("/api/ratings").then(function(res) {
    if (res.ok) {
        res.json().then(function(data) {
            console.log(data);
        });
    } else {
        console.log("Looks like the response wasn't perfect, got status", res.status);
    }
});