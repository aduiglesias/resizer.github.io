function openMenu(){
 document.getElementById("slide").style.height="105px";
}


function screenReady(){
    
    //Pulgada inicial y simulación
    var pulgadaInicial = document.getElementById("pulgadaInicial").value;
    var pulgadaSimulacion = document.getElementById("pulgadaSimulacion").value;
    
    //Relación de aspecto
    var dpi_x = document.getElementById('dpi').offsetWidth;
    var dpi_y = document.getElementById('dpi').offsetHeight;
    var aRw = screen.width / dpi_x;
    var aRh = screen.height / dpi_y;
    
    //Resolución
    var resAncho = window.screen.width * window.devicePixelRatio;
    var resAlto = window.screen.height * window.devicePixelRatio;
    
    //Px diagonal y PPI
    var diagonal = Math.hypot(resAncho,resAlto);
    var ppi = diagonal/pulgadaInicial;
    
    
    var dpr = window.devicePixelRatio;
    var simW;
    var simH;
    var pxW;
    var pxH;
    
    if(pulgadaInicial>pulgadaSimulacion && pulgadaSimulacion.match(/^(?!0\d)\d*(\.\d+)?$/) && pulgadaSimulacion!=""){
        
        console.log("///////////////////////////////");
        console.log("Valores del dispositivo actual:");
        console.log("Resolución ancho * alto: "+resAncho+"*"+resAlto);
        console.log("PPI: "+ppi);
        console.log("Relacion de aspecto"+aRw+"*"+aRh);
        console.log("///////////////////////////////");
        
        console.log("///////////////////////////////");
        console.log("Medidas de la pulgada de simulación:");
        
        //Calculamos el ancho y el alto real de la pulgada diagonal introducida según el AR, el PPI y el DPR de nuestra pantalla actual 
        simH = pulgadaSimulacion/Math.sqrt(Math.pow(aRw/aRh,2)+1);
        simW = (aRw/aRh)*simH;
        pxW = (simW*ppi)/dpr;
        pxH = (simH*ppi)/dpr;
        console.log("Diagonal pulgadas: "+pulgadaSimulacion);
        console.log("Ancho en pulgadas: "+simW)
        console.log("Alto en pulgadas: "+simH)
        console.log("Ancho por alto en px: "+pxW+"*"+pxH);
        console.log("///////////////////////////////");
              
        document.getElementById("slide").style.height="0px";
        document.getElementById("pulgadaSimulacion").value="";
        document.getElementById("contenedor").style.visibility="visible";
        document.getElementById("caja").style.width=pxW;
        document.getElementById("caja").style.height=pxH;
        
    }else{
        
        console.log("ERROR!");
    }
}

var elem = document.documentElement;

function openFullscreen() {
    var eval = document.getElementById("pulgadaInicial").value;
    console.log(eval);
if(eval.match(/^(?!0\d)\d*(\.\d+)?$/) && eval!=""){
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
    
document.getElementById("menu").style.visibility="visible";
document.getElementById("fullScreen").style.visibility="hidden";
document.getElementById("cuerpo").style.background = "black";
  }
 }else{
     alert("Introduce un valor numerico valido (14.5)(15)...");
     
 }   
}