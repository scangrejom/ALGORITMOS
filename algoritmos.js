function calificacion () {
    let nota_1=parseFloat(document.getElementById ('nota_1').value);
    let nota_2=parseFloat(document.getElementById ('nota_2').value);
    let nota_3=parseFloat(document.getElementById ('nota_3').value);
    let parcial=parseFloat(document.getElementById ('parcial').value);
    let trabajo_final=parseFloat(document.getElementById ('trabajo_final').value);
    

    let promedio_1= (nota_1+nota_2+nota_3)/3;
    let nota_final= promedio_1 * 0.55 + parcial*0.30 + trabajo_final*0.15;

          
        console.log (nota_final );
        document.write ("su nota final es  " +  nota_final);
    
}

calificacion ();
