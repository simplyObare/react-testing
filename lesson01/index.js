const getFullName = (fname, lname) => {
  return `${fname} ${lname}`
}

const actualFullName = getFullName('John', 'Doe')
console.log(actualFullName)

const expectedFullName = 'John Doe'

if (actualFullName !== expectedFullName) {
  throw new Error(`Expected ${expectedFullName} but got ${actualFullName}`)
}
