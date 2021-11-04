let yourName = "Ryan Rasmussen" 

document.getElementById('credit').textContent = `Created by ${yourName}`

let gb = 0    
let cc = 0     
let sugar = 0 


let gbQuantity = document.querySelector('#qty-gb')
let ccQuantity = document.querySelector('#qty-cc')
let sugarQuantity = document.querySelector('#qty-sugar')

let totalQuantity = document.querySelector('#qty-total')

let plusGb = document.querySelector('#add-gb')
let minusGb = document.querySelector('#minus-gb')


let plusCc = document.querySelector('#add-cc')
let minusCc = document.querySelector('#minus-cc')


let plusSugar = document.querySelector('#add-sugar')
let minusSugar = document.querySelector('#minus-sugar')



// Gingerbread Functions 

plusGb.addEventListener('click', function(){
    gb += 1
    console.log(gb)
    gbQuantity.textContent = gb
    totalQuantity.textContent = gb+cc+sugar
})

minusGb.addEventListener('click', function(){
    if(gb > 0){
        gb -= 1
        console.log(gb)
        gbQuantity.textContent = gb
        totalQuantity.textContent = gb+cc+sugar
    }
})

//Chocolate Chip Functions 

plusCc.addEventListener('click', function(){
    cc += 1
    console.log(cc)
    ccQuantity.textContent = cc
    totalQuantity.textContent = gb+cc+sugar
})

minusCc.addEventListener('click', function(){
    if(cc > 0){
        cc -= 1
        console.log(cc)
        ccQuantity.textContent = cc
        totalQuantity.textContent = gb+cc+sugar
    }
})

//Sugar Cookie Functions

plusSugar.addEventListener('click', function(){
    sugar += 1
    console.log(sugar)
    sugarQuantity.textContent = sugar
    totalQuantity.textContent = gb+cc+sugar
})

minusSugar.addEventListener('click', function(){
    if(sugar > 0){
        sugar -= 1
        console.log(sugar)
        sugarQuantity.textContent = sugar
        totalQuantity.textContent = gb+cc+sugar
    }
})