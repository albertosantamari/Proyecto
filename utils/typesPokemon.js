export const typePokemon = (data) =>{
    const typesNameRepeat = []
    data.forEach((elements, index) => {
        elements.type.forEach((oneType, index) => {
            !typesNameRepeat.includes(oneType.type.name) && typesNameRepeat.push(oneType.type.name)
        })
    });
    return typesNameRepeat
}