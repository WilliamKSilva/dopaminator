chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: "OFF",
  });
});

chrome.webNavigation.onBeforeNavigate.addListener((data) => {
  const url = data.url

  console.log(url)
})