async function test()
{
    console.log("Message : 2")
    await console.log("Message : 3")
    console.log("Message : 4")
    await console.log("Message : 6")
}
console.log("Message : 1")
test();
console.log("Message : 5")