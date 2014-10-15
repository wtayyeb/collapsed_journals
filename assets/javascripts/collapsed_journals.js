function showJournalDetails() {
  var scrollSpacer = $('#top-menu').height() + $('#main-menu').height();

  $(".toggle-journal-details").toggle();
  $(".journal.has-details, .journal .details").show();

  $('html, body').animate({
    scrollTop: $('#history').offset().top - scrollSpacer
  }, 200);
}

function hideJournalDetails() {
  $(".toggle-journal-details").toggle();

  $(".journal.has-details, .journal .details").not(".has-notes").hide();
}

function checkHash(location) {
  var note_id = location.hash.substr(1);
  if (note_id == "") {
    return false;
  }

  var note_node = document.getElementById(note_id);

  if (note_node) {
    $(note_node.parentNode).show();
    $(note_node.childNodes).show();
    return true;
  } else {
    return false;
  }
}

function checkHashForLink() {
  checkHash(this);
}

function initializeVisibility() {
  $("#history h3").first().append($("#toggle-journal-details-div"));

  var hiddenCount = $(".journal.has-details").not(".has-notes").length;

  $("#toggle-journal-details-div a.toggle-journal-details").attr("title",hiddenCount+" journal detail entries");

  $("a.issue").on("click", checkHashForLink);

  $(".toggle-journal-details").toggle();
  hideJournalDetails();

  if (checkHash(window.location)) {
    window.location.href = window.location.href;
  }
}
