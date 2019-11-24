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
    public class CDProducto
    {
        Conexion objConexion = new Conexion();
        List<CEProducto> listarProduct = null;
        CEProducto oProducto = null;

        public IEnumerable<CEProducto> listarProducto(string xml)
        {
            try
            {

                SqlConnection cn = objConexion.conectar();
                cn.Open();
                using (SqlCommand cmd = new SqlCommand("spProducto", cn))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.CommandTimeout = 0;
                    cmd.Parameters.AddWithValue("@xml", xml);
                    SqlDataReader dr = cmd.ExecuteReader();
                    if (dr.HasRows)
                    {
                        listarProduct = new List<CEProducto>();
                        while (dr.Read())
                        {
                            oProducto = new CEProducto()
                            {
                                id = dr.IsDBNull(dr.GetOrdinal("id")) ? -1 : dr.GetInt32(dr.GetOrdinal("id")),
                                descripcion = dr.IsDBNull(dr.GetOrdinal("descripcion")) ? "noData" : dr.GetString(dr.GetOrdinal("descripcion")),
                                precio = dr.IsDBNull(dr.GetOrdinal("precio")) ? Convert.ToDecimal(0) : dr.GetDecimal(dr.GetOrdinal("precio")),
                                stock = dr.IsDBNull(dr.GetOrdinal("stock")) ? -1 : dr.GetInt32(dr.GetOrdinal("stock")),
                                activo = dr.IsDBNull(dr.GetOrdinal("activo")) ? -1 : dr.GetInt32(dr.GetOrdinal("activo"))
                            };
                            listarProduct.Add(oProducto);
                        }
                    }

                }

                return listarProduct;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}
