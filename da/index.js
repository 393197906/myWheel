window.onload = function(){
    console.log(da("h1").html());
}
var da = (function() {
    function core(select) {
        var dom = document.querySelector(select);
        var $fn = new fn();
        $fn.__proto__ = dom.__proto__;
        dom.__proto__ = $fn;
        return dom;

    }

    function fn() {
        this.text = function() {
            if(arguments.length ==0){
                return this.innerText;
            }
            this.innerText = arguments[0];
        }

        this.html = function(){
            if(arguments.length ==0){
                return this.innerHTML;
            }
            this.innerHTML = arguments[0];
        }
    }

    return core;
})();
