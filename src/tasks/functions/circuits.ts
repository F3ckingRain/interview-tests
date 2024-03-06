function funcA() {
    const a = '123'

    function f () {
        return a+'2'
    }

    return f()
}

function funcB() {
    let b = '1234';

    function f() {
        b+='2'
        function c() {
            let b = '999';

            function d() {
                 console.log(b) // will be 999 because we create it again in .17

                return b
            }

            return d()
        }

        return c()
    }

    return f() // returns 999
}

console.log(`first level circuit: ${funcA()}, second level circuit: ${funcB()}`)