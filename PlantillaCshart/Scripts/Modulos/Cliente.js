"use strict";
var EMD = EMD || {};
EMD.Cliente = (function () {

    var init = function () {
        $.ajax({
            type: "POST",
            url: "/Documento/buscaCliente",
            /*data: JSON.stringify({ xml: ruc }),*/
            data: '',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
               


                $.each(data, function (key, val) {
                   /* var tr = $('<tr>');
                    tr.html('<td>' + val.id + '</td>' +
                        '<td>' + val.cliente + '</td>' +
                        '<td>' + val.numero + '</td>' +
                        '<td>' + val.activo + '</td>');
                    $('#lista').append(tr);*/
                    $('#txtCliente').val(val.cliente);
                });
            },
            error: function (result) {
                alert('ERROR: ' + result.status + ' ' + result.statusText);
            }
        });



    };

    var buscar = function (xml) {
        alert();
        $.ajax({
            type: "POST",
            url: "/Documento/buscaCliente",
            data: JSON.stringify({ xml: xml }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                //console.log(data);


                $.each(data, function (key, val) {
                    $('#txtCliente').val(val.cliente);
                });
            },
            error: function (result) {
                alert('ERROR: ' + result.status + ' ' + result.statusText);
            }
        });



    };

    var insPoducto = function (xml) {
        console.log(xml);
        $.ajax({
            type: "POST",
            url: "/Cliente/insCliente",
            data: JSON.stringify({ xml: xml }),

            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {

                init();
            },
            error: function (result) {
                alert('ERROR: ' + result.status + ' ' + result.statusText);
            }
        });
    };


    var TipoDocumento = function (tipoDoc) {
        alert(tipoDoc);
        if (tipoDoc == 'Factura') {
            $('#idDocumento').html('RUC CLIENTE:');
            
        } else {
            $('#idDocumento').html('BOLETA CLIENTE:');
        }
    };



    return {
        init: init,
        buscar: buscar,
        insPoducto: insPoducto,
        TipoDocumento: TipoDocumento
    };
})();