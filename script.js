// class Traveler {
//     constructor (name){

//         this._name = name;
//         this._food = 1;
//         this._isHealthy = true

//     }

//     get food (){

//         return this._food

//     }

    

//     Eat = ()=>{

//         const health = 100 

//         if(this._food > 1){

//             return `${this._name} consumiu ${this._food - 1}, ganho de vida ${ health + 5}`
//         }

//         if(this._food < 1 ){

//             return `${this._nome} pouca comida, ${health - 25}`;
//         }

//         if(health < 50){

//             return `${this._nome} está ${this._isHealthy = true}, coma logo ou vai  morrer!` 
//         }


//     }

//     Hunt = () =>{

//         const demage = 15;
//         const defesaInimigo = demage


//         if(this._isHealthy === true){

//             return ` ${this._name} aumentou o damege ${(demage * 1.5)} e ganhou ${this._food + 2}`


//         }

//         if(this._isHealthy === false){

//             return `${(defesaInimigo * 1.5)} estou indo embora`

//         }
        

//     }
    
    
// }

// class Wagon{

//     constructor(quantidade, list){

//         this._quantidade = quantidade;
//         this._list = list 
//     }

//     getAvailableSeatCount = () =>{

//         let passageiro = 0 

//         for(let contador = 0; contador < list.length; contador ++){

//             let index = list[contador]

//             passageiro = passageiro + index
         
//         }

//         if(quantidade > passageiro){

//             return `Quantidade de espaço disponivel ${quantidade - passageiro}`
//         }

//         else(quantidade <= passageiro)

//         return "Não tem vagas disponível!"

//     }

//     join = () => {

//         let passageiro = 0 

//         for(let contador = 0; contador < list.length; contador ++){

//             let index = list[contador]

//             passageiro = passageiro + index
         
//         }

//         if(quantidade < passageiro){

//             return quantidade + 1
//         }
        

//     }

//     shouldQuarantine = () =>{

//         const ocupantesDoentes = false;


//         for(let contador=0; contador < ocupantesDoentes.length; contador++){

//             let index = ocupantesDoentes[contador]

//             if(index === true){

//                 return true
//             }

            
//         }

//         return ocupantesDoentes

//     }

//     totalFood = () => {

//         let totalComidas = 0 

//         for(let contador=0; contador <passageiro.length; contador++){

//             let index = passageiro[contador];

//             if(index > 1){
                
//                 totalComidas = totalComidas + index

//             }


//         }

//         return totalComidas


//     }

    




// }

class Traveler {

    constructor(name){
        this._name = name
        this._food = 1
        this._healthy = true
    }
    //getters
    get name(){
        return this._name
    }

    set name(traveler){
        return this._name = traveler
    }

    get food(){
        return this._food
    }

    set food(quantidade){
        return this._food = quantidade
    }

    get healthy(){
        return this.__healthy
    }
    //setters    
    
    set healthy(quantidade){
        return this.__healthy = quantidade
    }

    hunt(){
        this._food = this._food + 2
    }

    eat(){

        if(this._food - 1 <= 0){
            this._food = 0
            this._healthy = false
        } else {
            this._food-- 
        }
    }
}

class Wagon {
    constructor(capacidade){

        this._capacidade = capacidade
        this._passageiros = []
    }
    //getters
    get capacidade(){
        return this._capacidade
    }

    set capacity(quantidade){
        return this._capacidade = quantidade
    }

    get passageiros(){
        return this._passageiros
    }
    //setters
    
    getAvailableSeatCount(){
        return this._capacidade - this._passageiros.length
    }
    join(traveler){
        if(this.getAvailableSeatCount()>0){
            this._passageiros.push(traveler)
        }
    }
    shouldQuarantine(){
        return this._passageiros.some(({_healthy})=>!_healthy) // vai ser true ou false
    }
    totalFood(){
        return this._passageiros.reduce((acumulador,{_food})=> acumulador +_food,0)
    }
}

// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');
 
console.log(`${wagon.getAvailableSeatCount()} should be 2`);
 
wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);
 
wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);
 
henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)
 
console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);


 



