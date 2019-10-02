import { Invalid } from './invalid'
import { FileDoesntExist } from './file-doesnt-exist'

const a: Invalid = {
    a: 'asdf'
}

const b: FileDoesntExist = {
    a: '123'
}

console.log(a, b)