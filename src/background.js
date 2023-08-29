chrome.runtime.onInstalled.addListener(function () {
    chrome.action.setBadgeText({
        text: "OFF",
    });
});
chrome.webNavigation.onBeforeNavigate.addListener(function (data) {
    var url = data.url;
    console.log(url);
});
