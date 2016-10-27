chrome.storage.sync.get({
    hideFrontpage: true,
    hideSuggestions: true,
    hideAfter: true,
    hideComments: true
  }, function(items) {
    var frontPageItems = document.querySelectorAll(".individual-feed");
    var suggestions = document.querySelectorAll(".watch-sidebar-gutter");
    var endscreenItems = document.querySelector(".ytp-endscreen-content");
    var comments = document.querySelector("#watch-discussion");

    if (items.hideFrontpage && frontPageItems) {
      console.log("should hide the front page");
      frontPageItems.forEach(function(item, key) {
        item.style.display = "none";
      });
    }
    if (items.hideSuggestions && suggestions) {
      console.log("should hide the suggestions");
      suggestions.forEach(function(suggestion, key) {
        suggestion.style.display = "none";
      });
    }
    if (items.hideAfter && endscreenItems) {
      console.log("should hide the post video");
      endscreenItems.forEach(function(item, key) {
        item.style.display = "none";
      })
    }
    if (items.hideComments && comments) {
      console.log("should hide comments");
      comments.style.display = "none";
    }
  });
