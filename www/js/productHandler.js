var productHandler={
    addCedulayb: function(id_usuario,nombre_usuario,fecha_entrada,geolocalizacion_entrada,id_cliente,nombre_cliente,horario_programado,estatus){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into cedulas_general(id_usuario,nombre_usuario,fecha_entrada,geolocalizacion_entrada,id_cliente,nombre_cliente,horario_programado,estatus) values(?,?,?,?,?,?,?,?)",
                    [id_usuario,nombre_usuario,fecha_entrada,geolocalizacion_entrada,id_cliente,nombre_cliente,horario_programado,estatus],
                    function(tx, results){
                        // console.log("Registro de cedula creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error registrar cedula general:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    addCedulaCompleta: function(id_usuario,nombre_usuario,fecha_entrada,geolocalizacion_entrada,id_cliente,nombre_cliente,horario_programado,estatus,tipo){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into cedulas_general(id_usuario,nombre_usuario,fecha_entrada,geolocalizacion_entrada,id_cliente,nombre_cliente,horario_programado,estatus,tipo_cedula) values(?,?,?,?,?,?,?,?,?)",
                    [id_usuario,nombre_usuario,fecha_entrada,geolocalizacion_entrada,id_cliente,nombre_cliente,horario_programado,estatus,tipo],
                    function(tx, results){
                        // console.log("Registro de cedula creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error registrar cedula general:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    addLevantamiento: function(id_cedula,foto_entrada,nombre_cliente,direccion){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into levantamiento_servicio(id_cedula,foto_entrada,nombre_cliente,direccion) values(?,?,?,?)",
                    [id_cedula,foto_entrada,nombre_cliente,direccion],
                    function(tx, results){
                        // console.log("Registro de levantamiento creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar levantamiento:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    addFumigacion: function(id_cedula,foto_entrada,sucursal,direccion,persona_recibe,documento_ingresar,alcance_servicio){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into fumigacion(id_cedula,foto_entrada,sucursal,direccion,persona_recibe,documento_ingresar,alcance_servicio) values(?,?,?,?,?,?,?)",
                    [id_cedula,foto_entrada,sucursal,direccion,persona_recibe,documento_ingresar,alcance_servicio],
                    function(tx, results){
                        // console.log("Registro de fumigacion creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar levantamiento:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    addSanitizacion: function(id_cedula,foto_entrada,sucursal,direccion,persona_recibe,documento_ingresar){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into sanitizacion(id_cedula,foto_entrada,sucursal,direccion,persona_recibe,documento_ingresar) values(?,?,?,?,?,?)",
                    [id_cedula,foto_entrada,sucursal,direccion,persona_recibe,documento_ingresar],
                    function(tx, results){
                        // console.log("Registro de sanitizacion creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar levantamiento:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    //SMC
    addLevantamientoSMC: function(id_cedula,foto_entrada,nombre_cliente,nombre_contacto,telefono_contacto,correo_contacto,orden_servicio,id_visita){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into levantamiento_smc(id_cedula,foto_entrada,nombre_cliente,nombre_contacto,telefono_contacto,correo_contacto,orden_servicio,id_visita) values(?,?,?,?,?,?,?,?)",
                    [id_cedula,foto_entrada,nombre_cliente,nombre_contacto,telefono_contacto,correo_contacto,orden_servicio,id_visita],
                    function(tx, results){
                        // console.log("Registro de levantamiento SMC creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar levantamiento:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    addLevantamientoSMCC: function(id_cedula,foto_entrada,nombre_cliente,orden_servicio,nombreContacto,telefonoContacto,correoContacto,marca,modelo,serie,tipo_motor,id_visita){ 
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into levantamiento_smc(id_cedula,foto_entrada,nombre_cliente,orden_servicio,nombre_contacto,telefono_contacto,correo_contacto,marca,modelo,numero_serie,tipo_motor,id_visita) values(?,?,?,?,?,?,?,?,?,?,?,?)",
                    [id_cedula,foto_entrada,nombre_cliente,orden_servicio,nombreContacto,telefonoContacto,correoContacto,marca,modelo,serie,tipo_motor,id_visita],
                    function(tx, results){
                        // console.log("Registro de levantamiento SMC creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar levantamiento:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    addVentaSMC: function(id_cedula,foto_entrada,nombre_cliente,RFC,nombrecontacto,telefono,correo,tiposervicio,orden_servicio,id_visita){
        console.log(id_cedula,foto_entrada,nombre_cliente,RFC,nombrecontacto,telefono,correo,tiposervicio,orden_servicio,id_visita,);
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into ventaSMC(id_cedula,foto_entrada,nombre_cliente,rfc_cliente,nombre_contacto,telefono_contacto,correo_contacto,tipo_visita,orden_servicio,id_visita) values(?,?,?,?,?,?,?,?,?,?)",
                    [id_cedula,foto_entrada,nombre_cliente,RFC,nombrecontacto,telefono,correo,tiposervicio,orden_servicio,id_visita],
                    function(tx, results){
                        // console.log("Registro de ventas SMC creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar ventas SMC:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    addEquipoSMC: function(id_cedula,marca,tipo_motor,marca_motor,modelo,serie,aditamentos){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into datos_equipo_smc(id_cedula,marca,tipo_motor,marca_motor,modelo,serie,aditamentos) values(?,?,?,?,?,?,?)",
                    [id_cedula,marca,tipo_motor,marca_motor,modelo,serie,aditamentos],
                    function(tx, results){
                        // console.log("Registro de equipo SMC creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar ventas SMC:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    addEquipoSMC2: function(id_cedula,marca,tipo_motor,marca_motor,modelo,serie,aditamentos){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into datos_servicio_smc(id_cedula,marca,tipo_motor,marca_motor,modelo,serie,aditamentos) values(?,?,?,?,?,?,?)",
                    [id_cedula,marca,tipo_motor,marca_motor,modelo,serie,aditamentos],
                    function(tx, results){
                        // console.log("Registro de equipo SMC creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar ventas SMC:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    addServicioSMC: function(id_cedula,foto_entrada,nombre_cliente,RFC,nombrecontacto,telefono,correo,tiposervicio,orden_servicio,id_visita,no_activo,no_contrato){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into servicioSMC(id_cedula,foto_entrada,nombre_cliente,rfc_cliente,nombre_contacto,telefono_contacto,correo_contacto,tipo_visita,orden_servicio,id_visita,no_activo,no_contrato) values(?,?,?,?,?,?,?,?,?,?,?,?)",
                    [id_cedula,foto_entrada,nombre_cliente,RFC,nombrecontacto,telefono,correo,tiposervicio,orden_servicio,id_visita,no_activo,no_contrato],
                    function(tx, results){
                        // console.log("Registro de servicio SMC creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar ventas SMC:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    addMantenimientoSMC: function(id_cedula,foto_entrada,nombre_cliente,nombre_contacto,telefono_contacto,correo_contacto,orden_servicio,id_visita){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into mantenimiento_smc(id_cedula,foto_entrada,nombre_cliente,nombre_contacto,telefono_contacto,correo_contacto,orden_servicio,id_visita) values(?,?,?,?,?,?,?,?)",
                    [id_cedula,foto_entrada,nombre_cliente,nombre_contacto,telefono_contacto,correo_contacto,orden_servicio,id_visita],
                    function(tx, results){
                        // console.log("Registro de mantenimiento SMC creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar levantamiento:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    addMantenimientoSMCC: function(id_cedula,foto_entrada,nombre_cliente,orden_servicio,nombre_contacto,telefono_contacto,correo_contacto,marca,modelo,numero_serie,id_visita){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into mantenimiento_smc(id_cedula,foto_entrada,nombre_cliente,orden_servicio,nombre_contacto,telefono_contacto,correo_contacto,marca,modelo,numero_serie,id_visita) values(?,?,?,?,?,?,?,?,?,?,?)",
                    [id_cedula,foto_entrada,nombre_cliente,orden_servicio,nombre_contacto,telefono_contacto,correo_contacto,marca,modelo,numero_serie,id_visita],
                    function(tx, results){
                        // console.log("Registro de mantenimiento SMC creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar levantamiento:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    //SMC FIN
    //inicio suro2
     addMaquinariaSuro2: function (id_cedula,foto_llegada,nombre_cliente,encargado,turno) {
        databaseHandler.db.transaction(
          function (tx) {
            tx.executeSql(
              "INSERT INTO datos_maquinaria(id_cedula,foto_inicio,cliente,encargado_turno,turno) VALUES (?,?,?,?,?)",
              [id_cedula,foto_llegada,nombre_cliente,encargado,turno],
              function (tx, results) {
              },
              function (tx, error) {
                console.error("Error registrar:" + error.message);
              }
            );
          },
          function (error) {
              console.log(error)
          },
    
          function () {}
        );
    },
    //fin suro2
    //FIELD INICIO
    addLevantamientoField: function(id_cedula,foto_entrada,nombre_cliente){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into levantamiento_Field(id_cedula,foto_entrada,nombre_cliente) values(?,?,?)",
                    [id_cedula,foto_entrada,nombre_cliente],
                    function(tx, results){
                        // console.log("Registro de levantamiento Field creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar levantamiento:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    addLevantamientoFieldC: function(id_cedula,foto_entrada,nombre_cliente,orden_servicio){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into levantamiento_Field(id_cedula,foto_entrada,nombre_cliente,orden_servicio) values(?,?,?,?)",
                    [id_cedula,foto_entrada,nombre_cliente,orden_servicio],
                    function(tx, results){
                        // console.log("Registro de levantamiento Field creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar levantamiento:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    addMantenimientoField: function(id_cedula,foto_entrada,nombre_cliente){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into mantenimiento_Field(id_cedula,foto_entrada,nombre_cliente) values(?,?,?)",
                    [id_cedula,foto_entrada,nombre_cliente],
                    function(tx, results){
                        // console.log("Registro de mantenimiento Field creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar levantamiento:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    addMantenimientoFieldC: function(id_cedula,foto_entrada,nombre_cliente,orden_servicio){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into mantenimiento_Field(id_cedula,foto_entrada,nombre_cliente,orden_servicio) values(?,?,?,?)",
                    [id_cedula,foto_entrada,nombre_cliente,orden_servicio],
                    function(tx, results){
                        // console.log("Registro de mantenimiento Field creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar levantamiento:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    //FIELD FIN
    //Inicio diprec
    addReporteTecnico: function(id_cedula,foto_entrada,nombre_cliente,direccion,telefono,atencion,correo){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into servicio_tecnico(id_cedula,foto_entrada,nombre_cliente,direccion,telefono,atencion,email) values(?,?,?,?,?,?,?)",
                    [id_cedula,foto_entrada,nombre_cliente,direccion,telefono,atencion,correo],
                    function(tx, results){
                        // console.log("Registro de Reporte Tecnico creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar el Reporte del Tecnico:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    addMinutaCoordinador: function(id_cedula,foto_entrada){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into minuta_coordinador(id_cedula,foto_entrada) values(?,?)",
                    [id_cedula,foto_entrada],
                    function(tx, results){
                        // console.log("Registro la minuta del coordinador exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar la minuta:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },    
    addMinutaCoordinadorr: function(id_cedula,foto_entrada,empresa,coordinador_obra,nombre_cliente,proyecto,coordonador,direccion){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into minuta_coordinador(id_cedula,foto_entrada,empresa,coordinador_obra,nombre_cliente,proyecto,coordonador,direccion) values(?,?,?,?,?,?,?,?)",
                    [id_cedula,foto_entrada,empresa,coordinador_obra,nombre_cliente,proyecto,coordonador,direccion],
                    function(tx, results){
                        // console.log("Registro la minuta del coordinador exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar la minuta:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    addLevantamientoDiprec: function(id_cedula,foto_entrada){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into datos_generales_diprec(id_cedula,foto_entrada) values(?,?)",
                    [id_cedula,foto_entrada],
                    function(tx, results){
                        // console.log("Registro la minuta del coordinador exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar la minuta:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },    
    //fin diprec
    addBennetts: function (id_usuario, nombre_usuario, fecha_llegada, geolocation, horario_programado, estatus) {
        databaseHandler.db.transaction(
          function (tx) {
            tx.executeSql(
              "insert into cedulas_general(id_usuario, nombre_usuario, fecha_entrada,nombre_cliente, geolocalizacion_entrada, horario_programado, estatus) values(?,?,?,?,?,?,?)",
              [id_usuario,nombre_usuario,fecha_llegada,fecha_llegada,geolocation,horario_programado,estatus],
              function (tx, results) {
                // console.log("Registro de cedula creado exitosamente");
              },
              function (tx, error) {
                console.error("Error registrar:" + error.message);
              }
            );
          },
          function (error) {
              console.log(error)
          },
    
          function () {}
        );
    },
    addBennettsDatos: function (id_cedula) {
        databaseHandler.db.transaction(
          function (tx) {
            tx.executeSql(
              "insert into datos_productos(id_cedula) values(?)",
              [id_cedula],
              function (tx, results) {
                // console.log("Registro de datos producto creado exitosamente");
              },
              function (tx, error) {
                console.error("Error registrar:" + error.message);
              }
            );
          },
          function (error) {
              console.log(error)
          },
    
          function () {}
        );
    },
    addConteo: function (id_cedula) {
        databaseHandler.db.transaction(
          function (tx) {
            tx.executeSql(
              "insert into inventario(id_cedula) values(?)",
              [id_cedula],
              function (tx, results) {
                // console.log("Registro de datos producto creado exitosamente");
              },
              function (tx, error) {
                console.error("Error registrar:" + error.message);
              }
            );
          },
          function (error) {
              console.log(error)
          },
          function () {}
        );
    },
    //TODO SURO
    addfotoSURO :function(id_cedula,foto,titulo,fecha_E,proceo,recorrido){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into Fotos_SURO(id_cedula,titulo , foto , fecha ,recorrido , proceso) values(?,?,?,?,?,?)",
                    [id_cedula,titulo,foto,fecha_E,recorrido,proceo],
                    function(tx, results){
                        $('#imagenC').val("");
                        $('#titulo').val("");
                        console.log("Registro de Fotos_SURO creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar el Fotos_SURO:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    addSanitizacionSURO: function(id_cedula,foto_entrada,nombre_cliente,nombre_usuario,sucursal,direccion, correo){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into sanitizacion_Suro(id_cedula,foto_entrada,nombre_cliente, nombre_usuario,sucursal,direccion,correo) values(?,?,?,?,?,?,?)",
                    [id_cedula,foto_entrada,nombre_cliente,nombre_usuario,sucursal,direccion,correo],
                    function(tx, results){
                        // console.log("Registro de sanitizacion SURO creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar sanitización SURO: " + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    groupInit: function(id_cedula){
        var nombre_grupo = "Grupo 1";
        var indice = 1;
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into grupos(id_cedula,nombre_grupo,fases,indice) values(?,?,'durante',?)",
                    [id_cedula,nombre_grupo, indice],
                    function(tx, results){
                        // console.log("Registro de grupo 1 SURO creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar el grupo 2:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
        var fases = "fomites";
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into grupos(id_cedula,nombre_grupo,fases,indice) values(?,?,?,?)",
                    [id_cedula,nombre_grupo,fases, indice],
                    function(tx, results){
                        // console.log("Registro de grupo 2 SURO creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar el grupo 2:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    // Inicio ServInd
    addCheckServInd: function(id_cedula,id_visita,orden_servicio,foto_entrada,nombre_cliente,nombre_comercial,sucursal,tienda,direccion){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into checklist(id_cedula,id_visita,orden_servicio,foto_entrada,nombre_cliente,nombre_comercial,sucursal,tienda,direccion) values(?,?,?,?,?,?,?,?,?)",
                    [id_cedula,id_visita,orden_servicio,foto_entrada,nombre_cliente,nombre_comercial,sucursal,tienda,direccion],
                    function(tx, results){
                        // console.log("Registro de check list ServInd creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar checklist ServInd: " + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    addreporteGeneral: function(id_cedula,id_visita,orden_servicio,foto_entrada,nombre_cliente,nombre_comercial,sucursal,direccion,ciudad,telefono,correo,equipo,marca,modelo,serie,tipo_servicio,razon_servicio){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into reporteGeneral(id_cedula,id_visita,orden_servicio,foto_entrada,nombre_cliente,nombre_comercial,sucursal,direccion,ciudad,telefono,correo,equipo,marca,modelo,serie,tipo_servicio,razon_servicio) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                    [id_cedula,id_visita,orden_servicio,foto_entrada,nombre_cliente,nombre_comercial,sucursal,direccion,ciudad,telefono,correo,equipo,marca,modelo,serie,tipo_servicio,razon_servicio],
                    function(tx, results){
                        // console.log("Registro de reporte general ServInd creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar checklist ServInd: " + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    addreporteFotografico: function(id_cedula,id_visita,foto_llegada,orden_compra,proyecto,sucursal,contratista,type_proyect,region,torre,proceso){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into reporteFotografico(id_cedula,id_visita,foto_entrada,orden_compra,nombre_cliente,sitio,contratista,tipo_proyecto,region,torre,proceso) values(?,?,?,?,?,?,?,?,?,?,?)",
                    [id_cedula,id_visita,foto_llegada,orden_compra,proyecto,sucursal,contratista,type_proyect,region,torre,proceso],
                    function(tx, results){
                        console.log("Registro de reporte Fotografico MerGroup creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar Fotografico Mer: " + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    SERVFotos: function (id_cedula, Recorrido, Proceso, titulo, fechah, foto) {
        databaseHandler.db.transaction(
            function (tx) {
                tx.executeSql(
                    "insert into SV_Fotos(SV_ID_Cedula, SV_Recorrido, SV_Proceso, SV_titulo, SV_FechaHora, SV_Foto) values(?,?,?,?,?,?)",
                    [id_cedula, Recorrido, Proceso, titulo, fechah, foto],
                    function (tx, results) {
                        
                    },
                    function (tx, error) {
                        console.error("Error al registrar SV_Fotos: " + error.message);
                    }
                );
            },
            function (error) { },
            function () { }
        );
    },
    addreporteCaliente: function (id_cedula, orden, fecha, foto, servicio, cliente, sucursal){
        databaseHandler.db.transaction(
            function (tx) {
              tx.executeSql(
                "insert into datos_generales_serv(id_cedula, no_orden, fecha, foto_llegada, tipo_servicio, cliente, sucursal_cliente) values(?,?,?,?,?,?,?)",
                [id_cedula, orden, fecha, foto, servicio, cliente, sucursal],
                function (tx, results) {
                  //console.log("Caliente correcto");
                },
                function (tx, error) {
                  console.error("Error registrar:" + error.message);
                }
              );
            },
            function (error) {
                console.log(error)
            },
      
            function () {}
          );
    },
    addreporteFrio: function (id_cedula, orden, fecha, foto, servicio, cliente, sucursal, id_cliente,direccion, ciudad, telefono, correo, equipo, marca, modelo, serie,falla_reportada,type_equip){
        databaseHandler.db.transaction(
            function (tx) {
              tx.executeSql(
                "insert into visita_servInd(id_cedula, no_orden, fecha, foto_llegada, tipo_servicio, cliente, sucursal_cliente, id_cliente,direccion, ciudad, telefono, correo, equipo, marca, modelo, serie,falla_reportada,type_equipo) values(?, ?, ?, ?, ?, ?, ?, ?,?, ?, ?, ?, ?, ?, ?, ?, ?,?)",
                [id_cedula, orden, fecha, foto, servicio, cliente, sucursal,id_cliente,direccion, ciudad, telefono, correo, equipo, marca, modelo, serie,falla_reportada,type_equip],
                function (tx, results) {
                  //console.log("Frio correcto");
                },
                function (tx, error) {
                  console.error("Error registrar:" + error.message);
                }
              );
            },
            function (error) {
                console.log(error)
            },
      
            function () {}
          );
    },
    addreporteRatinal: function (id_cedula, orden, fecha, foto, servicio, cliente, sucursal){
        databaseHandler.db.transaction(
            function (tx) {
              tx.executeSql(
                "insert into datos_generales_serv(id_cedula, no_orden, fecha, foto_llegada, tipo_servicio, cliente, sucursal_cliente) values(?,?,?,?,?,?,?)",
                [id_cedula, orden, fecha, foto, servicio, cliente, sucursal],
                function (tx, results) {
                  //console.log("Frio correcto");
                },
                function (tx, error) {
                  console.error("Error registrar:" + error.message);
                }
              );
            },
            function (error) {
                console.log(error)
            },
      
            function () {}
          );
    },
    addVisitaServ: function (id_cedula,servicio){
        databaseHandler.db.transaction(
            function (tx) {
              tx.executeSql(
                "insert into visita_servInd(id_cedula,tipo_servicio) values(?,?)",
                [id_cedula,servicio],
                function (tx, results) {
                  //console.log("Frio correcto");
                },
                function (tx, error) {
                  console.error("Error registrar:" + error.message);
                }
              );
            },
            function (error) {
                console.log(error)
            },
      
            function () {}
          );
    },
    encuestaservInd: function (id_cedula, recomienda,RCcarita,CCcarita,ACcarita,SCcarita,fecha_encuesta){
        databaseHandler.db.transaction(
            function (tx) {
              tx.executeSql(
                "insert into encuesta_serv(id_cedula, recomienda,rapidez,capacidad,atencion,satisfaccion,fecha_encuesta) values(?,?,?,?,?,?,?)",
                [id_cedula,recomienda,RCcarita,CCcarita,ACcarita,SCcarita,fecha_encuesta],
                function (tx, results) {
                  //console.log("Frio correcto");
                },
                function (tx, error) {
                  console.error("Error registrar:" + error.message);
                }
              );
            },
            function (error) {
                console.log(error)
            },
      
            function () {}
          );
    },
    addreporteRationals: function (id_cedula, orden, fecha, foto, servicio, cliente, sucursal){
        databaseHandler.db.transaction(
            function (tx) {
              tx.executeSql(
                "insert into visita_servInd(id_cedula, no_orden, fecha, foto_llegada, tipo_servicio, cliente, sucursal_cliente) values(?,?,?,?,?,?,?)",
                [id_cedula, orden, fecha, foto, servicio, cliente, sucursal],
                function (tx, results) {
                  //console.log("Frio correcto");
                },
                function (tx, error) {
                  console.error("Error registrar:" + error.message);
                }
              );
            },
            function (error) {
                console.log(error)
            },
      
            function () {}
          );
    },
    //Fin ServInd
    //inicio bennettsL
    addBennettsL: function(id_cedula,foto_entrada,nocliente,razon_social,nombre_recibe,segundo_nombre,apellido,puesto,correo,telefono_1,telefono_2, calle,no_exterior,no_interior,colonia,ciudad,cp,alcadia,estado,acceso_proveedor, OC, OC_copias, factura, factura_copias, SUA, SUA_copias, TIA, TIA_copias, otro_doc, otro_doc_copias, permiso, correo1, correo1_campo, medio1, medio1_campo, otro_med1, otro_med1_campo, dias_solicitud, cita, correo2, correo2_campo, medio2, medio2_campo, otro_med2, otro_med2_campo, dias_anticipacion, entrada_almacen, folio_recepcion, contra_recibo, firma_sello, recibido_factura, persona_autorizada, sello_cliente, oc3, id3, otro3, ninguno, cofia, zapato_seguridad, chaleco, otro4, otros_requisitos,dias, horas_I, horas_F, horasS_I, horasS_F){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into logistica_bennettsL(id_cedula,foto_entrada,nocliente,razon_social,nombre_recibe,segundo_nombre,apellido,puesto,correo,telefono_1,telefono_2, calle,no_exterior,no_interior,colonia,ciudad,cp,alcadia,estado,acceso_proveedor, OC, OC_copias, factura, factura_copias, SUA, SUA_copias, TIA, TIA_copias, otro_doc, otro_doc_copias, permiso, correo1, correo1_campo, medio1, medio1_campo, otro_med1, otro_med1_campo, dias_solicitud, cita, correo2, correo2_campo, medio2, medio2_campo, otro_med2, otro_med2_campo, dias_anticipacion, entrada_almacen, folio_recepcion, contra_recibo, firma_sello, recibido_factura, persona_autorizada, sello_cliente, oc3, id3, otro3, ninguno, cofia, zapato_seguridad, chaleco, otro4, otros_requisitos,dias, horas_I, horas_F, horasS_I, horasS_F) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                    [id_cedula,foto_entrada,nocliente,razon_social,nombre_recibe,segundo_nombre,apellido,puesto,correo,telefono_1,telefono_2, calle,no_exterior,no_interior,colonia,ciudad,cp,alcadia,estado,acceso_proveedor, OC, OC_copias, factura, factura_copias, SUA, SUA_copias, TIA, TIA_copias, otro_doc, otro_doc_copias, permiso, correo1, correo1_campo, medio1, medio1_campo, otro_med1, otro_med1_campo, dias_solicitud, cita, correo2, correo2_campo, medio2, medio2_campo, otro_med2, otro_med2_campo, dias_anticipacion, entrada_almacen, folio_recepcion, contra_recibo, firma_sello, recibido_factura, persona_autorizada, sello_cliente, oc3, id3, otro3, ninguno, cofia, zapato_seguridad, chaleco, otro4, otros_requisitos,dias, horas_I, horas_F, horasS_I, horasS_F],
                    function(tx, results){
                        // console.log("Registro de levantamiento Field creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar ExtraccionResta:" + error.message);
                    }
                );
            },
            function(error){console.error("Error1:" + error);},
            function(){}
        );
    },
    addBennettsL2: function(id_cedula,foto_entrada,nocliente,razon_social,codigoPostal,ciudad,calle,colonia,no_exterior,estado){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into logistica_bennettsL(id_cedula,foto_entrada,nocliente,razon_social,cp,ciudad,calle,colonia,no_exterior,estado) values(?,?,?,?,?,?,?,?,?,?)",
                    [id_cedula,foto_entrada,nocliente,razon_social,codigoPostal,ciudad,calle,colonia,no_exterior,estado],
                    function(tx, results){
                        // console.log("Registro de levantamiento Field creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar ExtraccionResta:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    addDocumentosBennetts2: function (id_cedula,no_documentos,importe,movimiento_realizado) {
        databaseHandler.db.transaction(
          function (tx) {
            tx.executeSql(
              "insert into documentos(id_cedula,no_documentos,importe_app,movimiento_realizado) values(?,?,?,?)",
              [id_cedula,no_documentos,importe,movimiento_realizado],
              function (tx, results) {
                // console.log("Registro de datos producto creado exitosamente");
              },
              function (tx, error) {
                console.error("Error registrar:" + error.message);
              }
            );
          },
          function (error) {
              console.log(error)
          },
          function () {}
        );
    },
    //fin bennettsL
    //inicio Restatool
    addTrampaRestatools: function(id_cedula,foto_entrada,nombre_cliente,fecha,sucursal,razon_social,estaciones,numero_estaciones,capacidad,ubicacion,direccion){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into datos_trampa_restatools(id_cedula,foto_entrada,nombre_cliente,fecha,sucursal,razon_social,estaciones,numero_estaciones,capacidad,ubicacion,direccion) values(?,?,?,?,?,?,?,?,?,?,?)",
                    [id_cedula,foto_entrada,nombre_cliente,fecha,sucursal,razon_social,estaciones,numero_estaciones,capacidad,ubicacion,direccion],
                    function(tx, results){
                        // console.log("Registro de levantamiento Field creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar trampaResta:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    addExtraccionRestatools: function(id_cedula,nombre_cliente, sucursal, razon_social, fecha, foto_entrada,direccion){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into datos_extracciones_restatools(id_cedula,nombre_cliente, sucursal, razon_social, fecha,foto_entrada,direccion) values(?,?,?,?,?,?,?)",
                    [id_cedula,nombre_cliente, sucursal, razon_social, fecha,foto_entrada,direccion],
                    function(tx, results){
                        // console.log("Registro de levantamiento Field creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar ExtraccionResta:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    addMmtoRestatools: function(id_cedula,nombre_cliente, sucursal, razon_social, fecha, foto_entrada,direccion){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into datos_mmto_restatools(id_cedula,nombre_cliente, sucursal, razon_social, fecha,foto_entrada,direccion) values(?,?,?,?,?,?,?)",
                    [id_cedula,nombre_cliente, sucursal, razon_social, fecha,foto_entrada,direccion],
                    function(tx, results){
                        // console.log("Registro de levantamiento Field creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar ExtraccionResta:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    addDesasolveRestatools: function(id_cedula,titulo_reporte,nombre_cliente, sucursal, razon_social, fecha, foto_entrada,direccion){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into datos_desasolve_restatools(id_cedula,titulo_reporte,nombre_cliente, sucursal, razon_social, fecha,foto_entrada,direccion) values(?,?,?,?,?,?,?,?)",
                    [id_cedula,titulo_reporte,nombre_cliente, sucursal, razon_social, fecha,foto_entrada,direccion],
                    function(tx, results){
                        // console.log("Registro de levantamiento Field creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar ExtraccionResta:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    //fin restatools
    //inicio Rocadi
    addCheckListRocadi: function(id_cedula,foto_entrada,nombre_cliente,fecha){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into datos_generales_rocadi(id_cedula,foto_entrada,nombre_sitio,fecha) values(?,?,?,?)",
                    [id_cedula,foto_entrada,nombre_cliente,fecha],
                    function(tx, results){
                        // console.log("Registro de levantamiento Field creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar trampaResta:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    //fin Rocadi
    //inicio MrFixter
    addBitacoraMrFixter: function (id_cedula,foto_entrada,ubicacion,fecha,nombre_sitio,supervisor_estafeta,no_empleados,tipo_servicio) {
        databaseHandler.db.transaction(
          function (tx) {
            tx.executeSql(
              "INSERT INTO datos_generales_MrFixer(id_cedula,foto_entrada,ubicacion,fecha,nombre_sitio,supervisor_estafeta,no_empleados,tipo_servicio) VALUES (?,?,?,?,?,?,?,?)",
              [id_cedula,foto_entrada,ubicacion,fecha,nombre_sitio,supervisor_estafeta,no_empleados,tipo_servicio],
              function (tx, results) {
              },
              function (tx, error) {
                console.error("Error registrar:" + error.message);
              }
            );
          },
          function (error) {
              console.log(error)
          },
    
          function () {}
        );
    },
    addInsumos: function (id_cedula,nombre,cantidad,unidad){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql("INSERT INTO insumos(id_cedula, nombre, cantidad, unidad) VALUES (?,?,?,?)",
                    [id_cedula, nombre, cantidad, unidad],
                    function(tx, results){
                    },
                    function(tx, error){
                        console.error("Error al registrar insumo mrfixer: " + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    //fin MrFixter
    //Inicio Devly
    addDV: function (id_cedula, nombre_cliente,fecha_llegada, foto_llegada,proveedor,rfc,sucursal,id_proveedor) {
        databaseHandler.db.transaction(
            function (tx) {
                tx.executeSql(
                    "insert into datosDevlyn(id_cedula,nombre_cliente,fecha_llegada , foto_llegada,proveedor,rfc,sucursal,id_proveedor) values(?,?,?,?,?,?,?,?)",
                    [id_cedula, nombre_cliente,fecha_llegada, foto_llegada,proveedor,rfc,sucursal,id_proveedor],
                    function (tx, results) {
                        //console.log("Registro de DG_PlatoL exitosamente");
                    },
                    function (tx, error) {
                        console.error("Error al registrar datosDevlyn: " + error.message);
                    }
                );
            },
            function (error) { },
            function () { }
        );
    },
    //Fin Devlyn
    //Plato Limpio
    addPL: function (id_cedula, Empresa, correo) {
        var cero = 0;
        databaseHandler.db.transaction(
            function (tx) {
                tx.executeSql(
                    "insert into DG_PlatoL(DG_ID_Cedula,DG_Empresa,DG_Correo,CC , FH , SN) values(?,?,?,?,?,?)",
                    [id_cedula, Empresa, correo, cero, cero, cero],
                    function (tx, results) {
                        //console.log("Registro de DG_PlatoL exitosamente");
                    },
                    function (tx, error) {
                        console.error("Error al registrar DG_PlatoL: " + error.message);
                    }
                );
            },
            function (error) { },
            function () { }
        );
    },
    PLFotos: function (id_cedula, Recorrido, Proceso, titulo, fechah, foto) {
        databaseHandler.db.transaction(
            function (tx) {
                tx.executeSql(
                    "insert into PL_Fotos(F_ID_Cedula,F_Recorrido,F_Proceso,F_titulo,F_FechaHora,F_Foto ) values(?,?,?,?,?,?)",
                    [id_cedula, Recorrido, Proceso, titulo, fechah, foto],
                    function (tx, results) {
                        $("#imagenC").val("");
                    },
                    function (tx, error) {
                        console.error("Error al registrar PL_Fotos: " + error.message);
                    }
                );
            },
            function (error) {  console.error("Error al registrar PL_Fotos: " + error.message); },
            function () { }
        );
    },
    //inicio VIC transacciones
    addCedulaVIC: function(id_usuario,nombre_usuario,fecha_entrada,geolocalizacion_entrada,id_cliente,nombre_cliente,horario_programado,estatus){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into cedulas_general(id_usuario,nombre_usuario,fecha_entrada,geolocalizacion_entrada,id_cliente,nombre_cliente,horario_programado,estatus) values(?,?,?,?,?,?,?,?)",
                    [id_usuario,nombre_usuario,fecha_entrada,geolocalizacion_entrada,id_cliente,nombre_cliente,horario_programado,estatus],
                    function(tx, results){
                        // console.log("Registro de cedula creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error registrar cedula general:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    addVICDatos: function (id_cedula, foto, id_cliente, nombre_cliente, nombre_comercial, nombre_contacto, telefono, correo, estatus_cliente) {
        databaseHandler.db.transaction(
          function (tx) {
            tx.executeSql(
              "insert into apoyo_bennetts(id_cedula, foto_entrada, id_cliente, nombre_cliente, nombre_comercial, nombre_contacto, telefono, correo, estatus_cliente) values(?,?,?,?,?,?,?,?,?)",
              [id_cedula, foto, id_cliente, nombre_cliente, nombre_comercial, nombre_contacto, telefono, correo, estatus_cliente],
              function (tx, results) {
                // console.log("Registro de datos producto creado exitosamente");
              },
              function (tx, error) {
                console.error("Error registrar:" + error.message);
              }
            );
          },
          function (error) {
              console.log(error)
          },
    
          function () {}
        );
    },
    addVICApoyo: function (id_cedula) {
        databaseHandler.db.transaction(
          function (tx) {
            tx.executeSql(
              "insert into fotos_apoyo(id_cedula) values(?)",
              [id_cedula],
              function (tx, results) {
                // console.log("Registro de datos producto creado exitosamente");
              },
              function (tx, error) {
                console.error("Error registrar:" + error.message);
              }
            );
          },
          function (error) {
              console.log(error)
          },
    
          function () {}
        );
    },
    addVICVentas: function (id_cedula,foto,id_proyecto,nivel) {
        databaseHandler.db.transaction(
          function (tx) {
            tx.executeSql(
              "insert into ventas_bennetts(id_cedula, foto_inicio, id_proyecto,nivel) values(?,?,?,?)",
              [id_cedula, foto, id_proyecto,nivel],
              function (tx, results) {
                app.views.main.router.navigate({name: 'menuVentas'});
                // console.log("Registro de datos producto creado exitosamente");
              },
              function (tx, error) {
                console.error("Error registrar:" + error.message);
              }
            );
          },
          function (error) {
              console.log(error)
          },
    
          function () {}
        );
    },
    addVICEvidencias: function (id_cedula) {
        databaseHandler.db.transaction(
          function (tx) {
            tx.executeSql(
              "insert into evidencias(id_cedula) values(?)",
              [id_cedula],
              function (tx, results) {
                // console.log("Registro de datos producto creado exitosamente");
              },
              function (tx, error) {
                console.error("Error registrar:" + error.message);
              }
            );
          },
          function (error) {
              console.log(error)
          },
    
          function () {}
        );
    },
    addVICVIC: function (id_cedula, foto, tipo_visita, id_cliente, nombre_cliente, nombre_comercial, nombre_contacto, telefono, correo, estatus) {
        databaseHandler.db.transaction(
          function (tx) {
            tx.executeSql(
              "insert into datosVIC(id_cedula, foto_inicio, tipo_visita, id_cliente, nombre_cliente, nombre_comercial, nombre_contacto, telefono, correo, estatus_cliente) values(?,?,?,?,?,?,?,?,?,?)",
              [id_cedula, foto, tipo_visita, id_cliente, nombre_cliente, nombre_comercial, nombre_contacto, telefono, correo, estatus],
              function (tx, results) {
                // console.log("Registro de datos producto creado exitosamente");
              },
              function (tx, error) {
                console.error("Error registrar:" + error.message);
              }
            );
          },
          function (error) {
              console.log(error)
          },
    
          function () {}
        );
    },
    
    addVICEquipos: function (id_cliente, codigo, descripcion, enviado) {
        databaseHandler.db.transaction(
          function (tx) {
            tx.executeSql(
              "INSERT INTO equiposCargados(id_cliente, codigo, descripcion, enviado) VALUES (?,?,?,?)",
              [id_cliente, codigo, descripcion, enviado],
              function (tx, results) {
                // console.log("Registro de datos producto creado exitosamente");
              },
              function (tx, error) {
                console.error("Error registrar:" + error.message);
              }
            );
          },
          function (error) {
              console.log(error)
          },
    
          function () {}
        );
    },
    //Inicio MT
    addDatosMT: function (id_cedula,nombre_cliente,nombre_contacto,puesto_contacto,telefono_contacto,correo_contacto) {
        databaseHandler.db.transaction(
          function (tx) {
            tx.executeSql(
              "insert into datos_visita(id_cedula,nombre_cliente,nombre_contacto,puesto_contacto,telefono_contacto,correo_contacto) values(?,?,?,?,?,?)",
              [id_cedula,nombre_cliente,nombre_contacto,puesto_contacto,telefono_contacto,correo_contacto],
              function (tx, results) {
                // console.log("Registro de datos MT creado exitosamente");
              },
              function (tx, error) {
                console.error("Error registrar:" + error.message);
              }
            );
          },
          function (error) {
              console.log(error)
          },
    
          function () {}
        );
    },
    //Fin MT
    //Inicio SALES SURO
    addSUROSALESVentas: function (id_cedula,foto,id_proyecto,nivel) {
        console.log(id_cedula,foto,id_proyecto,nivel)
        databaseHandler.db.transaction(
            function (tx) {
            tx.executeSql(
                "insert into ventas_bennetts_SS(id_cedula, foto_inicio, id_proyecto,nivel) values(?,?,?,?)",
                [id_cedula, foto, id_proyecto,nivel],
                function (tx, results) {
                app.views.main.router.navigate({name: 'menuSales_suro'});
                    console.log("Registro de datos producto creado exitosamente");
                },
                function (tx, error) {
                console.error("Error registrar:" + error.message);
                }
            );
            },
            function (error) {
                console.log(error)
            },

            function () {}
        );
    },
    addCedulaSalesSuro: function(id_usuario,nombre_usuario,fecha_entrada,geolocalizacion_entrada,id_cliente,nombre_cliente,horario_programado,estatus){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into cedulas_general(id_usuario,nombre_usuario,fecha_entrada,geolocalizacion_entrada,id_cliente,nombre_cliente,horario_programado,estatus) values(?,?,?,?,?,?,?,?)",
                    [id_usuario,nombre_usuario,fecha_entrada,geolocalizacion_entrada,id_cliente,nombre_cliente,horario_programado,estatus],
                    function(tx, results){
                            console.log("Registro de cedula creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error registrar cedula general:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    // Inicio SALES SURO 
    //inicio dilimpio 
    addCedulaDilimpio: function(id_usuario,nombre_usuario,fecha_entrada,geolocalizacion_entrada,id_cliente,nombre_cliente,horario_programado,estatus){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into cedulas_general(id_usuario,nombre_usuario,fecha_entrada,geolocalizacion_entrada,id_cliente,nombre_cliente,horario_programado,estatus) values(?,?,?,?,?,?,?,?)",
                    [id_usuario,nombre_usuario,fecha_entrada,geolocalizacion_entrada,id_cliente,nombre_cliente,horario_programado,estatus],
                    function(tx, results){
                        // console.log("Registro de cedula creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error registrar cedula general:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    addVisitaDL: function (id_cedula,foto,id_cliente,nombre_cliente,nombre_contacto,correo,telefono,id_visita) {
        databaseHandler.db.transaction(
          function (tx) {
            tx.executeSql(
              "insert into visitaDilimpio(id_cedula, foto_inicio, id_cliente, nombre_cliente, nombre_contacto, correo,telefono,id_visita) values(?,?,?,?,?,?,?,?)",
              [id_cedula, foto, id_cliente, nombre_cliente, nombre_contacto, correo,telefono,id_visita],
              function (tx, results) {
                // console.log("Registro de datos producto creado exitosamente");
              },
              function (tx, error) {
                console.error("Error registrar:" + error.message);
              }
            );
          },
          function (error) {
              console.log(error)
          },
    
          function () {}
        );
    },
    addVentasDL: function (id_cedula,foto,id_cliente,nombre_cliente,nombre_contacto,correo,telefono,id_visita) {
        databaseHandler.db.transaction(
          function (tx) {
            tx.executeSql(
              "insert into DatosentregasDL(id_cedula, foto_inicio, id_cliente, nombre_cliente, nombre_contacto, correo,telefono,id_visita) values(?,?,?,?,?,?,?,?)",
              [id_cedula, foto, id_cliente, nombre_cliente, nombre_contacto, correo, telefono,id_visita],
              function (tx, results) {
                // console.log("Registro de datos producto creado exitosamente");
              },
              function (tx, error) {
                console.error("Error registrar:" + error.message);
              }
            );
          },
          function (error) {
              console.log(error)
          },
    
          function () {}
        );
    },
    addVICEquiposDL: function (id_cliente, codigo, descripcion, enviado) {
        databaseHandler.db.transaction(
          function (tx) {
            tx.executeSql(
              "INSERT INTO equiposCargadosDL(id_cliente, codigo, descripcion, enviado) VALUES (?,?,?,?)",
              [id_cliente, codigo, descripcion, enviado],
              function (tx, results) {
                // console.log("Registro de datos producto creado exitosamente");
              },
              function (tx, error) {
                console.error("Error registrar:" + error.message);
              }
            );
          },
          function (error) {
              console.log(error)
          },
    
          function () {}
        );
    },
    addCobranzaDL: function (id_cedula,foto,id_cliente,nombre_cliente,nombre_contacto,correo,telefono,id_visita) {
        databaseHandler.db.transaction(
          function (tx) {
            tx.executeSql(
              "insert into DatoscobranzasDL(id_cedula, foto_inicio, id_cliente, nombre_cliente, nombre_contacto, correo,telefono,id_visita) values(?,?,?,?,?,?,?,?)",
              [id_cedula, foto, id_cliente, nombre_cliente, nombre_contacto, correo, telefono,id_visita],
              function (tx, results) {
                // console.log("Registro de datos producto creado exitosamente");
              },
              function (tx, error) {
                console.error("Error registrar:" + error.message);
              }
            );
          },
          function (error) {
              console.log(error)
          },
    
          function () {}
        );
    },
    //fin dilimpio 
   //Inicio Carnes Ideal
    addDatosCI: function (id_cedula,nombre_cliente,nombre_contacto,foto_llegada,foto_temp_caja,orden,comanda) {
        databaseHandler.db.transaction(
            function (tx) {
            tx.executeSql(
                "insert into datos_generales(id_cedula,nombre_cliente,nombre_contacto,foto_entrada,foto_temp_caja,orden,comanda) values(?,?,?,?,?,?,?)",
                [id_cedula,nombre_cliente,nombre_contacto,foto_llegada,foto_temp_caja,orden,comanda],
                function (tx, results) {
                //console.log("Registro de datos CI creado exitosamente");
                },
                function (tx, error) {
                console.error("Error registrar:" + error.message);
                }
            );
            },
            function (error) {
                console.log(error)
            },
            function () {}
        );
    },
    addDatosCIRuta: function (id_cedula,foto_entrada,id_cliente,nombre_cliente,nombre_usuario) {
        databaseHandler.db.transaction(
            function (tx) {
            tx.executeSql(
                "insert into datos_ci(id_cedula,foto_entrada,id_cliente,nombre_cliente,nombre_usuario) values(?,?,?,?,?)",
                [id_cedula,foto_entrada,id_cliente,nombre_cliente,nombre_usuario],
                function (tx, results) {
                //console.log("Registro de datos CI creado exitosamente");
                },
                function (tx, error) {
                console.error("Error registrar:" + error.message);
                }
            );
            },
            function (error) {
                console.log(error)
            },
            function () {}
        );
    },
    addCargaRutaCI: function (id_cedula,cliente,no_pedido,descripcion,peso_ruta,vuelta,fecha) {
        databaseHandler.db.transaction(
            function (tx) {
            tx.executeSql(
                "insert into evidencias_carga(id_cedula,cliente,no_pedido,descripcion,peso_ruta,vuelta,fecha) values(?,?,?,?,?,?,?)",
                [id_cedula,cliente,no_pedido,descripcion,peso_ruta,vuelta,fecha],
                function (tx, results) {
                //console.log("Registro de datos CI creado exitosamente");
                },
                function (tx, error) {
                console.error("Error registrar:" + error.message);
                }
            );
            },
            function (error) {
                console.log(error)
            },
            function () {}
        );
    },
    addDatosGeneralesCI: function (id_cedula) {
        databaseHandler.db.transaction(
            function (tx) {
            tx.executeSql(
                "insert into datos_generales(id_cedula) values(?)",
                [id_cedula],
                function (tx, results) {
                //console.log("Registro de datos CI creado exitosamente");
                },
                function (tx, error) {
                console.error("Error registrar:" + error.message);
                }
            );
            },
            function (error) {
                console.log(error)
            },
            function () {}
        );
    },
    addDatosVisitaCI: function (id_cedula,proveedor_actual,problematica,potencia_correcta,ubicacion_correcta) {
        databaseHandler.db.transaction(
            function (tx) {
            tx.executeSql(
                "insert into visitas_ci(id_cedula,proveedor_actual,problematica,potencia_correcta,ubicacion_correcta) values(?,?,?,?,?)",
                [id_cedula,proveedor_actual,problematica,potencia_correcta,ubicacion_correcta],
                function (tx, results) {
                // console.log("Registro de datos Venta CI creado exitosamente");
                },
                function (tx, error) {
                console.error("Error registrar:" + error.message);
                }
            );
            },
            function (error) {
                console.log(error)
            },
            function () {}
        );
    },
    addDatosVentaCI: function (id_cedula,nombre,telefono,correo,medio_conocido,potencia_kg,negocio,ubicacion,medio_contacto,otro_medio,id_cliente,foto_entrada) {
        databaseHandler.db.transaction(
        function (tx) {
            tx.executeSql(
            "insert into datos_ventas(id_cedula,nombre,telefono,correo,medio_conocido,potencia_kg,negocio,ubicacion,medio_contacto,otro_medio,id_cliente,foto_entrada) values(?,?,?,?,?,?,?,?,?,?,?,?)",
            [id_cedula,nombre,telefono,correo,medio_conocido,potencia_kg,negocio,ubicacion,medio_contacto,otro_medio,id_cliente,foto_entrada],
            function (tx, results) {
                // console.log("Registro de datos Venta CI creado exitosamente");
            },
            function (tx, error) {
                console.error("Error registrar:" + error.message);
            }
            );
        },
        function (error) {
            console.log(error)
        },
        function () {}
        );
    },
    addDatosVisitaCI1: function (id_cedula) {
        databaseHandler.db.transaction(
            function (tx) {
            tx.executeSql(
                "insert into visitas_ci(id_cedula) values(?)",
                [id_cedula],
                function (tx, results) {
                // console.log("Registro de datos Venta CI creado exitosamente");
                },
                function (tx, error) {
                console.error("Error registrar:" + error.message);
                }
            );
            },
            function (error) {
                console.log(error)
            },
            function () {}
        );
    },
    addDatosVentaCI1: function (id_cedula) {
        databaseHandler.db.transaction(
        function (tx) {
            tx.executeSql(
            "insert into datos_ventas(id_cedula) values(?)",
            [id_cedula],
            function (tx, results) {
                // console.log("Registro de datos Venta CI creado exitosamente");
            },
            function (tx, error) {
                console.error("Error registrar:" + error.message);
            }
            );
        },
        function (error) {
            console.log(error)
        },
        function () {}
        );
    },
    addProductosCI: function(id_cedula,producto,precio,kilos,observaciones,foto_producto,fecha_registro,enviado){
        databaseHandler.db.transaction(
            function (tx) {
            tx.executeSql(
                "insert into prodcutos_ci(id_cedula,producto,precio,kilos,observaciones,foto_producto,fecha_registro,enviado) values(?,?,?,?,?,?,?,?)",
                [id_cedula,producto,precio,kilos,observaciones,foto_producto,fecha_registro,enviado],
                function (tx, results) {
                // console.log("Registro de datos Venta CI creado exitosamente");
                },
                function (tx, error) {
                console.error("Error registrar:" + error.message);
                }
            );
            },
            function (error) {
                console.log(error)
            },
            function () {}
        );
    },
    addfotosCi: function(id_cedula,foto,comentarios,fecha_evidencia,fase,apartado,enviado){
        databaseHandler.db.transaction(
            function (tx) {
            tx.executeSql(
                "insert into fotos_ci(id_cedula,foto,comentarios,fecha_evidencia,fase,apartado,enviado) values(?,?,?,?,?,?,?)",
                [id_cedula,foto,comentarios,fecha_evidencia,fase,apartado,enviado],
                function (tx, results) {
                // console.log("Registro de datos Venta CI creado exitosamente");
                },
                function (tx, error) {
                console.error("Error registrar:" + error.message);
                }
            );
            },
            function (error) {
                console.log(error)
            },
            function () {}
        );
    },
    //Fin Carnes Ideal
    //Inicio Proteus
    addDatosGenerales: function(id_cedula,orden_servicio,foto_entrada,razon_social,ruc,local,direccion,nombre_contacto,telefono1,telefono2,email,tipo_servicio){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into datos_generales_proteus(id_cedula,orden_servicio,foto_entrada,razon_social,ruc,local,direccion,nombre_contacto,telefono1,telefono2,email,tipo_servicio) values(?,?,?,?,?,?,?,?,?,?,?,?)",
                    [id_cedula,orden_servicio,foto_entrada,razon_social,ruc,local,direccion,nombre_contacto,telefono1,telefono2,email,tipo_servicio],
                    function(tx, results){
                        // console.log("Registro de Datos Generales creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar levantamiento:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    addEquipoProteus: function(id_cedula,id_cliente,modelo,marca,ubicacion){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql("INSERT INTO datos_equipos_proteus(id_cedula,id_cliente,modelo,marca,ubicacion) VALUES (?,?,?,?,?)",
                    [id_cedula,id_cliente,modelo,marca,ubicacion],
                    function(tx, results){
                    },
                    function(tx, error){
                        console.error("Error al registrar equipo en Proteus:" + error.message);
                    }
                );
            },function(error){},
            function(){}
        );
    },
    //Fin Proteus
    addZona: function (id_cedula,op,id_visita,nombre,celular,correo,presupuesto,tipo,porque,tipo_otro,porqueotro,clave_easy,street,exterior,interior,colonia,alcaldia,ciudad,cp,titulo_propiedad,operacion,agente,inmueble,asesor_muestra,dia,hora,caracteristicas_generales) {
        databaseHandler.db.transaction(
            function (tx) {
                tx.executeSql(
                    "insert into datosG_zona(id_cedula,id_visita,nombre,celular,correo,tipo,tipo_otro,presupuesto,porque,porqueotro,clave,calle,no_exterior,no_interior,colonia,alcaldia,ciudad,cp,propiedad,tipo_operacion,asesor_asigando,tipo_inmueble,asesor_muestra,dia,hora,caracteristicas_inmueble) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                    [id_cedula,id_visita,nombre,celular,correo,tipo,tipo_otro,presupuesto,porque,porqueotro,clave_easy,street,exterior,interior,colonia,alcaldia,ciudad,cp,titulo_propiedad,operacion,agente,inmueble,asesor_muestra,dia,hora,caracteristicas_generales],
                    function (tx, results) {
                    },
                    function (tx, error) {
                        console.error("Error al registrar addZona: " + error.message);
                    }
                );
            },
            function (error) { },
            function () { }
        );
    },
    addZonaProspeccion: function (id_cedula,id_visita,nombre_cliente,telefono,correo,direccion,tipo_inmueble,otro_inmuble,caracteristicas_generales,foto_entrada){
        databaseHandler.db.transaction(
            function (tx) {
                tx.executeSql(//nombre_cliente,telefono,correo,tipo_inmueble,direccion
                    "insert into prospeccion_zona(id_cedula,id_visita,nombre_cliente,telefono,correo,direccion,tipo_inmueble,otro_inmuble,caracteristicas_generales,foto_entrada) values(?,?,?,?,?,?,?,?,?,?)",
                    [id_cedula,id_visita,nombre_cliente,telefono,correo,direccion,tipo_inmueble,otro_inmuble,caracteristicas_generales,foto_entrada],
                    function (tx, results) {
                    },
                    function (tx, error) {
                        console.error("Error al registrar addZona: " + error.message);
                    }
                );
            },
            function (error) { },
            function () { }
        );
    },
    //fin zona
    //Inicio Aliatonic
    addVisitaAliatonic: function (id_cedula,foto,id_cliente,nombre_cliente,nombre_contacto,correo,id_visita) {
        console.log('me ves1')
        databaseHandler.db.transaction(
          function (tx) {
            console.log('me ves2')
            tx.executeSql(
              "insert into datos_gene_aliatonic(id_cedula, foto_inicio, id_cliente,id_visita) values(?,?,?,?)",
              [id_cedula, foto, id_cliente,id_visita],
              function (tx, results) {
                 console.log("Registro de datos producto creado exitosamente");
              },
              function (tx, error) {
                console.error("Error registrar:" + error.message);
              }
            );
          },
          function (error) {
            console.log('me ves3')
              console.log(error)
          },
    
          function () {}
        );
    },
    encuestaAliatonic: function (id_cedula, recomienda,RCcarita,CCcarita,ACcarita,SCcarita,fecha_encuesta){
        databaseHandler.db.transaction(
            function (tx) {
              tx.executeSql(
                "insert into encuesta_Aliationic(id_cedula, recomienda,rapidez,capacidad,atencion,satisfaccion,fecha_encuesta) values(?,?,?,?,?,?,?)",
                [id_cedula,recomienda,RCcarita,CCcarita,ACcarita,SCcarita,fecha_encuesta],
                function (tx, results) {
                  //console.log("Frio correcto");
                },
                function (tx, error) {
                  console.error("Error registrar:" + error.message);
                }
              );
            },
            function (error) {
                console.log(error)
            },
      
            function () {}
          );
    },
};