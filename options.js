// Saves options to chrome.storage.sync.
function save_options() {
  var hideFrontpage = document.getElementById('frontpage').checked;
  var hideSuggestions = document.getElementById('suggestions').checked;
  var hideAfter = document.getElementById('after').checked;
  var hideComments = document.getElementById('comment').checked;
  var status = document.getElementById('status');
  chrome.storage.sync.set({
    hideFrontpage: hideFrontpage,
    hideSuggestions: hideSuggestions,
    hideAfter: hideAfter,
    hideComments: hideComments
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Preferences saved! Reload your page for them to take effect.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {
  chrome.storage.sync.get({
    hideFrontpage: true,
    hideSuggestions: true,
    hideAfter: true,
    hideComments: true
  }, function(items) {
    document.getElementById('frontpage').checked = items.hideFrontpage;
    document.getElementById('suggestions').checked = items.hideSuggestions;
    document.getElementById('after').checked = items.hideAfter;
    document.getElementById('comment').checked = items.hideComments;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
