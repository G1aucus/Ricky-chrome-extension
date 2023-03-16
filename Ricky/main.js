var count = 0;

chrome.tabs.onCreated.addListener(function(tab) {
  count++;
  if (count % 3 == 0) {
  chrome.tabs.create({ url: "index.html" });
    //rickpopup = window.open(url, "index.html")
  }
});

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.local.set({ "count": 0 });
});

chrome.tabs.onActivated.addListener(function() {
  chrome.storage.local.get("count", function(data) {
    var count = data.count;
    count++;
    chrome.storage.local.set({ "count": count });
  });
});

chrome.runtime.onSuspend.addListener(function() {
  chrome.storage.local.set({ "count": 0 });
});
