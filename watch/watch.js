var watch = (function() {
    function watch() {
        this.arr = {};
        this.num = 0;
        //发布
        this.apply = function(ename, data) {
            if (!this.arr[ename]) {
                return false;
            }
            var len = this.arr[ename] ? this.arr[ename].length : 0;
            for (var i = 0; i < len; i++) {
                this.arr[ename][i].fun(ename,data);
            }

        }

        ///订阅
        this.add = function(ename, fun) {
            if (!this.arr[ename]) {
                this.arr[ename] = [];
            }
            var dobj = {
                num: this.num++,
                fun: fun
            }
            this.arr[ename].push(dobj);

            return this.num - 1;

        };

        //退订
        this.remove = function(ename, num) {
            if (!this.arr[ename]) {
                return false;
            }
            for (var i = 0; i < this.arr[ename].length; i++) {
                if (this.arr[ename][i].num === num) {
                    this.arr[ename].splice(i, 1);
                    return true;
                }
            }

        }


    }

    return new watch();
})();

var num1 = watch.add("test", function(ename,data) {
    console.log(ename);
})
var num2 = watch.add("test", function(ename,data) {
    console.log(ename);
    console.log(data);
})
var num3 = watch.add("test", function(ename,data) {
    console.log(ename);
    console.log(data);
})


console.log(watch.remove("test", num3));




watch.apply("test", "hellow world");
