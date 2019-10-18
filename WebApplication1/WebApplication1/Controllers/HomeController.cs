using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.ModelBinding;
using System.Web.Mvc;
using MySql.Data.MySqlClient;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
        private string connectionString = @"Server=127.0.0.1;Database=laba2;port=3306;User Id=root;password=root;";
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";
            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";
            return View();
        }

        public ActionResult Send(string name, string email, string gender, string age, string genre, string data,
            string comment)
        {
            MySqlConnection conn = new MySqlConnection(connectionString);
            conn.Open();
            MySqlCommand comm = conn.CreateCommand();
            comm.CommandText = "INSERT INTO questionnaire(name, email, gender, age, genre, data, comment) VALUES(@name, @email, @gender, @age, @genre, @data, @comment)";
            comm.Parameters.AddWithValue("@name", name);
            comm.Parameters.AddWithValue("@email", email);
            comm.Parameters.AddWithValue("@gender", gender);
            comm.Parameters.AddWithValue("@age", age);
            comm.Parameters.AddWithValue("@genre", genre);
            comm.Parameters.AddWithValue("@data", data);
            comm.Parameters.AddWithValue("@comment", comment);
            comm.ExecuteNonQuery();
            conn.Close();
            return new RedirectResult("/");
        }
        
    }
    
}