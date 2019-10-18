using System;

namespace WebApplication1.Models
{
    public class Questionnaire
    {
     public Questionnaire(int id, string name, string email, string gender, string age, string genre, string data, string comment)
        {
            Id = id;
            Name = name;
            Email = email;
            Gender = gender;
            Age = age;
            Genre = genre;
            Data = data;
            Comment = comment;
        }

     public Questionnaire()
     {
     }

     public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Gender { get; set; }
        public string Age { get; set; }
        public string Genre { get; set; }
        public string Data { get; set; }
        public string Comment { get; set; }
    }
}