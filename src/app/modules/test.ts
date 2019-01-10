abstract class Test {
   abstract test1 : string
   abstract test2 : string
   abstract test3 : string

    constructor(){
        console.log('abstract class constructor')
    }
}

export class subTest extends Test {

    test1 : string
    test2 : string
    test3 : string
    
    constructor(){
        console.log('sub class constructor')

        super();
    }

    public setSubTest(a:string)
    {
        console.log(a);
    }

 }
 