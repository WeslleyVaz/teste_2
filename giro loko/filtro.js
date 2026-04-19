$("#manobra").click(function() {
    $(".manobra").show();
    $(".montain").hide();
    $(".rua").hide();
});

$("#montain").click(function () {
    $(".manobra").hide();
    $(".rua").hide();
    $(".montain").show();
});

$("#rua").click(function() {
    $(".manobra").hide();
    $(".rua").show();
    $(".montain").hide();
});

$("#todos").click(function () {
     $(".manobra").show();
    $(".rua").show();
    $(".montain").show();
})
