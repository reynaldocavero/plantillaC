using CapaEntidad;
using CapaNegocio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PlantillaCshart.Controllers
{
    public class DocumentoController : Controller
    {
        // GET: Documento
        public ActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public JsonResult buscaCliente(string xml)
        {
            try
            {

                CNCliente clientes = new CNCliente();
                IEnumerable<CECliente> data = clientes.listarCliente(xml);
                return Json(data);
            }

            catch (Exception ex)
            {

                throw new Exception(ex.Message);
            }
            finally
            {

            }

        }

        [HttpPost]
        public JsonResult buscaVendedor(string xml)
        {
            try
            {

                CNVendedor vendedores = new CNVendedor();
                IEnumerable<CEVendedor> data = vendedores.listarVendedor(xml);
                return Json(data);
            }

            catch (Exception ex)
            {

                throw new Exception(ex.Message);
            }
            finally
            {

            }

        }

        [HttpPost]
        public JsonResult buscaProducto(string xml)
        {
            try
            {

                CNProducto productos = new CNProducto();
                IEnumerable<CEProducto> data = productos.listarProducto(xml);
                return Json(data);
            }

            catch (Exception ex)
            {

                throw new Exception(ex.Message);
            }
            finally
            {

            }

        }
    }
}