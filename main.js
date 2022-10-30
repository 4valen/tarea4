///function addnumber(a,b){
    
    for (let index = 1; index <= 100; index++) {
        console.log(index);
        
    } 

//}
///addnumber();




const contar=(a)=>{
    if(a<0)return
    console.log(a)
    return contar(a-1)
}
contar(100)

console.log("------------parte 2---------");
function mil(a,b){
    for (let index = 1000; index >=500 ; index-=2) {
        console.log(index);
        
    }
}
mil(500);

console.log("-----------parte 3-----------")
function promedio(a,b,c,){
    var a= parseInt+document.getElementById(a).values;
    var b= parseInt+document.getElementById(b).values;
    var c= parseInt+document.getElementById(c).values;
    let p=(a+b+c)/3;
    document.getElementById("promedio").innerText;
    if (p>=5){ 
    console.log("felicidades tu promedio");
}

}

function promediar()
{
    prom=document.getElementById('promedio').valor;
    html="";

    for(var i = 0; i<prom ; i++)
    {
        html+="<label>numero"+(i+1)+"</label><input type='text' id='calcular"+i+"'>cbr>";
        
    }
    html+="< input type='button' onclick='calcular' ("+prom+")'value= 'calcular promedio de numeros'>"
    document.getElementById('resultado').innerHTML=html;

}
function calucar(n){
    suma=0;
    promedio=0;
    x=0;
    for (var i = 0; i < n ; i++)
     {
        x=document.getElementById('calcular'+1).value;
        suma+=parseInt(x);

        
    }
    promedio=suma/n;
    alert(promedio);
}
