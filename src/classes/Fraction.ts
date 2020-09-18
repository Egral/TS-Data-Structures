export class Fraction {
  constructor(private num: number, private den: number) {
    if (this.den < 0) {
      this.num *= -1
      this.den *= -1
    }
  }

  private simplifiedFraction(num: number, den: number) {
    const common = this.gdc(num, den)
    const simplify = (num: number) => {
      if (common === 0) {
        return num
      }
      return Math.trunc(num / common)
    }

    return new Fraction(simplify(num), simplify(den))
  }

  add(fraction: Fraction) {
    const newNum = this.num * fraction.den + this.den * fraction.num
    const newDen = this.den * fraction.den

    return this.simplifiedFraction(newNum, newDen)
  }

  sub(fraction: Fraction) {
    const newNum = this.num * fraction.den - this.den * fraction.num
    const newDen = this.den * fraction.den

    return this.simplifiedFraction(newNum, newDen)
  }

  mul(fraction: Fraction) {
    const newNum = this.num * fraction.num
    const newDen = this.den * fraction.den

    return this.simplifiedFraction(newNum, newDen)
  }

  div(fraction: Fraction) {
    const newNum = this.num * fraction.den
    const newDen = this.den * fraction.num

    return this.simplifiedFraction(newNum, newDen)
  }

  gdc(n = this.num, m = this.den) {
    if (n === 0) {
      return n
    }
    while (m % n != 0) {
      const oldM = m
      const oldN = n

      m = oldN
      n = oldM % oldN
    }

    return n
  }

  eq(fraction: Fraction) {
    const firstNum = this.num * fraction.den
    const secondNum = this.den * fraction.num

    return firstNum === secondNum
  }

  gt(fraction: Fraction) {
    const firstNum = this.num * fraction.den
    const secondNum = this.den * fraction.num

    return firstNum > secondNum
  }

  lt(fraction: Fraction) {
    const firstNum = this.num * fraction.den
    const secondNum = this.den * fraction.num

    return firstNum < secondNum
  }

  toString() {
    return `${this.num}/${this.den}`
  }
}
