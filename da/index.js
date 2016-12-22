window.onload = function() {
    da.extend("haha", function() {
         console.log(this.innerText);
    })

    console.dir(da("h1"));

}
