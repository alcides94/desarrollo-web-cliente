function countBy(x,y){
let array=[];
    if (x<0 || y<0){
        return console.log(array);
    }else{
        let i=1;
        let j=0;
        while (i<=y){
            array[j] = x*i;
            i++;
            j++;
        }
        return console.log(array);
    }
    
}

function llamar(){
    let num1=parseInt(prompt("INGRESE NUMERO 1"));
    let num2=parseInt(prompt("INGRESE NUMERO 2"));

    console.log(countBy(num1,num2));
}