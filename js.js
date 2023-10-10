class Man {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayFIO = () => {
        console.log(this.name, this.age);
    }
}

class ManWithLapTop extends Man {
    constructor(name, age, laptop) {
        super(name, age) // те свойства объекта который мы переносим в новый класс наследем
        this.laptop = laptop
    }
    log = () => {
        console.log(this.name, this.age, this.laptop)
    }

}

const Roma = new ManWithLapTop('Roma', '27', 'cиоми')

Roma.log()
Roma.sayFIO()