let promi = () => {
    return new Promise(function (res, rej) {
        setTimeout(() => {
            $.get("https://jsonplaceholder.typicode.com/todos/", function (data) {
                res(data[2]['title'])
            }).fail(err => {
                rej("Failes yo laod;...", err);
            })
        },1000)

    })
}
promi().then(r => {
    console.log(r)
}).catch(e => {
    console.log(e)
})