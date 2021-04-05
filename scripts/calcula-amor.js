function Verificar() {
    let amor1 = document.getElementById("amor1").value.toLowerCase()
    let amor2 = document.getElementById("amor2").value.toLowerCase()
    let amor1Array = new Array(amor1.length)
    let amor2Array = new Array(amor2.length)
    nums = new Array(50)
    porcentagem = document.querySelector("p#porcentagem")

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
    percentage(nums)
    
    porcentagem.innerText = nums.join('') + "%"
    porcentagem.style.color = "black"
}

function removeNull(vet) {
    let index = vet.length-1;
    while(index >=0) {
        if(vet[index] >= 0) {
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
    let again = false
    let j
    
    while(nums.length!=2) {
        left = 0
        right = nums.length-1
        while(left<right) {
            nums[left] += nums[right]
            nums.splice(right, 1)
            left++
            right--
        }
    }
    for(i=0; i<nums.length; i++) {
        if(nums[i] / 10 >=1) {
            again = true
            j = nums.length-1
            nums.push(nums[j])
            while(j > i+1) {
                swapArray(nums, j, j-1)
                j--
            }
            nums[i+1] = nums[i] % 10
            nums[i] = 1;
        }
    }
    if(again==true) {
        percentage(nums)
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
                    nums[numIndex] = 2;
                    numIndex++
                    vet1.splice(i, 1)
                    vet2.splice(i, 1)
                    i=0
                } else {
                    i++
                }
            }
            for(i=0; i<vet1.length+vet2.length; i++) {
                nums[numIndex] = 1
                numIndex++
            }
        } else {
            i=0
            while(i<vet2.length) {
                if(vet1.indexOf(vet2[i]) >=0) {
                    nums[numIndex] = 2;
                    numIndex++
                    vet1.splice(i, 1)
                    vet2.splice(i, 1)
                    i=0
                } else {
                    i++
                }
            } 
            for(i=0; i<vet1.length+vet2.length; i++) {
                nums[numIndex] = 1
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

function swapArray(array, item1, item2) {
    let aux = array[item1]
    array[item1] = array[item2]
    array[item2] = aux
}