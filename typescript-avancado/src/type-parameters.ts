// FINALIZADO

// Coloque os três argumentos de tipo na função e use-os para tipar cada um dos argumentos. 
// O primeiro tipo deve ser o tipo do objeto a ser editado
// o segundo tipo deve ser uma das propriedades do tipo do objeto
// o terceiro tipo deve ser o tipo de valor que essa propriedade do objeto aceita
export function editProperty<T extends Object>(obj: T, property: keyof T, value: T[keyof T]) {
    obj[property] = value;
}

let objeto = { nome: 'alan' };

editProperty(objeto, "nome", "a")

console.log(objeto);
