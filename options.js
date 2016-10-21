// Saves options to chrome.storage
function save_options() {
  var hideFrontpage = document.getElementById('frontpage').value;
  var hideSuggestions = document.getElementById('suggestions').value;
  var hideAfter = document.getElementById('after').value;
  var hideComments = document.getElementById('comment').value;
  chrome.storage.sync.set({
    hideFrontpage: hideFrontpage,
    hideSuggestions: hideSuggestions,
    hideAfter: hideAfter,
    hideComments: hideComments
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    hideFrontpage: true,
    hideSuggestions: true,
    hideAfter: true,
    hideComments: true
  }, function(items) {
    document.getElementById('frontpage').value = items.hideFrontpage;
    document.getElementById('suggestions').value = items.hideSuggestions;
    document.getElementById('after').value = items.hideAfter;
    document.getElementById('comment').value = items.hideComments;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
