"use strict";
var EMD = EMD || {};
EMD.Vendedor = (function () {

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
        alert(xml);
        $.ajax({
            type: "POST",
            url: "/Documento/buscaVendedor",
            data: JSON.stringify({ xml: xml }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                console.log(data);

                var vend = $('#listaVendedor').html('');
                var datalista = $('<datalist id="listademodelos">');
                $.each(data, function (key, val) {
                    //$('#txtVendedor').val(val.vendedor);
                    console.log(val.vendedor);
                    datalista.append('<option value="' + val.vendedor + '">' + val.vendedor + '</option>');
                    
                });
                vend.html(datalista);
                
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