function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTV50 = trabalho1 && trabalho2
    // const comprarTV32 = !!(trabalho1 ^ trabalho2) //bitwise xor
    const comprarTV32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unário

    return { comprarSorvete, comprarTV50, comprarTV32, manterSaudavel }
}

console.log(compras(true,true))
// 1 - true, true, false, false
console.log(compras(true,false))
// 2 - true, false, true, false
console.log(compras(false,true))
// 3- true, false, true, false
console.log(compras(false,false))
// 4 - false, false, false, true