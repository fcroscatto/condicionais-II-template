// let idade = 12

// if (idade >= 13){
//     if(idade <= 17){
//     console.log("A pessoa dependente já pode ter um cartão de crédito vinculado ao seu")
//     } else {
//         console.log("Idade maior ou igual a 18")
//     }
// } else {
//     console.log(" Consulte outras possibilidades do Labank")
// }

// if (idade>=13 && idade <= 17){
//     console.log(" A pessoa dependente já pode ter um cartão de crédito vinculado ao seu")
// } else {
//     console.log("COnsulte outras possibilidades do Labank")
// }

// const possuiConta = prompt("Você já possui conta no Labank? Responda sim ou não")
// if(possuiConta.toLowerCase() === "sim"){
//     console.log("Boas vindas");
// } else {
//     console.log("Faça já o seu cadastro")
// }

//  //if ternário 
//  possuiConta.toLowerCase() === "sim" ?
//  console.log("Boas vindas") :
//  console.log("Faça já o seu cadastro")

//  let cartao 
//  let ramal = prompt("digite o ramal desejado")

//  if(ramal === "1"){
//      cartao = "Fácil"
//  } else if (ramal === "2"){
//      cartao = "Black" 
//  } else if (ramal === "3"){
//      cartao = "Platinum" 
//  }else if (ramal === "4"){
//      cartao = "Master gold" 
//  } else {
//      console.log("Escola uma das 4 opções")
//  }

//  console.log(cartao)

//  switch(ramal){
//      case 1:
//          cartao = "Fácil"
//          break; 
//      case 2: 
//          cartao = "Black"
//          break; 
//      case 3: 
//          cartao = "Platinum"
//          break;
//      case 4: 
//          cartao = "Master Gold"
//         break;
//          defaut: 
//          console.log("Escolha uma das 4 opções")         
//  }

const numero = prompt("digite um numero")
// if (numero % 2 === 0){
//     console.log("é divisivel por 2 ")
//     if (numero % 3 === 0){
//         console.log("é divisivel por 3")
     if(numero % 2 === 0 && numero % 3 ===0){
         console.log("É divisiveil por 2 e 3")
        numero === "30" ? 
        console.log("UFA, Acertei!") :
        console.log("Não foi dessa vez :(")  
         let frase
        switch(numero){
            case "6":
                frase = 6
               break; 
           case "12": 
               frase = 12
               break; 
           case "18": 
                frase = 18
                break;
            case "24": 
                frase = 24
            case "30":
                frase = 30    
                break;
            default:  console.log("O numero é maior que 30 ou menor que 6") 
        }
   
    }    
    

