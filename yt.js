var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-placeholder', {
        videoId: 'QSU5WtVFDVw?si=HDH1uYJIRlUoLRgW',
        playerVars: {
            modestbranding: 1,     // Hide YouTube logo
            rel: 0,                // Don't show related videos
            showinfo: 0,           // Hide title (deprecated but still works sometimes)
            fs: 0,                 // Disable fullscreen button
            autoplay: 1,           // Autoplay if you want
            playsinline: 1,        // Prevent fullscreen on mobile
        },
        events: {
            onReady: initialize
        }
    });

}

function initialize() {
    // Update the controls on load
    addSpans();
}
function addSpans() {
    var ps = document.querySelectorAll('#closed-captions p');
    var i = 0;
    var regex = /\S+/g;
    while (i < ps.length) {
        var str = ps[i].innerText;
        var result = str.replace(regex, function (a) {
            return "<span>" + a + "</span>";
        });
        ps[i].innerHTML = result;
        ps[i].classList.add('p' + i);
        i++;
    }
    updateTimerDisplay();
}

function updateTimerDisplay() {
    var t = player.getCurrentTime();
    t = Math.floor10(t, -1);

    // Process captions
    var i = 0;
    while (i < captions.length) {
        pTimes(i, captions[i][0], captions[i][1], t);
        i++;
    }

    // Process effects
    var i = 0;
    while (i < effects.length) {
        eTimes(i, effects[i], t);
        i++;
    }

    // Process indicators
    var i = 0;
    while (i < indicators.length) {
        iTimes(i, indicators[i], t);
        i++;
    }

    // Process background changes
    var i = 0;
    while (i < backgrounds.length) {
        bTimes(i, backgrounds[i], t);
        i++;
    }

    // Change 136.1 to the length of your own video in seconds
    if (t < 136.1) {
        setTimeout(() => {
            updateTimerDisplay();
        }, 100);
    }
}

function pTimes(num, startT, endT, curT) {
    var curP = document.querySelector('.p' + num);
    if (curT > endT && !curP.classList.contains('off')) {
        curP.classList.add('off');
    }
    if (curT < endT && curP.classList.contains('off')) {
        curP.classList.remove('off');
    }
    if (curT > startT && !curP.classList.contains('on')) {
        curP.classList.add('on');
    }
    if (curT < startT && curP.classList.contains('on')) {
        curP.classList.remove('on');
    }
}

function eTimes(num, effectTiming, curT) {
    var effectClass = 'effect' + num;
    var b = document.querySelector('.video-effects');

    // Extract start and end times
    var startTime = effectTiming[0];
    var endTime = effectTiming[1];

    // Add class when current time is between start and end times
    if (curT >= startTime && curT <= endTime && !b.classList.contains(effectClass)) {
        b.classList.add(effectClass);
    }

    // Remove class when current time is outside the range
    if ((curT < startTime || curT > endTime) && b.classList.contains(effectClass)) {
        b.classList.remove(effectClass);
    }
}

function iTimes(num, indicatorTiming, curT) {
    var indicatorClass = 'indicator' + num;
    var b = document.querySelector('.indicators');

    // Extract start and end times
    var startTime = indicatorTiming[0];
    var endTime = indicatorTiming[1];

    // Add class when current time is between start and end times
    if (curT >= startTime && curT <= endTime && !b.classList.contains(indicatorClass)) {
        b.classList.add(indicatorClass);
    }

    // Remove class when current time is outside the range
    if ((curT < startTime || curT > endTime) && b.classList.contains(indicatorClass)) {
        b.classList.remove(indicatorClass);
    }
}

function bTimes(num, backgroundTiming, curT) {
    var backgroundClass = 'background' + num;
    var body = document.getElementById('video-background');

    // Extract start and end times
    var startTime = backgroundTiming[0];
    var endTime = backgroundTiming[1];

    // Add class when current time is between start and end times
    if (curT >= startTime && curT <= endTime && !body.classList.contains(backgroundClass)) {
        body.classList.add(backgroundClass);
    }

    // Remove class when current time is outside the range
    if ((curT < startTime || curT > endTime) && body.classList.contains(backgroundClass)) {
        body.classList.remove(backgroundClass);
    }
}

(function () {
    /**
     * Decimal adjustment of a number.
     *
     * @param {String}  type  The type of adjustment.
     * @param {Number}  value The number.
     * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
     * @returns {Number} The adjusted value.
     */
    function decimalAdjust(type, value, exp) {
        // If the exp is undefined or zero...
        if (typeof exp === 'undefined' || +exp === 0) {
            return Math[type](value);
        }
        value = +value;
        exp = +exp;
        // If the value is not a number or the exp is not an integer...
        if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
            return NaN;
        }
        // Shift
        value = value.toString().split('e');
        value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
        // Shift back
        value = value.toString().split('e');
        return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
    }

    // Decimal round
    if (!Math.round10) {
        Math.round10 = function (value, exp) {
            return decimalAdjust('round', value, exp);
        };
    }
    // Decimal floor
    if (!Math.floor10) {
        Math.floor10 = function (value, exp) {
            return decimalAdjust('floor', value, exp);
        };
    }
    // Decimal ceil
    if (!Math.ceil10) {
        Math.ceil10 = function (value, exp) {
            return decimalAdjust('ceil', value, exp);
        };
    }
})();


document.getElementById('overlay').addEventListener('click', () => {
    player.playVideo();
    document.getElementById('overlay').style.display = 'none';
});