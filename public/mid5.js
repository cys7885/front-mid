let a = ["hello.html", "world.js", "readme.txt"];

function getExtension(fileName){
    let _lastDot = fileName.lastIndexOf(".");
    let Ext = fileName.substring(_lastDot, fileName.length);
    return Ext;
}

for(let i=0; i<a.length; ++i)
    console.log(getExtension(a[i]));