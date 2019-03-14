$(document).ready(function () {
    $("#faces").addClass("faces-color");
    setTimeout(() => {
        $("#square1").addClass("square-transp")
    }, 2000);
    setTimeout(() => {
        $("#square2").addClass("square-transp")
    }, 2800);
    setTimeout(() => {
        $("#square3").addClass("square-transp")
    }, 3400);
    setTimeout(() => {
        $("#square4").addClass("square-transp")
    }, 4000);
    setTimeout(() => {
        $("#logo").addClass("appearance")
    }, 1000);
    setTimeout(() => {
        $("#line").addClass("appearance")
    }, 1500);
    setTimeout(() => {
        $("#tagline").addClass("appearance")
    }, 2000);
    setTimeout(() => {
        $("#down-button").addClass("down-button-appear")
    }, 3000);

    if ($('#pref-middle').offset().top < $(window).height()+$(window).scrollTop()) setTimeout(() => {
        preferencesAppear()
    }, 1000)
});


$("#down-button").click(function () {
    if ($('#preferences').offset().top > $(window).scrollTop()) {
        $('#preferences').get(0).scrollIntoView({behavior: 'smooth', block: 'start'})
    } else if ($('#cloud').offset().top > $(window).scrollTop()) {
        $('#cloud').get(0).scrollIntoView({behavior: 'smooth', block: 'start'})
    } else if ($('#expertise').offset().top > $(window).scrollTop()) {
        $('#expertise').get(0).scrollIntoView({behavior: 'smooth', block: 'start'});
        setTimeout(() => {
            $("#down-button").removeClass("down-button-appear")
        }, 1000);
    }
});

$(window).scroll(function () {
    if ($(window).height() - $('#preferences').offset().top + $(window).scrollTop() > 380) {
        preferencesAppear();
    }
});

function preferencesAppear() {
    setTimeout(() => {
        $('#pref1-1').addClass("appearance")
    }, 100);
    setTimeout(() => {
        $('#pref1-2').addClass("appearance")
    }, 200);
    setTimeout(() => {
        $('#pref1-3').addClass("appearance")
    }, 300);
    setTimeout(() => {
        $('#pref2-1').addClass("appearance")
    }, 600);
    setTimeout(() => {
        $('#pref2-2').addClass("appearance")
    }, 700);
    setTimeout(() => {
        $('#pref2-3').addClass("appearance")
    }, 800);
    setTimeout(() => {
        $('#pref3-1').addClass("appearance")
    }, 1100);
    setTimeout(() => {
        $('#pref3-2').addClass("appearance")
    }, 1200);
    setTimeout(() => {
        $('#pref3-3').addClass("appearance")
    }, 1300);
    setTimeout(() => {
        $('#pref4-1').addClass("appearance")
    }, 1700);
    setTimeout(() => {
        $('#pref4-2').addClass("appearance")
    }, 1800);
    setTimeout(() => {
        $('#pref4-3').addClass("appearance")
    }, 1900);
    setTimeout(() => {
        $('#pref5-1').addClass("appearance")
    }, 2400);
    setTimeout(() => {
        $('#pref5-2').addClass("appearance")
    }, 2500);
    setTimeout(() => {
        $('#pref5-3').addClass("appearance")
    }, 2600);
    setTimeout(() => {
        $('#pref6-1').addClass("appearance")
    }, 3100);
    setTimeout(() => {
        $('#pref6-2').addClass("appearance")
    }, 3200);
    setTimeout(() => {
        $('#pref6-3').addClass("appearance")
    }, 3300);
}

