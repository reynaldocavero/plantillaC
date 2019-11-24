using CapaDatos;
using CapaEntidad;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CapaNegocio
{
    public class CNProducto
    {
        public IEnumerable<CEProducto> listarProducto(string xml)
        {
            CDProducto obj = new CDProducto();

            return obj.listarProducto(xml);
        }
    }
}
