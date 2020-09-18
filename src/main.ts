import { Fraction } from 'classes'

const f1 = new Fraction(1, 2)
const f2 = new Fraction(3, 4)

const f3 = f1.sub(f2)

const result = `${f1} - ${f2} = ${f3}`

console.log(result)
