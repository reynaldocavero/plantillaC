using CapaEntidad;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CapaDatos
{
    public class CDCliente
    {
        Conexion objConexion = new Conexion();
        List<CECliente> listCliente = null;
        CECliente oCliente = null;

        public IEnumerable<CECliente> listarCliente(string xml)
        {
            try
            {

                SqlConnection cn = objConexion.conectar();
                cn.Open();
                using (SqlCommand cmd = new SqlCommand("spCliente", cn))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.CommandTimeout = 0;
                    cmd.Parameters.AddWithValue("@xml", xml);
                    SqlDataReader dr = cmd.ExecuteReader();
                    if (dr.HasRows)
                    {
                        listCliente = new List<CECliente>();
                        while (dr.Read())
                        {
                            oCliente = new CECliente()
                            {
                                id = dr.IsDBNull(dr.GetOrdinal("id")) ? -1 : dr.GetInt32(dr.GetOrdinal("id")),
                                cliente = dr.IsDBNull(dr.GetOrdinal("cliente")) ? "noData" : dr.GetString(dr.GetOrdinal("cliente")),
                                //numero = dr.IsDBNull(dr.GetOrdinal("numero")) ? Convert.ToDecimal(0) : dr.GetDecimal(dr.GetOrdinal("numero")),
                                numeroDoc = dr.IsDBNull(dr.GetOrdinal("numeroDoc")) ? "noData" : dr.GetString(dr.GetOrdinal("numeroDoc")),
                                activo = dr.IsDBNull(dr.GetOrdinal("activo")) ? -1 : dr.GetInt32(dr.GetOrdinal("activo"))
                            };
                            listCliente.Add(oCliente);
                        }
                    }

                }

                return listCliente;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}
