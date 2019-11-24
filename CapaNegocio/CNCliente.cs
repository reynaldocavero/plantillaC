using CapaDatos;
using CapaEntidad;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CapaNegocio
{
    public class CNCliente
    {
        public IEnumerable<CECliente> listarCliente(string xml)
        {
            CDCliente obj = new CDCliente();

            return obj.listarCliente(xml);
        }
    }
}
