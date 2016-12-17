function xie(obj) {
    obj.data === undefined ? console.error("data undefined ") : obj.el === undefined ? console.error("el undefined ") : console.log();;
    var $data = obj.data;
    var $el = $("#" + obj.el);

    var pox = {};
    var value = {};
    for (var name in $data) {
        pox[name] = $data[name];
        value[name] = "";
    }
    for (var name in $data) {
        (function(v) {
            Object.defineProperty($data, v, {
                get: function() {
                    return value[v];
                },
                set: function(nw) {
                    value[v] = nw
                    var model = $el.find("*[x-model='" + v + "']");
                    var bind = $el.find("*[x-bind='" + v + "']");
                    model.val(nw);
                    bind.text(nw);
                }
            })
        })(name);
    }

    for (var k in pox) {
        $data[k] = pox[k];
    }

    for (var name in $data) {
        var model = $el.find("*[x-model='" + name + "']");
        (function(v) {
            model.on('input', function() {
                $data[v] = $(this).val();
            })
        })(name);
    }

    var cl = $el.find('*[x-click]');
    cl.on('click', function() {
        var mname = $(this).attr("x-click")
            // console.log(obj.data.age);
        obj.method[mname].call(obj.data);
    });

    return {
        $data: $data
    }

}
