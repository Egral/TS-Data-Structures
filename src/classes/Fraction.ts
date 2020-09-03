export class Fraction {
  constructor(private num: number, private den: number) {}

  toString() {
    return `${this.num}/${this.den}`
  }
}
