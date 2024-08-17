$(document).ready(function() {
    // Cookieから本日のアクセス回数を取得
    var today = new Date().toDateString();
    var accessCount = $.cookie('accessCount');

    if (!accessCount || accessCount !== today) {
        var bar = new ProgressBar.Line(splash_bar, {
            easing: 'easeInOut',
            duration: 2000,
            strokeWidth: 2.0,
            color: '#000',
            trailWidth: 2.0,
            trailColor: '#fff',
            text: {
                style: {
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    padding: '0',
                    margin: '30px 0 0 0',
                    transform: 'translate(-50%,-50%)',
                    'font-size': '1rem',
                    color: '#000',
                },
                autoStyleContainer: false
            },
            step: function (state, bar) {
                bar.setText(Math.round(bar.value() * 100) + ' %');
            }
        });

        bar.animate(1.0, function () {
            $("#splash").delay(500).fadeOut(800);
            $.cookie('accessCount', today, { expires: 1 });
        });
    } else {
        $("#splash").css("display", "none");
    }
});