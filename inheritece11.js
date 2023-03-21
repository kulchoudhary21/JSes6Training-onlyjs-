class Demo {
    constructor(name,age,salary) {
        this.name=name
        this.age=age
        this.salary=salary
        document.write(`<h3>Employee Data</h3>
                Name:${name}<br>
                Age:${age}<br>
                Salary:${salary}<br>
        `)
        console.log("Demo-constructor.... ",name)
    }
    meg()
    {
        console.log("Hello ",this.name)
    }
}
class DemoChild extends Demo {
    
    // constructor(name){
    //     console.log("Demo-Chid Constructor.... ",name)
    //     super(name).meg();
    // }
    meg()
    {
        let ta=20;
        let pa=10;
        let total=ta+pa+this.salary;
        document.write(`<h3>Manager Data</h3>
                Name:${this.name}<br>
                Age:${this.age}<br>
                Salary:${total}<br>
        `) 
    }
}
let d1 = new Demo("Kuldeep",12,12000)
let d2 = new DemoChild("Ram Kumar",13,1200)
d.meg()