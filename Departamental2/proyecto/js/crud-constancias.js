/*Controlador*/
function actionCreate() {
    var tabla = $('#example1').DataTable();

    var eje_tematico_create = document.getElementById("eje_tematico_create").value;
    var modalidad_create    = document.getElementById("modalidad_create").value;
    var descripcion_create  = document.getElementById("descripcion_create").value;
    var factor_create       = document.getElementById("factor_create").value;
    var ejemplos_create     = document.getElementById("ejemplos_create").value;

    $.ajax({
        url: "php/crud-denominacion.php", 
        method:'POST',
        data: {
            eje_tematico    : eje_tematico_create,
            modalidad       : modalidad_create,
            descripcion     : descripcion_create,
            factor          : factor_create,
            ejemplos        : ejemplos_create,
            accion          : 'Create'
        },
        success: function(resultado){
            var objetoJSON = JSON.parse(resultado);

            if(objetoJSON.estado==1){
            var botones             ='<a class="btn btn-info btn-sm" data-toggle="modal" data-target="#modal-lg-actualizar" href="#">';
            botones = botones+'<i class="fas fa-pencil-alt">';
            botones = botones+'</i>';
            botones = botones+' Actualizar';
            botones = botones+ '</a>';
            botones = botones+'<a class="btn btn-danger btn-sm" data-toggle="modal" data-target="#modal-default" href="#">';
            botones = botones+ '<i class="fas fa-trash">';
            botones = botones+'</i>';
            botones = botones+' Eliminar';
            botones = botones+'</a>';

            tabla.row.add( [
                eje_tematico_create,
                modalidad_create,
                descripcion_create,
                botones
            ] ).draw(false);

            alert(objetoJSON.mensaje);
        }else{
            alert(objetoJSON.mensaje);
        }
    }
});
}

function actionRead(){
    //GET
    $.ajax({
        url: "php/crud-denominacion.php", 
        method:'GET',
        data: {
          accion          : 'Read'
        },
        success: function(resultado){
            var objetoJSON = JSON.parse(resultado);
            if(objetoJSON.estado==1){

                var tabla = $('#example1').DataTable();
                for(var denominacion of objetoJSON.denominaciones){

                    var botones             ='<a class="btn btn-info btn-sm" data-toggle="modal" data-target="#modal-lg-actualizar" href="#">';
                    botones = botones+'<i class="fas fa-pencil-alt">';
                    botones = botones+'</i>';
                    botones = botones+' Actualizar';
                    botones = botones+ '</a>';
                    botones = botones+'<a class="btn btn-danger btn-sm" data-toggle="modal" data-target="#modal-default" onclick="idSeleccionEliminar('+denominacion.id+');" href="#">';
                    botones = botones+ '<i class="fas fa-trash">';
                    botones = botones+'</i>';
                    botones = botones+' Eliminar';
                    botones = botones+'</a>';

                    tabla.row.add( [
                        denominacion.eje_tematico,
                        denominacion.modalidad,
                        denominacion.descripcion,
                        botones
                    ] ).node().id = "renglon_"+denominacion.id;
                    tabla.draw(false);
                }

                for(i in objetoJSON.denominaciones){
                    alert("id: "+objetoJSON.denominaciones[i].id);
                    alert("id: "+objetoJSON.denominaciones[i].eje_tematico);
                    alert("id: "+objetoJSON.denominaciones[i].modalidad);
                    alert("id: "+objetoJSON.denominaciones[i].descripcion);
                }
            }else{

            }
        }
    });
}

function actionUpdate(){
    alert("Actualizar registro(U pdate)")
    
}

function actionDelete(){
    //DELETE
    $.ajax({
        url: "php/crud-denominacion.php",
        method:'POST',
        data:{
            id: idSeleccionadoParaEliminar,
            accion          : 'Delete'
        },
        sucess: function(resultado){
            var objetoJSON = JSON.parse(resultado);
            if(objetoJSON.estado==1){
                var tabla = $('$example1').DataTable();
                tabla.row("#renglon_"+idSeleccionadoParaEliminar).remove().draw();
            }
            alert(objetoJSON.mensaje);
        }
    });
}

function idSeleccionEliminar(id){
    idSeleccionadoParaEliminar = id;
}