/**
 * Created on : 2014.08.24., 5:26:26
 * Author     : Lajos Molnar <lajax.m@gmail.com>
 * since 1.0
 */

/**
 * This module facilitates client-side multilingual support.
 */
var translate_a = (function () {

    return {
        translate: function (sl, tl, q, n) {
            debugger
            var sln = sl;
            var stl = tl;
            sl = sl.split('-')[0];
            tl = tl.split('-')[0];
            var url = '//translate.googleapis.com/translate_a/single';
            var params = {
                client: 'gtx',
                source: 'icon',
                tk: 295405.295405,
                q: q.value,
                dt: 't',
                dj: 1,
                sl: sl,
                tl: tl,
                hl: sln

            };
            jQuery.ajax(url, {
                type: 'GET',
                data: params,
                complete: (n ? n : function (data) {
                        document.getElementById('s').innerText = data.responseJSON.sentences[0].trans
                    })
            });

            var settings = {
              "url": "https://translate.google.com/translate_a/single?client=gtx&sl=ru&tl=hy&hl=en&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&otf=2&ssel=0&tsel=0&xid=1788074&kc=1&tk=798373.695705&q=test",
              "method": "GET",
              "timeout": 0,
              "headers": {
                "authority": "translate.google.com",
                "pragma": "no-cache",
                "cache-control": "no-cache",
                "dnt": "1",
                "accept": "*/*",
                "sec-fetch-site": "same-origin",
                "sec-fetch-mode": "cors",
                "referer": "https://translate.google.com/",
                "accept-encoding": "gzip, deflate, br",
                "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,hy;q=0.6,it;q=0.5"
              },
            };

            $.ajax(settings).done(function (response) {
              console.log(response);
            });
        }
    };
})();

