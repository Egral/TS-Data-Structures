import { Fraction } from 'classes'

describe('fraction test cases', () => {
  it('should make gdc calculation', () => {
    const f1 = new Fraction(20, 10)

    expect(f1.gdc()).toBe(10)
  })

  it('should calculate addition of two fractions', () => {
    const f1 = new Fraction(1, 2)
    const f2 = new Fraction(1, 4)

    const f3 = f1.add(f2)

    expect(f3.toString()).not.toBe('6/8')
    expect(f3.toString()).toBe('3/4')
  })

  it('should calculate subtract of two fractions', () => {
    const f1 = new Fraction(1, 2)
    const f2 = new Fraction(3, 4)

    expect(f1.sub(f2).toString()).toBe('-1/4')
    expect(f1.sub(f2).toString()).not.toBe('-2/8')
  })

  it('should calculate the product of two fractions', () => {
    const f1 = new Fraction(1, 2)
    const f2 = new Fraction(2, 4)

    expect(f1.mul(f2).toString()).toBe('1/4')
    expect(f1.mul(f2).toString()).not.toBe('2/8')
  })

  it('should calculate the division of two fractions', () => {
    const f1 = new Fraction(1, 2)
    const f2 = new Fraction(2, 4)

    expect(f1.div(f2).toString()).toBe('1/1')
    expect(f1.div(f2).toString()).not.toBe('2/2')
  })

  it('Fraction equals comparisson', () => {
    const f1 = new Fraction(1, 2)
    const f2 = new Fraction(2, 4)
    const f3 = new Fraction(3, 2)

    expect(f1.eq(f2)).toBeTruthy()
    expect(f1.eq(f3)).toBeFalsy()
  })

  it('Fraction greater than comparisson', () => {
    const f1 = new Fraction(1, 2)
    const f2 = new Fraction(1, 4)

    expect(f1.gt(f2)).toBeTruthy()
  })

  it('Fraction lower than comparisson', () => {
    const f1 = new Fraction(1, 2)
    const f2 = new Fraction(1, 4)

    expect(f1.lt(f2)).toBeFalsy()
  })
})
