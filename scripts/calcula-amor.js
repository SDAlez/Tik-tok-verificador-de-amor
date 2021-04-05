let string = "harry styles"
let vet = new Array(string.length)
let string2 = "arry feijao"
let vet2 = new Array(string2.length) 
let nums = new Array(50)
verificar(vet, string, vet2, string2)
function verificar(amor1Array, amor1, amor2Array, amor2) {
    /*let amor1 = document.getElementById("amor1").value.toLowerCase()
    let amor2 = document.getElementById("amor2").value.toLowerCase()
    let amor1Array = new Array(amor1.length)
    let amor2Array = new Array(amor2.length)*/
    
    for(i=0; i<amor1Array.length; i++) {
        amor1Array[i] = amor1.charAt(i)
    }

    for(i=0; i<amor2Array.length; i++) {
        amor2Array[i] = amor2.charAt(i)
    }

    SelectionSort(amor1Array)
    SelectionSort(amor2Array)

    dimArray(amor1Array)
    dimArray(amor2Array)

    tiraEspaço(amor1Array)
    tiraEspaço(amor2Array)

    comparaArray(amor1Array, amor2Array)
    removeNull(nums)
    //percentage(nums)
    console.log(nums)
}

function removeNull(vet) {
    let index = vet.length-1;
    while(index >=0) {
        if(Number(vet[index]) >= 0) {
            index = -1;
        } else {
            vet.pop()
            index--
        }
    }
}

function percentage(nums) {
    let right
    let left
    
    while(nums.length!=2) {
        left = 0
        right = nums.length-1
        while(left<right) {
            parseInt(nums[left]) += parseInt(num[right])
            slice(rigth, 1)
            left++
            rigth--
        }
    }    
}

function comparaArray(vet1, vet2) {
    var numIndex = 0;
    let vet1Maior;
    if(vet1 != vet2) {
        if(vet1.length > vet2.length) {
            vet1Maior = true;
        }
        if(vet1Maior == true) {
            i=0
            while(i<vet1.length) {
                if(vet2.indexOf(vet1[i]) >=0) {
                    nums[numIndex] = "2";
                    numIndex++
                    vet1.splice(i, 1)
                    vet2.splice(i, 1)
                    i=0
                } else {
                    i++
                }
            }
            for(i=0; i<vet1.length+vet2.length; i++) {
                nums[numIndex] = "1"
                numIndex++
            }
        } else {
            i=0
            while(i<vet2.length) {
                if(vet1.indexOf(vet2[i]) >=0) {
                    nums[numIndex] = "2";
                    numIndex++
                    vet1.splice(i, 1)
                    vet2.splice(i, 1)
                    i=0
                } else {
                    i++
                }
            } 
            for(i=0; i<vet1.length+vet2.length; i++) {
                nums[numIndex] = "1"
                numIndex++
            }
        }
    }       
}

function dimArray(vet){
    let rodada
    for(i=0; i < vet.length; i++) {
        if(rodada == undefined) {
            rodada = 0
        } else {
            rodada++
        }
        let index = rodada
        while(vet[index] == vet[index+1]) {
            vet.splice(index+1, 1)
        }
    }
}


function SelectionSort(vet) {
    let aux;
    for(let i = 0; i < vet.length; i++) {
        let menor = i
        for(let j = menor; j < vet.length; j++) {
            if(vet[menor] > vet[j]) {
                menor = j
            }
        }
        aux = vet[i]
        vet[i] = vet[menor]
        vet[menor] = aux
    }
}

function tiraEspaço(vet) {
    for(i=0; i<vet.length; i++) {
        if(vet[i] == ' ') {
            vet.splice(i, 1)
        }
    }
}