window.console.log('OK!');

var moment;

/* - */
(function () {
    'use strict';

    // ---------------------------------------------------------------------------------------
    var datedujour = document.querySelector('.date'), maintenant = moment();

    window.console.log('moment().format(\'LLLL\') : ' + maintenant.format('LLLL'));
    datedujour.innerHTML = maintenant.format('LLLL') + '.';
}());
