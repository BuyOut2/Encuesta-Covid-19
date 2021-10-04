$(document).ready(function(){


        var campaña = $('#Campaña'),
            meli = $('#meli'),
            ubii = $('#ubii'),
            fecha = $('#Fecha'),
            sexo = $('#Sexo'),
            salud = $('#Salud'),
            sintomas =  $('#Sintomas'),
            fiebre = $('#fiebreOculto'),
            tos = $('#tosOculto'),
            respirar = $('#respirarOculto'),
            muscular = $('#muscularOculto'),
            nasal = $('#nalsalOculto'),
            diarrea = $('#diarreaOculto'),
            cabeza = $('#cabezaOculto'),
            fatiga = $('#fatigaOculto'),
            gusto = $('#gustoOculto'),
            olfato = $('#olfatoOculto'),
            nauseas = $('#nauseasOculto'),
            medico = $('#Medico'),
            servicio =  $('#Servicio'),
            condicionMedica = $('#CondicionMedica'),
            contacto = $('#Contacto'),
            contacto1 = $('#Contacto1'),
            contacto2 = $('#Contacto2'),
            contacto3 = $('#Contacto3'),
            familiares = $('#Familiares'),
            familia = $('#Familia'),
            family = $('#Family'),
            pais = $('#Pais'),
            country = $('#Country'),
            completado = $('#Completado'),
            transporte = $('#Transporte'),
            datosContacto = $('#DatosContacto');



        function ocultar (){

            campaña.hide();
            meli.hide();
            ubii.hide();
            fecha.hide();
            sexo.hide();
            salud.hide();
            sintomas.hide();
            fiebre.hide();
            tos.hide();
            respirar.hide();
            muscular.hide();
            nasal.hide();
            diarrea.hide();
            cabeza.hide();
            fatiga.hide();
            gusto.hide();
            olfato.hide();
            nauseas.hide();
            medico.hide();
            servicio.hide();
            condicionMedica.hide();
            contacto.hide();
            contacto1.hide();
            contacto2.hide();
            contacto3.hide();
            familiares.hide();
            familia.hide();
            family.hide();
            pais.hide();
            country.hide();
            completado.hide();
            transporte.hide();
            datosContacto.hide();
        }

        ocultar();


        function mostrar (){
            var mostrarCampaña = $('#personalCurso'),
                mostrarCampaña1 = $('#candidatoSeleccion'),
                mostrarCampaña2 = $('#personalActivo'),
                mostrarCampaña3 = $('#visitante');

            mostrarCampaña.on('click', function(){
                $(campaña).show();
                $(fecha).hide();
                $(sexo).hide();

                  
            });

            mostrarCampaña1.on('click', function(){
                $(campaña).hide();
                $(fecha).show();
                $(sexo).show();
              
            });

            mostrarCampaña2.on('click', function(){
                $(campaña).hide();
                $(fecha).show();
                $(sexo).show();
      
            });

            mostrarCampaña3.on('click', function(){
                $(campaña).hide();
                $(fecha).show();
                $(sexo).show();
      
            });
        }

        mostrar ();



        function mostrar2 (){
            var mostrarFecha = $('#mercadolibre'),
                mostrarFecha1 = $('#toyota'),
                mostrarFecha2 = $('#tandem'),
                mostrarFecha3 = $('#linde'),
                mostrarFecha4 = $('#ubiiPagos'),
                mostrarFecha5 = $('#inter');

                
                mostrarFecha.on('click', function(){
                    $(meli).show();
                    $(ubii).hide();
                    $(fecha).show();
                    $(sexo).show();
                });
                
                mostrarFecha1.on('click', function(){
                    $(meli).hide();
                    $(ubii).hide();
                    $(fecha).show();
                    $(sexo).show();
                });
            
                mostrarFecha2.on('click', function(){
                    $(meli).hide();
                    $(ubii).hide();
                    $(fecha).show();
                    $(sexo).show();
                });

                mostrarFecha3.on('click', function(){
                    $(meli).hide();
                    $(ubii).hide();
                    $(fecha).show();
                    $(sexo).show();
                });

                mostrarFecha4.on('click', function(){
                    $(meli).hide();
                    $(ubii).show();
                    $(fecha).show();
                    $(sexo).show();
                });
                
                mostrarFecha5.on('click', function(){
                    $(meli).hide();
                    $(ubii).hide();
                    $(fecha).show();
                    $(sexo).show();
                });

        }


        mostrar2();


        function mostrar3 (){
            var mostrarSalud = $('#mujer'),
                mostrarSalud1 = $('#hombre');

            mostrarSalud.on('click', function(){
                    $(salud).show();          
            });

            mostrarSalud1.on('click', function(){
                $(salud).show();          
        });
        }

        mostrar3 ();



        function mostrar4 (){
            var mostrarServicio = $('#buenonmalo'),
                mostrarMedico = $('#malo'),
                mostrarServicioMedico = $('#muymalo'),
                mostrarSintomas2 = $('#malestarSi'),
                mostrarSintomas3 = $('#malestarNo'),
                mostrarSintomas4 = $('#servicioSi'),
                mostrarSintomas5 = $('#servicioNo');

            mostrarServicio.on('click', function(){
                    medico.show();
                    servicio.show();
                    sintomas.hide();      
            });

            mostrarMedico.on('click', function(){
                    medico.show();
                    servicio.show();
                    sintomas.hide(); 
                           
            });

            mostrarServicioMedico.on('click', function(){
                    medico.show();
                    servicio.show();
                    sintomas.hide();        
            });


            mostrarSintomas2.on('click', function(){
                    sintomas.show();       
            });

            mostrarSintomas3.on('click', function(){
                    sintomas.show();      
            });

            mostrarSintomas4.on('click', function(){
                    sintomas.show();        
            });

            mostrarSintomas5.on('click', function(){
                    sintomas.show();        
            });
        }

        mostrar4 ();


        
        function mostrar5 (){
            var mostrarSintomas = $('#muybueno'),
                mostrarSintomas1 = $('#bueno');


            mostrarSintomas.on('click', function(){
                    sintomas.show();
                    medico.hide();
                    servicio.hide(); 
                           
            });

            mostrarSintomas1.on('click', function(){
                    sintomas.show();
                    medico.hide();
                    servicio.hide();   
            });

        }

        mostrar5 ();


        function mostrarOpcionesSintomas (){
            var mostrarFiebre = $('#gargantasi'),
                mostrarFiebre1 = $('#gargantano'),
                mostrarTos = $('#fiebresi'),
                mostrarTos1 = $('#fiebreno'),
                mostrarRespirar = $('#tossi'),
                mostrarRespirar1 = $('#tosno'),
                mostrarMuscular = $('#respirarsi'),
                mostrarMuscular1 = $('#respirarno'),
                mostrarNasal = $('#muscularsi'),
                mostrarNasal1 = $('#muscularno'),
                mostrarDiarrea = $('#nasalsi'),
                mostrarDiarrea1 = $('#nasalno'),
                mostrarCabeza = $('#diarreasi'),
                mostrarCabeza1 = $('#diarreano'),
                mostrarFatiga = $('#cabezasi'),
                mostrarFatiga1 = $('#cabezano'),
                mostrarGusto = $('#fatigasi'),
                mostrarGusto1 = $('#fatigano'),
                mostrarOlfato = $('#gustosi'),
                mostrarOlfato1 = $('#gustono'),
                mostrarNauseas = $('#olfatosi'),
                mostrarNauseas1 = $('#olfatono');


                mostrarFiebre.on('click', function(){
                        fiebre.show();
                });

                mostrarFiebre1.on('click', function(){
                        fiebre.show();
                });

                mostrarTos.on('click', function(){
                        tos.show();
                });

                mostrarTos1.on('click', function(){
                        tos.show();
                });

                mostrarRespirar.on('click', function(){
                        respirar.show();
                });

                mostrarRespirar1.on('click', function(){
                        respirar.show();
                });

                mostrarMuscular.on('click', function(){
                        muscular.show();
                });

                mostrarMuscular1.on('click', function(){
                        muscular.show();
                });

                mostrarNasal.on('click', function(){
                        nasal.show();
                });

                mostrarNasal1.on('click', function(){
                        nasal.show();
                });

                mostrarDiarrea.on('click', function(){
                        diarrea.show();
                });

                mostrarDiarrea1.on('click', function(){
                        diarrea.show();
                });

                mostrarCabeza.on('click', function(){
                        cabeza.show();
                });

                mostrarCabeza1.on('click', function(){
                        cabeza.show();
                });

                mostrarFatiga.on('click', function(){
                        fatiga.show();
                });

                mostrarFatiga1.on('click', function(){
                        fatiga.show();
                });

                mostrarGusto.on('click', function(){
                        gusto.show();
                });

                mostrarGusto1.on('click', function(){
                        gusto.show();
                });

                mostrarOlfato.on('click', function(){
                        olfato.show();
                });

                mostrarOlfato1.on('click', function(){
                        olfato.show();
                });

                mostrarNauseas.on('click', function(){
                        nauseas.show();
                });

                mostrarNauseas1.on('click', function(){
                        nauseas.show();
                });

        }

        mostrarOpcionesSintomas ();


        function mostrar6 (){
            var mostrarCondicion = $('#nauseassi'),
                mostrarCondicion1 = $('#nauseasno');


            mostrarCondicion.on('click', function(){
                    condicionMedica.show();       
            });

            mostrarCondicion1.on('click', function(){
                    condicionMedica.show();    
            });

        }

        mostrar6 ();


        function mostrar7 (){
            var mostrarContacto = $('#diabetes'),
                mostrarContacto1 = $('#arterial'),
                mostrarContacto2 = $('#respiratoria'),
                mostrarContacto3 = $('#sistema'),
                mostrarContacto4 = $('#renal'),
                mostrarContacto5 = $('#cardiaca'),
                mostrarContacto6 = $('#ninguna'),
                mostrarContacto7 = $('#otro');


            mostrarContacto.on('click', function(){
                    contacto.show();       
            });

            mostrarContacto1.on('click', function(){
                    contacto.show();    
            });

            mostrarContacto2.on('click', function(){
                    contacto.show();       
            });

            mostrarContacto3.on('click', function(){
                    contacto.show();      
            });

            mostrarContacto4.on('click', function(){
                    contacto.show();        
            });

            mostrarContacto5.on('click', function(){
                    contacto.show();        
            });

            mostrarContacto6.on('click', function(){
                    contacto.show();        
            });

            mostrarContacto7.on('click', function(){
                    contacto.show();        
            });
        }

        mostrar7 ();



        function mostrar8 (){
            var mostrarFamiliares = $('#contactosi'),
                mostrarFamiliares1 = $('#contactono'),
                mostrarFamiliares2 = $('#vive'),
                mostrarFamiliares3 = $('#novive'),
                mostrarFamiliares4 = $('#dentro'),
                mostrarFamiliares5 = $('#fuera');
                


            mostrarFamiliares.on('click', function(){
                    familiares.show();       
            });

            mostrarFamiliares1.on('click', function(){
                    contacto1.show();
                    familiares.hide();  
            });

            mostrarFamiliares2.on('click', function(){
                    contacto1.show();       
            });

            mostrarFamiliares3.on('click', function(){
                    contacto1.show();      
            });

            mostrarFamiliares4.on('click', function(){
                    contacto1.show();        
            });

            mostrarFamiliares5.on('click', function(){
                contacto1.show();        
            });

        }

        mostrar8 ();


        function mostrar9 (){
            var mostrarFamilia = $('#sinomasSi'),
                mostrarFamilia1 = $('#sintomasNo'),
                mostrarFamilia2 = $('#vivesi'),
                mostrarFamilia3 = $('#viveno'),
                mostrarFamilia4 = $('#amigodentro'),
                mostrarFamilia5 = $('#amigofuera'),
                mostrarFamilia6 = $('#diagnosticoSi'),
                mostrarFamilia7 = $('#diagnosticoNo');
                


            mostrarFamilia.on('click', function(){
                    familia.show();       
            });

            mostrarFamilia1.on('click', function(){
                    contacto2.show(); 
                    familia.hide();   
            });

            mostrarFamilia2.on('click', function(){
                    contacto2.show();       
            });

            mostrarFamilia3.on('click', function(){
                    contacto2.show();      
            });

            mostrarFamilia4.on('click', function(){
                    contacto2.show();        
            });

            mostrarFamilia5.on('click', function(){
                contacto2.show();        
            });

            mostrarFamilia6.on('click', function(){
                family.show();       
            });

            mostrarFamilia7.on('click', function(){
                contacto2.show();
                family.hide();    
            });

        }

        mostrar9 ();


        function mostrar10 (){
            var mostrarPais = $('#viajeSi'),
                mostrarPais1 = $('#viajeNo');
                
                
            mostrarPais.on('click', function(){
                    pais.show();
                    contacto3.show();      
            });

            mostrarPais1.on('click', function(){
                pais.hide();
                contacto3.show();       
            });
    

        }

        mostrar10 ();


        function mostrar11 (){
            var mostrarExterior = $('#exteriorSi'),
                mostrarExterior1 = $('#exteriorNo');
                
                
            mostrarExterior.on('click', function(){
                    country.show();
                    completado.show();      
            });

            mostrarExterior1.on('click', function(){
                    country.hide();
                    completado.show();       
            });
    

        }

        mostrar11 ();



        function mostrar12 (){
            var mostrarCompletado = $('#completadoSi'),
                mostrarCompletado1 = $('#completadoNo');
                
                
            mostrarCompletado.on('click', function(){
                    transporte.show();
            });

            mostrarCompletado1.on('click', function(){
                    transporte.show();
                    datosContacto.show();       
            });
    

        }

        mostrar12 ();



        

});