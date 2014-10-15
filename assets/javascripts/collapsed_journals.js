function showJournalDetails() {
  $(".toggle-journal-details").toggle();

  $(".journal").show();
  $(".journal .details").show();

  var spacer = $('#top-menu').height() + $('#main-menu').height();

  $('html, body').animate({
    scrollTop: $('#history').offset().top - spacer
  }, 200);
}

function hideJournalDetails() {
  $(".toggle-journal-details").toggle();

  $(".journal").hide();
  $(".journal.has-notes").show();
  $(".journal .details").hide();
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

  var hiddenCount = $(".journal.has-details").length - $(".journal.has-details.has-notes").length;

  $("#toggle-journal-details-div a.toggle-journal-details").attr("title",hiddenCount+" entries");

  $("a.issue").on("click", checkHashForLink);

  $("#show-journal-details").show();

  $(".journal").hide();
  $(".journal.has-notes").show();
  $(".journal .details").hide();

  if (checkHash(window.location)) {
    window.location.href = window.location.href;
  }
}
