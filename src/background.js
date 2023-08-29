chrome.runtime.onInstalled.addListener(function () {
    chrome.action.setBadgeText({
        text: "OFF",
    });
});

chrome.webNavigation.onBeforeNavigate.addListener(function (data) {
    if (data) {
        console.log(data.url)
    }
});
