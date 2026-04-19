$("#manobra").click(function() {
    $(".manobra").show();
    $(".Montain").hide();
    $(".rua").hide();
});

$("#montain").click(function () {
    $(".manobra").hide();
    $(".rua").hide();
    $(".Montain").show();
});

$("#rua").click(function() {
    $(".manobra").hide();
    $(".rua").show();
    $(".Montain").hide();
});
