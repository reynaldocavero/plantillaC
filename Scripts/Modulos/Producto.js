"use strict";
var EMD = EMD || {};
EMD.Producto = (function () {

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
 
        $('#listaProductos').html('');
        $.ajax({
            type: "POST",
            url: "/Documento/buscaProducto",
            data: JSON.stringify({ xml: xml }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                console.log(data);

                $.each(data, function (key, val) {
                    var tr = $('<tr>');
                     tr.html('<td>' + val.id + '</td>' +
                         '<td>' + val.descripcion + '</td>' +
                         '<td>' + val.precio + '</td>' +
                         '<td>' + val.stock + '</td>' +
                         '<td><button class="agregarProducto" data-id="' + val.id + '" data-producto="' + val.descripcion + '" data-precio="' + val.precio + '">+</button></td>');
                     $('#listaProductos').append(tr);
               
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


    var tabla = function (id, descripcion, precio) {
        var tr = $('<tr>');
        tr.html('<td>' + id + '</td>' +
            '<td>' + descripcion + '</td>' +
            '<td>' + precio + '</td>' +
            '<td><input type="text" class="cantidad" data-codigo="' + id + '" id="txtCantidad" value="1" data-pre="' + precio + '"/></td>' +
            '<td id="importe' + id + '">' + parseFloat(precio) * parseFloat(($('#txtCantidad').val() == null) ? 1 : $('#txtCantidad').val()) + '</td>'
            );
        $('#listaDetalle').append(tr);
    };
    var calcularTotal = function () {
        var total = 0;
        console.log(total);
        $('#listaDetalle tr').each(function () {

            total = total + parseFloat($(this).find("td").eq(4).html());
            
        });
        $('#tdTotalBruto').html(total);
        var igv = parseFloat( total * 0.18);
        $('#tdIgv').html(igv);
        var totalNeto = total + igv;
        $('#tdTotal').html(totalNeto);

    };


    return {
        init: init,
        buscar: buscar,
        insPoducto: insPoducto,
        tabla: tabla,
        calcularTotal: calcularTotal
    };
})();