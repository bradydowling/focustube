chrome.storage.sync.get({
  hideFrontpage: true,
  hideSuggestions: true,
  hideAfter: true,
  hideComments: true
}, function(items) {
  var frontPageItems = document.querySelectorAll(".individual-feed");
  var suggestions = document.querySelectorAll(".watch-sidebar-gutter");
  var endscreenItems = document.querySelector(".ytp-endscreen-content");
  var comments = document.querySelector(".comment-section-renderer");

  if (!items.hideFrontpage && frontPageItems) {
    frontPageItems.forEach(function(item, key) {
      item.style.display = "block";
    });
  }
  if (!items.hideSuggestions && suggestions) {
    suggestions.forEach(function(suggestion, key) {
      suggestion.style.display = "block";
    });
  }
  if (!items.hideAfter && endscreenItems) {
    endscreenItems.forEach(function(item, key) {
      item.style.display = "block";
    });
  }
  if (!items.hideComments && comments) {
    comments.style.display = "block";
  }
});
