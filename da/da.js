var da = (function() {
    var exten = { //扩展用对象

    };

    function core(select) {
        var dom = document.querySelector(select);
        var $fn = new fn();
        exten.__proto__ = dom.__proto__;
        $fn.__proto__ = exten;
        dom.__proto__ = $fn;
        return dom;

    }

    core.extend = function(name, fn) { //扩展方法
        exten[name] = fn;
    }



    function fn() {
        this.text = function() {
            if (arguments.length == 0) {
                return this.innerText;
            }
            this.innerText = arguments[0];
        }

        this.html = function() {
            if (arguments.length == 0) {
                return this.innerHTML;
            }
            this.innerHTML = arguments[0];
        }
        ,

    }

    return core;
})();
