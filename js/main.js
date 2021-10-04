(function(){

    
    var formulario = document.getElementById("formulario"),
        elementos = formulario.elements,    
        btn = document.getElementById("btn");
        
       

    
    /////// Funciones /////////////////


    //////  Cedula   /////////////////
    
    function validarCedula(e){
        var cedula = document.getElementById("cedula"),
            errorCedula = document.getElementById("errorCedula");

        if(cedula.value == '' || cedula.value == null){
            errorCedula.style.display = "block";
            
            
        } else {
            errorCedula.style.display = "none";

            return true;
        }
    }
    
    //////  Condiciones   /////////////////


    function validarCondicion(e){
        var condicion = formulario.condicion,
            errorCondicion = document.getElementById("errorCondicion");

        if(condicion.value == '' || condicion.value == null){
            errorCondicion.style.display = "block";
            
            
        } else {
            errorCondicion.style.display = "none";

            return true;
        }
    }

    //////  Campaña   /////////////////


    function validarCampaña (){
        var opciones = document.getElementsByName("campaña"),
            error = document.getElementById("errorCampaña");
            resultado = false;

        for(var i = 0; i < elementos.length; i++){
            if (elementos[i].type == "radio" && elementos[i].name == "campaña") {
                for (var o = 0; o < opciones.length; o++) {
                    if (opciones[o].checked){
                        resultado = true;
                        break;
                    }
                }

                if(resultado == false || resultado == null){
                    error.style.display = "block"; 
                        return false;
                  } else {
                    error.style.display = "none";
                        return true;
                }
                
        
            }
        }
    }

    //////  Fecha   /////////////////


    function validarFecha(e){
        var fecha = document.getElementById("fecha"),
            errorFecha = document.getElementById("errorFecha");

        if(fecha.value == '' || fecha.value == null){
            errorFecha.style.display = "block";

            
        } else {
            errorFecha.style.display = "none";

            return true;
        }
    }

    //////  Sexo   /////////////////


    function validarSexo(e){
        var sexo = formulario.sexo,
        errorSexo = document.getElementById("errorSexo");


        if(sexo.value == '' || sexo.value == null){
            errorSexo.style.display = "block";

            
        } else {
            errorSexo.style.display = "none";

            return true;
        }
    }

    //////  Salud   /////////////////


    function validarSalud (){
        var opciones = document.getElementsByName("salud"),
            error = document.getElementById("errorSalud");
            resultado = false;

        for(var i = 0; i < elementos.length; i++){
            if (elementos[i].type == "radio" && elementos[i].name == "salud") {
                for (var o = 0; o < opciones.length; o++) {
                    if (opciones[o].checked){
                        resultado = true;
                        break;
                    }
                }

                if(resultado == false || resultado == null){
                    error.style.display = "block"; 
                        return false;
                  } else {
                    error.style.display = "none";
                        return true;
                }
                
        
            }
        }
    }


    function validarMalestar (){
        var opciones = document.getElementsByName("malestar"),
            error = document.getElementById("errorMalestar");
            resultado = false;

        for(var i = 0; i < elementos.length; i++){
            if (elementos[i].type == "radio" && elementos[i].name == "malestar") {
                for (var o = 0; o < opciones.length; o++) {
                    if (opciones[o].checked){
                        resultado = true;
                        break;
                    }
                }

                if(resultado == false || resultado == null){
                    error.style.display = "block"; 
                        return false;
                  } else {
                    error.style.display = "none";
                        return true;
                }
                
        
            }
        }
    }


    function validarServicio (){
        var opciones = document.getElementsByName("servicio"),
            error = document.getElementById("errorServicio");
            resultado = false;

        for(var i = 0; i < elementos.length; i++){
            if (elementos[i].type == "radio" && elementos[i].name == "servicio") {
                for (var o = 0; o < opciones.length; o++) {
                    if (opciones[o].checked){
                        resultado = true;
                        break;
                    }
                }

                if(resultado == false || resultado == null){
                    error.style.display = "block"; 
                        return false;
                  } else {
                    error.style.display = "none";
                        return true;
                }
                
        
            }
        }
    }




    //////  Sintomas   /////////////////


    var validarGarganta = function(){
        var opciones = document.getElementsByName("garganta"),
            error = document.getElementById("errorSintomas"),
            resultado = false;

        for(var i = 0; i < elementos.length; i++){
            if (elementos[i].type == "radio" && elementos[i].name == "garganta") {
                for (var o = 0; o < opciones.length; o++) {
                    if (opciones[o].checked){
                        resultado = true;
                        break;
                    }
                }

                if(resultado == false || resultado == null){
                    error.style.display = "block"; 
                        return false;
                  } else {
                    error.style.display = "none";
                        return true;
                }
                
        
            }
        }
    }


    var validarFiebre = function(){
        var opciones = document.getElementsByName("fiebre"),
            error = document.getElementById("errorSintomas"),
            resultado = false;

        for(var i = 0; i < elementos.length; i++){
            if (elementos[i].type == "radio" && elementos[i].name == "fiebre") {
                for (var o = 0; o < opciones.length; o++) {
                    if (opciones[o].checked){
                        resultado = true;
                        break;
                    }
                }

                if(resultado == false || resultado == null){
                    error.style.display = "block"; 
                        return false;
                  } else {
                    error.style.display = "none";
                        return true;
                }
                
        
            }
        }
    }


    var validarTos = function(){
        var opciones = document.getElementsByName("tos"),
            error = document.getElementById("errorSintomas"),
            resultado = false;

        for(var i = 0; i < elementos.length; i++){
            if (elementos[i].type == "radio" && elementos[i].name == "tos") {
                for (var o = 0; o < opciones.length; o++) {
                    if (opciones[o].checked){
                        resultado = true;
                        break;
                    }
                }

                if(resultado == false || resultado == null){
                    error.style.display = "block"; 
                        return false;
                  } else {
                    error.style.display = "none";
                        return true;
                }
                
        
            }
        }
    }


    var validarRespirar = function(){
        var opciones = document.getElementsByName("respirar"),
            error = document.getElementById("errorSintomas"),
            resultado = false;

        for(var i = 0; i < elementos.length; i++){
            if (elementos[i].type == "radio" && elementos[i].name == "respirar") {
                for (var o = 0; o < opciones.length; o++) {
                    if (opciones[o].checked){
                        resultado = true;
                        break;
                    }
                }

                if(resultado == false || resultado == null){
                    error.style.display = "block"; 
                        return false;
                  } else {
                    error.style.display = "none";
                        return true;
                }
                
        
            }
        }
    }


    var validarMuscular = function(){
        var opciones = document.getElementsByName("muscular"),
            error = document.getElementById("errorSintomas"),
            resultado = false;

        for(var i = 0; i < elementos.length; i++){
            if (elementos[i].type == "radio" && elementos[i].name == "muscular") {
                for (var o = 0; o < opciones.length; o++) {
                    if (opciones[o].checked){
                        resultado = true;
                        break;
                    }
                }

                if(resultado == false || resultado == null){
                    error.style.display = "block"; 
                        return false;
                  } else {
                    error.style.display = "none";
                        return true;
                }
                
        
            }
        }
    }


    var validarNasal = function(){
        var opciones = document.getElementsByName("nasal"),
            error = document.getElementById("errorSintomas"),
            resultado = false;

        for(var i = 0; i < elementos.length; i++){
            if (elementos[i].type == "radio" && elementos[i].name == "nasal") {
                for (var o = 0; o < opciones.length; o++) {
                    if (opciones[o].checked){
                        resultado = true;
                        break;
                    }
                }

                if(resultado == false || resultado == null){
                    error.style.display = "block"; 
                        return false;
                  } else {
                    error.style.display = "none";
                        return true;
                }
                
        
            }
        }
    }


    var validarDiarrea = function(){
        var opciones = document.getElementsByName("diarrea"),
            error = document.getElementById("errorSintomas"),
            resultado = false;

        for(var i = 0; i < elementos.length; i++){
            if (elementos[i].type == "radio" && elementos[i].name == "diarrea") {
                for (var o = 0; o < opciones.length; o++) {
                    if (opciones[o].checked){
                        resultado = true;
                        break;
                    }
                }

                if(resultado == false || resultado == null){
                    error.style.display = "block"; 
                        return false;
                  } else {
                    error.style.display = "none";
                        return true;
                }
                
        
            }
        }
    }


    var validarCabeza = function(){
        var opciones = document.getElementsByName("cabeza"),
            error = document.getElementById("errorSintomas"),
            resultado = false;

        for(var i = 0; i < elementos.length; i++){
            if (elementos[i].type == "radio" && elementos[i].name == "cabeza") {
                for (var o = 0; o < opciones.length; o++) {
                    if (opciones[o].checked){
                        resultado = true;
                        break;
                    }
                }

                if(resultado == false || resultado == null){
                    error.style.display = "block"; 
                        return false;
                  } else {
                    error.style.display = "none";
                        return true;
                }
                
        
            }
        }
    }


    var validarFatiga = function(){
        var opciones = document.getElementsByName("fatiga"),
            error = document.getElementById("errorSintomas"),
            resultado = false;

        for(var i = 0; i < elementos.length; i++){
            if (elementos[i].type == "radio" && elementos[i].name == "fatiga") {
                for (var o = 0; o < opciones.length; o++) {
                    if (opciones[o].checked){
                        resultado = true;
                        break;
                    }
                }

                if(resultado == false || resultado == null){
                    error.style.display = "block"; 
                        return false;
                  } else {
                    error.style.display = "none";
                        return true;
                }
                
        
            }
        }
    }


    var validarGusto = function(){
        var opciones = document.getElementsByName("gusto"),
            error = document.getElementById("errorSintomas"),
            resultado = false;

        for(var i = 0; i < elementos.length; i++){
            if (elementos[i].type == "radio" && elementos[i].name == "gusto") {
                for (var o = 0; o < opciones.length; o++) {
                    if (opciones[o].checked){
                        resultado = true;
                        break;
                    }
                }

                if(resultado == false || resultado == null){
                    error.style.display = "block"; 
                        return false;
                  } else {
                    error.style.display = "none";
                        return true;
                }
                
        
            }
        }
    }


    var validarOlfato = function(){
        var opciones = document.getElementsByName("olfato"),
            error = document.getElementById("errorSintomas"),
            resultado = false;

        for(var i = 0; i < elementos.length; i++){
            if (elementos[i].type == "radio" && elementos[i].name == "olfato") {
                for (var o = 0; o < opciones.length; o++) {
                    if (opciones[o].checked){
                        resultado = true;
                        break;
                    }
                }

                if(resultado == false || resultado == null){
                    error.style.display = "block"; 
                        return false;
                  } else {
                    error.style.display = "none";
                        return true;
                }
                
        
            }
        }
    }


    var validarNauseas = function(){
        var opciones = document.getElementsByName("nauseas"),
            error = document.getElementById("errorSintomas"),
            resultado = false;

        for(var i = 0; i < elementos.length; i++){
            if (elementos[i].type == "radio" && elementos[i].name == "nauseas") {
                for (var o = 0; o < opciones.length; o++) {
                    if (opciones[o].checked){
                        resultado = true;
                        break;
                    }
                }

                if(resultado == false || resultado == null){
                    error.style.display = "block"; 
                        return false;
                  } else {
                    error.style.display = "none";
                        return true;
                }
                
        
            }
        }
    }


    //////  Condiciones Medicas   /////////////////

    var validarMedica = function(){
        var opciones = document.getElementsByName("condiciones"),
            error = document.getElementById("errorMedica"),
            resultado = false;

        for(var i = 0; i < elementos.length; i++){
            if (elementos[i].type == "checkbox") {
                for (var o = 0; o < opciones.length; o++) {
                    if (opciones[o].checked){
                        resultado = true;
                        break;
                    }
                }

                if(resultado == false || resultado == null){
                    error.style.display = "block";
    
                      return false;
                  } else {
                    error.style.display = "none";
                    return true;
                }
                
        
            }
        }
    }


    //////  Contacto   /////////////////

    function validarContacto(e){
        var contacto = formulario.contacto,
            errorContacto = document.getElementById("errorContacto");


        if(contacto.value == '' || contacto.value == null){
            errorContacto.style.display = "block";

            
        } else {
            errorContacto.style.display = "none";

            return true;
        }
    }



    var validarFamiliares = function(){
        var opciones = document.getElementsByName("diagnostico"),
            error = document.getElementById("errorFamiliares"),
            resultado = false;

        for(var i = 0; i < elementos.length; i++){
            if (elementos[i].type == "checkbox") {
                for (var o = 0; o < opciones.length; o++) {
                    if (opciones[o].checked){
                        resultado = true;
                        break;
                    }
                }

                if(resultado == false || resultado == null){
                    error.style.display = "block";
    
                      return false;
                  } else {
                    error.style.display = "none";
                    return true;
                }
                
        
            }
        }
    }


    function validarSintomasPersonas(e){
        var sintomas = formulario.sintomas,
            error = document.getElementById("errorSintomasPersonas");


        if(sintomas.value == '' || sintomas.value == null){
            error.style.display = "block";

            
        } else {
            error.style.display = "none";

            return true;
        }
    }


    var validarFamilia = function(){
        var opciones = document.getElementsByName("contactoFisico"),
            error = document.getElementById("errorFamilia"),
            resultado = false;

        for(var i = 0; i < elementos.length; i++){
            if (elementos[i].type == "checkbox") {
                for (var o = 0; o < opciones.length; o++) {
                    if (opciones[o].checked){
                        resultado = true;
                        break;
                    }
                }

                if(resultado == false || resultado == null){
                    error.style.display = "block";
    
                      return false;
                  } else {
                    error.style.display = "none";
                    return true;
                }
                
        
            }
        }
    }


    function validarDiagnostico(e){
        var diagnostico = formulario.diagnostico,
            error = document.getElementById("errorDiagnostico");


        if(diagnostico.value == '' || diagnostico.value == null){
            error.style.display = "block";

            
        } else {
            error.style.display = "none";

            return true;
        }
    }


    var validarFamily = function(){
        var opciones = document.getElementsByName("contactoDirecto"),
            error = document.getElementById("errorFamily"),
            resultado = false;

        for(var i = 0; i < elementos.length; i++){
            if (elementos[i].type == "checkbox") {
                for (var o = 0; o < opciones.length; o++) {
                    if (opciones[o].checked){
                        resultado = true;
                        break;
                    }
                }

                if(resultado == false || resultado == null){
                    error.style.display = "block";
    
                      return false;
                  } else {
                    error.style.display = "none";
                    return true;
                }
                
        
            }
        }
    }


    function validarViaje(e){
        var viaje = formulario.viaje,
            error = document.getElementById("errorViaje");


        if(viaje.value == '' || viaje.value == null){
            error.style.display = "block";

            
        } else {
            error.style.display = "none";

            return true;
        }
    }


    function validarPais(e){
        var pais = document.getElementById("pais"),
            error = document.getElementById("errorPais");


        if(pais.value == '' || pais.value == null){
            error.style.display = "block";

            
        } else {
            error.style.display = "none";

            return true;
        }
    }



    function validarExterior(e){
        var exterior = formulario.exterior,
            error = document.getElementById("errorExterior");


        if(exterior.value == '' || exterior.value == null){
            error.style.display = "block";

            
        } else {
            error.style.display = "none";

            return true;
        }
    }


    function validarCountry(e){
        var country = document.getElementById("country"),
            error = document.getElementById("errorCountry");


        if(country.value == '' || country.value == null){
            error.style.display = "block";

            
        } else {
            error.style.display = "none";

            return true;
        }
    }


    //////  Encuesta Completada   /////////////////


    function validarCompletado(e){
        var completado = formulario.completado,
            error = document.getElementById("errorCompletado");


        if(completado.value == '' || completado.value == null){
            error.style.display = "block";

            
        } else {
            error.style.display = "none";

            return true;
        }
    }


    //////  Medios de Transporte   /////////////////


    var validarTransporte = function(){
        var opciones = document.getElementsByName("transporte"),
            error = document.getElementById("errorTransporte"),
            resultado = false;

        for(var i = 0; i < elementos.length; i++){
            if (elementos[i].type == "checkbox") {
                for (var o = 0; o < opciones.length; o++) {
                    if (opciones[o].checked){
                        resultado = true;
                        break;
                    }
                }

                if(resultado == false || resultado == null){
                    error.style.display = "block";
    
                      return false;
                  } else {
                    error.style.display = "none";
                    return true;
                }
                
        
            }
        }
    }

    //////  Datos de Contacto   /////////////////

    
    var validarResidencia = function(){
        var opciones = document.getElementsByName("direccion"),
            error = document.getElementById("errorInformacion"),
            resultado = false;

            for(var i = 0; i < elementos.length; i++){
                if (elementos[i].type == "radio" && elementos[i].name == "direccion") {
                    for (var o = 0; o < opciones.length; o++) {
                        if (opciones[o].checked){
                            resultado = true;
                            break;
                        }
                    }

                    if(resultado == false || resultado == null){
                        error.style.display = "block"; 
                            return false;
                    } else {
                        error.style.display = "none";
                            return true;
                    }
                    
            
                }
            }
        }


        function validarHabitacion(e){
            var habitacion = document.getElementById("habitacion"),
                error = document.getElementById("errorHabitacion");
    
    
            if(habitacion.value == '' || habitacion.value == null){
                error.style.display = "block";
    
                
            } else {
                error.style.display = "none";
    
                return true;
            }
        }


        function validarCelular(e){
            var celular = document.getElementById("celular"),
                error = document.getElementById("errorCelular");
    
    
            if(celular.value == '' || celular.value == null){
                error.style.display = "block";
    
                
            } else {
                error.style.display = "none";
    
                return true;
            }
        }


        function validarNumeroContacto(e){
            var numeroContacto = document.getElementById("numeroContacto"),
                error = document.getElementById("errorNumero");
    
    
            if(numeroContacto.value == '' || numeroContacto.value == null){
                error.style.display = "block";
    
                
            } else {
                error.style.display = "none";
    
                return true;
            }
        }


        function validarCorreo(e){
            var correo = document.getElementById("correo"),
                error = document.getElementById("errorCorreo");
    
    
            if(correo.value == '' || correo.value == null){
                error.style.display = "block";
    
                
            } else {
                error.style.display = "none";
    
                return true;
            }
        }


   



    //////  Validaciones   /////////////////


        var validarDatos = function (e) {
            if (!validarCedula()){
                console.log("Por favor completar la cedula");
                e.preventDefault();
            } else if (!validarCondicion()){
                console.log("Por favor completar las condiciones");
                e.preventDefault();
            } else if (!validarCampaña()){
                console.log("Por favor indicar en cual campaña realiza el curso");
                e.preventDefault();
            } else if (!validarFecha()){
                console.log("Por favor completar la fecha");
                e.preventDefault();
            } else if (!validarSexo()){
                console.log("Por favor indicar sexo");
                e.preventDefault();
            } else if (!validarSalud()){
                console.log("Por favor indicar su estado de salud");
                e.preventDefault();
            } else if (!validarMalestar()){
                console.log("Por favor indicar si lo ha visto un medico por el malestar presentado");
                e.preventDefault();
            } else if (!validarServicio()){
                console.log("Por favor indicar si necesita acudir a servicio medico");
                e.preventDefault();
            } else if (!validarGarganta()){
                console.log("Por favor indicar que sintomas posee");
                e.preventDefault();
            } else if (!validarFiebre()){
                console.log("Por favor indicar que sintomas posee");
                e.preventDefault();
            } else if (!validarTos()){
                console.log("Por favor indicar que sintomas posee");
                e.preventDefault();
            } else if (!validarRespirar()){
                console.log("Por favor indicar que sintomas posee");
                e.preventDefault();
            } else if (!validarMuscular()){
                console.log("Por favor indicar que sintomas posee");
                e.preventDefault();
            } else if (!validarNasal()){
                console.log("Por favor indicar que sintomas posee");
                e.preventDefault();
            } else if (!validarDiarrea()){
                console.log("Por favor indicar que sintomas posee");
                e.preventDefault();
            } else if (!validarCabeza()){
                console.log("Por favor indicar que sintomas posee");
                e.preventDefault();
            } else if (!validarFatiga()){
                console.log("Por favor indicar que sintomas posee");
                e.preventDefault();
            } else if (!validarGusto()){
                console.log("Por favor indicar que sintomas posee");
                e.preventDefault();
            } else if (!validarOlfato()){
                console.log("Por favor indicar que sintomas posee");
                e.preventDefault();
            } else if (!validarNauseas()){
                console.log("Por favor indicar que sintomas posee");
                e.preventDefault();
            } else if (!validarMedica()){
                console.log("Por favor indicar su condicion medica");
                e.preventDefault();
            } else if (!validarContacto()){
                console.log("Por favor indicar si conoce alguna persona con Covid-19");
                e.preventDefault();
            } else if (!validarFamiliares()){
                console.log("Por favor indicar que relacion tiene la persona diagnosticada");
                e.preventDefault();
            } else if (!validarSintomasPersonas()){
                console.log("Por favor indicar si ha estado en contacto con personas que presenten dichos sintomas");
                e.preventDefault();
            } else if (!validarFamilia()){
                console.log("Por favor indicar con que persona tuvo contacto");
                e.preventDefault();
            } else if (!validarDiagnostico()){
                console.log("Por favor indicar si estuvo en contacto directo con una persona que haya sido diagnosticada");
                e.preventDefault();
            } else if (!validarFamily()){
                console.log("Por favor indicar con que persona que haya sido diagnosticada tuvo contacto directo");
                e.preventDefault();
            } else if (!validarViaje()){
                console.log("Por favor indicar si tienes a una persona que haya viajado o regresado del exterior");
                e.preventDefault();
            } else if (!validarPais()){
                console.log("Por favor indicar a que pais viajo o de cual regreso");
                e.preventDefault();
            } else if (!validarExterior()){
                console.log("Por favor indicar si estuvo en contacto con una persona que haya viajado o regresado del exterior");
                e.preventDefault();
            } else if (!validarCountry()){
                console.log("Por favor indicar a que pais viajo o de cual regreso la persona");
                e.preventDefault();
            } else if (!validarCompletado()){
                console.log("Por favor indicar si ha completado esta encuesta anteriormente");
                e.preventDefault();
            } else if (!validarTransporte()){
                console.log("Por favor indicar el medio de transporte utilizado");
                e.preventDefault();
            } else if (!validarResidencia()){
                console.log("Por favor indicar la zona donde resides");
                e.preventDefault();
            } else if (!validarHabitacion()){
                console.log("Por favor indicar direccion de habitacion");
                e.preventDefault();
            } else if (!validarCelular()){
                console.log("Por favor indicar telefono celular");
                e.preventDefault();
            } else if (!validarNumeroContacto()){
                console.log("Por favor indicar numero de contacto altero");
                e.preventDefault();
            } else if (!validarCorreo()){
                console.log("Por favor indicar correo electronico");
                e.preventDefault();
            } else {
                console.log("Datos Recibidos");
            }



        }
    
        


        /////// Eventos /////////

        btn.addEventListener("click", validarDatos);

        
    
}())