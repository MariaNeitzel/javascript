//RECURSIVIDADE

function faturial(n){
    if( n ==1){
        return 1
    }else{
        return n * faturial(n-1)
    }
}

console.log(faturial(5))