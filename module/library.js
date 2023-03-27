let msg="JSES6 module";
 
function hello(name)
{   
    console.log("Hello ",name);
}

class Demo
{
    constructor(name)
    {
        console.log("Hiii ",name);
    }
}

function greet(name)
{
    return `Welcome You ${name}`;
}

export {msg,Demo,hello,greet}

export default function()   {
    console.log("Ye ek default function hi ....");
}

