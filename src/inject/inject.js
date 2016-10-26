chrome.storage.sync.get({
    hideFrontpage,
    hideSuggestions,
    hideAfter,
    hideComments
  }, function(items) {
    if (items.hideFrontpage) {
      console.log("should hide the front page");
      var frontPageItems = document.querySelectorAll(".individual-feed");
      frontPageItems.forEach(function(key, item) {
        item.class += "hideMe";
      });
    }
    if (items.hideSuggestions) {
      console.log("should hide the suggestions");
      var suggestions = document.querySelectorAll(".watch-sidebar-gutter");
      suggestions.forEach(function(key, suggestion) {
        suggestion.class += "hideMe";
      });
    }
    if (items.hideAfter) {
      console.log("should hide the post video");
      var endscreenItems = document.querySelector(".ytp-endscreen-content");
      endscreenItems.forEach(function(key, item) {
        item.class += "hideMe";
      })
    }
    if (items.hideComments) {
      console.log("should hide the comments");
      var comments = document.querySelector("#watch-discussion");
      comments.class += "hideMe";
    }
  });
