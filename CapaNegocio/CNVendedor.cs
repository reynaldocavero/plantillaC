using CapaDatos;
using CapaEntidad;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CapaNegocio
{
    public class CNVendedor
    {
        public IEnumerable<CEVendedor> listarVendedor(string xml)
        {
            CDVendedor obj = new CDVendedor();

            return obj.listarVendedor(xml);
        }
    }
}
