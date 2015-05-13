/*
 * FlyBy.js
 * https://github.com/kadajett/flyBy.js
 *
 * Copyright (c) 2015 Jeremy Stover
 * Licensed under the MIT license.
 */
(function(window) {
    "use strict";

    // internal API
    var _ = {
        version: "<%= pkg.version %>",
        internal: 'property'
    };

    // external API
    var flyBy = {
        _: _,// comment to hide internal API
        external: function() {
            return 'flyBy v'+_.version;
        }
    };

    // export flyBy
    if (typeof define === 'function' && define.amd) {
        define(function(){ return flyBy; });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = flyBy;
    } else {
        window.flyBy = flyBy;
    }

}(window));
