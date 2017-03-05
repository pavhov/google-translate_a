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

        }
    };
})();

