// var pubsub = {};
// (function (q) {
//
//     var topics = {}, // 回调函数存放的数组
//         subUid = -1;
//     // 发布方法
//     q.publish = function (topic, args) {
//
//         if (!topics[topic]) {
//             return false;
//         }
//
//         setTimeout(function () {
//             var subscribers = topics[topic],
//                 len = subscribers ? subscribers.length : 0;
//
//             while (len--) {
//                 subscribers[len].func(topic, args);
//             }
//         }, 0);
//
//         return true;
//
//     };
//     //订阅方法
//     q.subscribe = function (topic, func) {
//
//         if (!topics[topic]) {
//             topics[topic] = [];
//         }
//
//         var token = (++subUid).toString();
//         topics[topic].push({
//             token: token,
//             func: func
//         });
//         return token;
//     };
//     //退订方法
//     q.unsubscribe = function (token) {
//         for (var m in topics) {
//             if (topics[m]) {
//                 for (var i = 0, j = topics[m].length; i < j; i++) {
//                     if (topics[m][i].token === token) {
//                         topics[m].splice(i, 1);
//                         return token;
//                     }
//                 }
//             }
//         }
//         return false;
//     };
// } (pubsub));
//
//
// //来，订阅一个``
// pubsub.subscribe('example1', function (topics, data) {
//     console.log("123");
// });
//
// pubsub.subscribe('example1', function (topics, data) {
//     console.log("456");
// });
//
// pubsub.subscribe('example1', function (topics, data) {
//     console.log("789");
// });
//
// //发布通知
// pubsub.publish('example1', 'hello world!');

// pubsub.publish('example1', ['test', 'a', 'b', 'c']);
// pubsub.publish('example1', [{ 'color': 'blue' }, { 'text': 'hello'}]);



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
