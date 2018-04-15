/*var tem um escopo maior(global e de funcao)
 e let tem um escopo menor(global, funcao e bloco)
*/

 var numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)