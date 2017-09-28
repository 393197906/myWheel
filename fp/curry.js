/**
 * 柯里化
 * @param {*} fn 
 */
const curry = (fn) => {
    const { length } = fn;
    let arg = [];
    return function () {
        let len = arguments.length;
        if (len < length) {
            arg = arg.concat([].slice.call(arguments));
            if (arg.length >= length) {
                fn.apply(fn, arg);
                return;
            }
            return arguments.callee;
        } else {
            fn.apply(fn, arguments);
        }
    }
}

const test = curry((num1, num2, num3) => {
    console.log(num1 + num2 + num3)
})


test(123, 234, 222);




