<?php

    include("conexion.php");

    if(isset($_POST['accion']))
        $accion         = $_POST['accion'];
    if(isset($_GET['accion']))
        $accion         = $_GET['accion'];

    switch($accion){
        case 'Create':
            accionCreatePHP($conexion);
            break;
        case 'Read':
            accionReadPHP($conexion);
            break;
        case 'Delete':
            accionDeletePHP();
            break;
        case 'Update':
            accionUpdatePHP();
            break;

        default:
            # code...
            break;
    }

function accionCreatePHP($conexion){
    $eje_tematico       = $_POST['eje_tematico'];
    $modalidad          = $_POST['modalidad'];
    $descripcion        = $_POST['descripcion'];
    $factor             = $_POST['factor'];
    $ejemplos           = $_POST['ejemplos'];

    $Query  = "INSERT INTO denominacion (id, eje_tematico, modalidad, descripcion, factor, ejemplos) VALUES (NULL, '".$eje_tematico."', '".$modalidad."', '".$descripcion."', '".$factor."', '".$ejemplos."')";;

    $Resultado=mysqli_query($conexion,$Query);

    $Respuesta = array(); 
    //JSON {"estado": 1, "mensaje":"La información se guardo correctamente","id":26}
    //JSON {"estado": 0, "mensaje": "Ocurrio un error desconocido", "id":-1}

    if($Resultado>=1){
        //todo OK
        //JSON {"estado":1, "mensaje":"La información se guardo correctamente","id":26}
            $Respuesta["estado"]=1;
            $Respuesta["mensaje"]="La información se guardo correctamente";
            $Respuesta["id"]=mysqli_insert_id($conexion);
            echo json_encode($Respuesta);
    }else{
        //No todo OK
        //JSON {"estado": 0, "mensaje": "Ocurrio un error desconocido", "id":-1}
            $Respuesta["estado"]=0;
            $Respuesta["mensaje"]="Ocurrio un error desconocido";
            $Respuesta["id"]=-1;
            echo json_encode($Respuesta);
    }
}

function accionReadPHP($conexion){
    $Respuesta = array(); 
    $Query="SELECT *FROM denominacion";

    $Resultado=mysqli_query($conexion,$Query);

    $numeroRegistros=mysqli_num_rows($Resultado);

    if(numeroRegistros>=1){
        $Respuesta["estado"]  = 1;
        $Respuesta["mensaje"] = "Si hay registros para mostrar";
        $Respuesta["denominaciones"] = array();

            while($Registro=mysqli_fetch_array($Resultado)){
                $objetoDenominacion = array();

                $objetoDenominacion["id"]                 =$Registro["id"];
                $objetoDenominacion["eje_tematico"]       =$Registro["eje_tematico"];
                $objetoDenominacion["modalidad"]          =$Registro["modalidad"];
                $objetoDenominacion["descripcion"]        =$Registro["descripcion"];
                $objetoDenominacion["factor"]             =$Registro["factor"];
                $objetoDenominacion["ejemplos"]           =$Registro["ejemplos"];

                array_push($Respuesta["denominaciones"],$objetoDenominacion);
            }
    }else{
        $Respuesta["estado"]  = 0;
        $Respuesta["mensaje"] = "No hay registros para mostrar";
    }
    echo json_encode($Respuesta);
}

public function accionDeletePHP($conexion)
{
    $Respuesta = array();
    $id = $_POST["id"];

    $Query = "DELETE FROM denominacion WHERE denominacion.id=   ".$id;
    $Resultado=mysqli_query($conexion,$Query);
    echo $Query ."".mysqli_affected_rows($conexion);

    if($numeroRegistros>=1){
        $Respuesta["estado"]  = 1;
        $Respuesta["mensaje"] = "El registro se elimino correctamente";
    }else{
        $Respuesta["estado"]  = 0;
        $Respuesta["mensaje"] = "Ocurrió un error desconocido";
    }

    echo json_encode($Respuesta);
}

public function accionUpdatePHP()
{
    //DELETE
}
?>