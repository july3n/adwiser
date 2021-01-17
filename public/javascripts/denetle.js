$("#yorumEkle").submit(function (e) {
  $(".alert.alert.-danger").hide();
  if (
    !$("input#name").val() ||
    !$("select#rating").val() ||
    !$("text-area#review").val()
  ) {
    if ($(".alert.alert-danger").length) {
      $(".alert.alert-danger").show();
    } else {
      $(this).prepend(
        '<div role="alert" class="alert alert-danger">Tüm Alanlar Gerekllidir!</div>'
      );
    }
    return false;
  }
});
