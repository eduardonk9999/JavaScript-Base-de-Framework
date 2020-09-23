const pets = [
    { name: 'Boris', age: 4, gender: 'Male', type: 'Dog'},
    { name: 'Jimmy', age: 1, gender: 'Male', type: 'Cat'},
    { name: 'Pérola', age: 2, gender: 'Famale', type: 'Dog'},
    { name: 'Lucy', age: 5, gender: 'Famale', type: 'Cat'},
    { name: 'Cristal', age: 3, gender: 'Famale', type: 'Dog'},
    { name: 'Chico', age: 6, gender: 'Male', type: 'Dog'},
]

const petDogs = ({ type }) => type === 'Dog'

console.log(pets.filter(petDogs));