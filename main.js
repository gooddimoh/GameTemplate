$(document).ready(function () {
    var gametyperandom = "";
    var gametypeordered = "";
    var position = "";
    var timer = 0;
    var SCORERATE = 0;
    var cellsnumber = 0;
    var randomcellnumber = 0;
    var iteration = 0;
    var GAMERATE = 0;
    var randomnumber = 0;
    var wincell = 0;
    var timevisible = 0;
    var strue = 0;
    var itr = 0;
    var cellsquantity = 0;
    var randnumber = 0;
    var randnumbertmp = 0;
    var positionstrue = 0;

    var positions = [];
    var wincells = [];
    var randomnumbers = [];
    var cellposition = [];
    var wincellsfinalres = [];
    var positions = [];


    timer = $("#visibletime-res").val();

    gametyperandom = $("#gametype-select").val();
    gametypeordered = $("input[name='radio-gametype']:checked").val();
    randomnumber = $("#randomnumber").val();
    randomnumbers = $("#randomnumbers").val();
    iteration = $("#iteration").val();
    cellposition = $("#cellposition").val();


    $(document).on('input', '#visibletime-range', function () {
        $("#visibletime-res").val($(this).val());
    });
    $(document).on('input', '#timer-range', function () {
        $("#timervalue").val($(this).val());
    });
    $("#collsquantityselect").change(function () {
        cellsquantity = $("#collsquantityselect").val();
    });

    $(".gamestart").click(function () {
        gamestart();
        setscorerate();
    });

    function gamestart() {
        positions = [];
        for (var i = 1; i <= cellsquantity; i++) {
            randnumbertmp = getNumber(25);
            randnumber = randnumbertmp;
            if (randnumber !== randnumbertmp) {
                randnumber = randnumbertmp;
            }
            positions.push(randnumber);
        }

        $("input.block").css("color", "#fff");

        positions.forEach(function (element) {
            $.each($('.blocks-wrapper-block .blocks'), function () {

                if ($(this).find("input.block").val() == element) {
                    $(this).find("input.block").css("color", "#000");
                }
            });
            strue = true;
        });

        if (strue == true) {
            $.each($('.blocks-wrapper-block .blocks'), function () {
                randomnumber = getNumber(100);
                itr++;
                if (itr <= cellsquantity) {
                    wincell = randomnumber;
                    wincells.push(wincell);
                    return wincells;
                }
                $(this).find("input.block").attr("value", randomnumber);
                $(this).find("input.block").attr("placeholder", randomnumber);
            });
        }
        timergo();
        setTimeout(function () {
            $(".game-control").hide();
        }, 1000);
    }

    function timerpercnet(timer) {
        timer = timer / 100;
        return timer;
    }

    function timergo() {
        $("#timervalue").on("change", function () {
            timer = $("#timervalue").val();
        });

        var procent = timerpercnet(timer);

        setTimeout(function () {
            $("input.block").css("color", "#fff");
            procent = 100 - (procent * 100);
            alert(procent);
            if (procent <= 100) {
                $(".status").css("backgroundColor", "green");
                $(".status").css("height", "" + procent + "%");
            }
            if (procent <= 80) {
                $(".status").css("backgroundColor", "yellow");
            }
            if (procent <= 40) {
                $(".status").css("backgroundColor", "red");
            }
            $("rating").text(procent);
        }, 10);
    }

    function getNumber(maxx) {
        var min = 1,
            max = maxx,
            random;
        do {
            random = Math.floor(Math.random() * (max - min)) + min;
        } while (random === getNumber.last);

        getNumber.last = random;
        return random;
    };

    $('.blocks-wrapper-block input.block').click(function () {
        $(this).css("color", "#000");
    });

    var $result = $("#result");

    $(".blocks input.block").click(function () {
        wincellsfinalres.push($(this).val());
        wincellsfinalres.forEach(function (item, i, arr) {
            wincells.forEach(function (item, i, arr) {
                if (wincellsfinalres[i] == item) {
                    console.log(item);
                    console.log("winnumber");
                }
            });
        });
    });


    $("input.block").click(function () {
        $(this).css("color", "#000000");
    });

    var tnum = 0;
    var cnum = 0;
    var nnum = $("#timervalue").val();

    function inpercent(tnum, cnum) {
        percent = a / b * 100;
        return percent;
    }

    setTimeout(function () {
        if (nnum == cnum && nnum >= 0) {
            cnum = nnum - 1;
            $("#timervalue").val(cnum);
        }
    }, 1000);

    function isEqual(a, b) {
        // if length is not equal //
        if (a.length != b.length) {
            return "False";
        } else {
            // comapring each element of array //
            for (var i = 0; i < a.length; i++)
                if (a[i] != b[i])
                    return "False";
            return "True";
        }
    }

    function checkordered(wincells, wincellsfinalres) {
        wincells = wincells.sort();
        if (isEqual(wincells, wincellsfinalres)) {
            return true
        } else {
            return false;
        }
    }

    function checkarbitrary(wincells, wincellsfinalres) {
        if (wincells.length == wincellsfinalres.length) {

        }
    }

    function checkBackStraight(param) {
        return param + "return";
    }

    function winloose() {
        SCORERATE = SCORERATE + 3;
        alert(SCORERATE);
    }

    function setscorerate() {
        $(".btn-modal").trigger("click");
        $(".rating").text(180);
    }

    timergo();

    window.fbAsyncInit = function () {
        FB.init({
            appId: '506739016772050',
            cookie: true,
            cache: true,
            xfbml: true,
            version: 'v4.0'
        });
        $('#loginbutton,#feedbutton').removeAttr('disabled');
        FB.AppEvents.logPageView();
        FB.getLoginStatus(function (response) {
            statusChangeCallback(response);
        });
        FB.ui({
            method: 'share_open_graph',
            action_type: 'og.likes',
            quote: "TEXT TEXT",
            cache: true,
            hashtag: ["#inten"],
            action_properties: JSON.stringify({
                object: 'https://inten.ua/igra-templejti/'
            })
        }, function (response) {
            console.log(response);
        });
    };

    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    function statusChangeCallback(response) {
        console.log('statusChangeCallback');
        console.log(response);
        // The response object is returned with a status field that lets the
        // app know the current login status of the person.
        // Full docs on the response object can be found in the documentation
        // for FB.getLoginStatus().
        if (response.status === 'connected') {
            // Logged into your app and Facebook.
            console.log('Welcome!  Fetching your information.... ');
            FB.api('/me', function (response) {
                console.log('Successful login for: ' + response.name);
                document.getElementById('status').innerHTML =
                    'Thanks for logging in, ' + response.name + '!';
            });
        } else {
            // The person is not logged into your app or we are unable to tell.
            document.getElementById('status').innerHTML = 'Please log ' +
                'into this app.';
        }
    }
});