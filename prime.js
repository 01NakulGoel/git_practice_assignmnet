function prime(number){
let factors=0
for(let i=1;i<=number;i++){
    if(num%i==0){
        factors++
    }
}
if(factors==2){
    return 'Prime Number'
}
return 'Not Prime Number'

}

