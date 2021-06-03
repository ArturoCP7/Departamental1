/*Controlador*/
var idSeleccionadoParaEliminar = 0;
//var idSeleccionEliminar = 0;
var idSeleccionadoParaActualizar = 0;

function actionCreate(){
        var tabla                = $('#example1').DataTable();

        var actividad_create          = document.getElementById("actividad_create").value;
        var fecha_inicio_create       = document.getElementById("fecha_inicio_create").value;
        var fecha_fin_create          = document.getElementById("fecha_fin_create").value;
        var horas_create              = document.getElementById("horas_create").value;
        var archivo_create            = document.getElementById("archivo_create").value;
        var observaciones_create      = document.getElementById("observaciones_create").value;

        $.ajax({
                url: "php/crud-constancia.php",
                method: 'POST', 
                data: {
                  actividad         : actividad_create,
                  fecha_inicio      : fecha_inicio_create,
                  fecha_fin         : fecha_fin_create,
                  horas             : horas_create,
                  archivo           : archivo_create,
                  observaciones     : observaciones_create,
                  accion            : 'Create'  
                },
                success: function( Resultado ) {
                     var objetoJSON = JSON.parse(Resultado);
                        if(objetoJSON.estado == 1){
                                                          
                                var botones = '<a class="btn btn-info btn-sm" data-toggle="modal" data-target="#modal-lg-actualizar" onclick="recuperaDatosUpdate('+objetoJSON.id+');" href="#">';
                                botones = botones + '<i class="fas fa-pencil-alt">';
                                botones = botones + '</i>';
                                botones = botones + ' Actualizar';
                                botones = botones + '</a>';
                                botones = botones + ' <a class="btn btn-danger btn-sm" data-toggle="modal" data-target="#modal-default" onclick="idSeleccionEliminar('+objetoJSON.id+');" href="#">';
                                botones = botones + '<i class="fas fa-trash">';
                                botones = botones + '</i>';
                                botones = botones + ' Eliminar';
                                botones = botones + '</a>';

                                tabla.row.add([  
                                        actividad_create,
                                        fecha_inicio_create,
                                        fecha_fin_create,
                                        botones
                                ]).node().id = 'renglon_'+objetoJSON.id;
                                        
                                tabla.draw(false);
                              
                                       
                                alert(objetoJSON.mensaje);
                                $('#modal-lg').modal ('hide'); 

                        }else{
                                alert(objetoJSON.mensaje);
                        }

                        alert("Respuesta del servidor: " + Resultado);
                }
        });
}

function actionRead(){
        //GET
        $.ajax({
            url: "php/crud-constancia.php",
            method: 'GET',
                data: {
                accion       : 'Read'
                },
                success: function( Resultado ){
                        var objetoJSON = JSON.parse(Resultado);
                        if(objetoJSON.estado == 1){
                           
                                var tabla         = $('#example1').DataTable();
                                
                                for(var constancia of objetoJSON.constancias){
                                    
                                        var botones = '<a class="btn btn-info btn-sm" data-toggle="modal" data-target="#modal-lg-actualizar" onclick="recuperaDatosUpdate('+constancia.id+');" href="#">';
                                        botones = botones + '<i class="fas fa-pencil-alt">';
                                        botones = botones + '</i>';
                                        botones = botones + ' Actualizar';
                                        botones = botones + '</a>';
                                        botones = botones + ' <a class="btn btn-danger btn-sm" data-toggle="modal" data-target="#modal-default" onclick="idSeleccionEliminar('+constancia.id+');" href="#">';
                                        botones = botones + '<i class="fas fa-trash">';
                                        botones = botones + '</i>';
                                        botones = botones + ' Eliminar';
                                        botones = botones + '</a>';

                                        tabla.row.add([    
                                        constancia.actividad,
                                        constancia.fecha_inicio,
                                        constancia.fecha_fin,
                                        botones
                                        ]).node().id = 'renglon_'+constancia.id;

                                        tabla.draw(false);
                                }
                        }else{
                               
                        }
                }
        });
}

function actionDelete(){
        //DELETE
        $.ajax({
                url: "php/crud-constancia.php",
                method: 'POST',
                    data: {
                    id: idSeleccionadoParaEliminar,
                    accion: 'Delete'
                    },
                    success: function( Resultado ){
                            var objetoJSON = JSON.parse(Resultado);
                            if(objetoJSON.estado==1){
                                    
                             
                                    var tabla = $('#example1').DataTable();
                               
                                tabla.row( "#renglon_"+idSeleccionadoParaEliminar).remove().draw();
                            }
                            alert(objetoJSON.mensaje); 
                            $('#modal-default').modal ('hide'); 
                    }
                });
}

function actionUpdate(){
        //PUT
   
        var actividad_update          = document.getElementById("actividad_update").value;
        var fecha_inicio_update       = document.getElementById("fecha_inicio_update").value;
        var fecha_fin_update          = document.getElementById("fecha_fin_update").value;
        var horas_update              = document.getElementById("horas_update").value;
        var archivo_update            = document.getElementById("archivo_update").value;
        var observaciones_update      = document.getElementById("observaciones_update").value;

        $.ajax({
                url: "php/crud-constancia.php",
                method: 'POST',
                data: {
                        id :  idSeleccionadoParaActualizar,
                        actividad         : actividad_update ,
                        fecha_inicio      : fecha_inicio_update ,
                        fecha_fin         : fecha_fin_update ,
                        horas             : horas_update ,
                        archivo           : archivo_update ,
                        observaciones     : observaciones_update ,
                        accion            : 'Update'  
                      },
                    success: function( resultado ){
                            var objetoJSON = JSON.parse(resultado);
                            if(objetoJSON.estado==1){
                                alert(objetoJSON.mensaje);
                               
                                var tabla = $('#example1').DataTable();

                               
                                var renglon = tabla.row("#renglon_"+idSeleccionadoParaActualizar).data();

                              
                                renglon[0]=actividad_update;
                                renglon[1]=fecha_inicio_update;
                                renglon[2]=fecha_fin_update;
                                

                               
                                tabla.row("#renglon_"+idSeleccionadoParaActualizar).data(renglon);

                                $('#modal-lg-actualizar').modal ('hide'); 
                            }else{
                                alert(objetoJSON.mensaje);
                            }
                }
        });
}

function recuperaDatosUpdate(id){
        idSeleccionadoParaActualizar=id;
        $.ajax({
                url: "php/crud-constancia.php",
                method: 'GET',
                    data: {
                    id: idSeleccionadoParaActualizar,
                    accion       : 'Read'
                    },
                    success: function( resultado ){
                            var objetoJSON = JSON.parse(resultado);
                            if(objetoJSON.estado==1){
                                
                                $("#actividad_update").val(objetoJSON.actividad); 
                                $("#fecha_inicio_update").val(objetoJSON.fecha_inicio);
                                $("#fecha_fin_update").val(objetoJSON.fecha_fin);
                                $("#horas_update").val(objetoJSON.horas);
                                $("#archivo_update").val(objetoJSON.archivo);
                                $("#observaciones_update").val(objetoJSON.observaciones);

                            }else{
                                alert(objetoJSON.mensaje);
                            }
                }
        });
}

function idSeleccionEliminar(id){
        idSeleccionadoParaEliminar = id;
    
}