/**
 * Created by laixiangran on 2016/1/24
 * homepage：http://www.cnblogs.com/laixiangran/
 * for Function
 */

(function(window, undefined) {

    var com = window.COM = window.COM || {};

    com.$F = (function() {
        var slice = Array.prototype.slice;
        return {
            bind: function(fun, thisp) {
                var args = slice.call(arguments, 2);
                return function() {
                    return fun.apply(thisp, args.concat(slice.call(arguments)));
                }
            }
        };
    }());
}(window));