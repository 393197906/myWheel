window.onload = function() {
    var x = xie({
        el: "app",
        data: {
            name: "hellow world",
            age: 18323123
        },
        method: {
            add: function() {
                var that = this;
                this.Int = setInterval(function(){
                        that.age++;
                },100)
            }
            ,
            closeInter:function(){
                window.clearInterval(this.Int);
            }
            ,
            hell:function(){
                this.name="xie"
            }
        }
    })

}
