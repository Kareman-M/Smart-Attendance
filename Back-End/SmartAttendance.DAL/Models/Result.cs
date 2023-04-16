namespace SmartAttendance.DAL.Models
{
    public class Result
    {
        public string Message { get; set; }
        public object Value { get; set; }
        public bool IsCompleted { get; set; }

        public static string SaveChangesError = "Item Not Added, Something went wrong";
        public static string ITemNotExist = "There is Item Exist";
        public static string Saved = "Item Saved Successfully";
        public static string Deleted = "Item Deleted Successfully";
        public static string Updated = "Item Updated Successfully";
        public static string NullValues = "Can't Add Empty Values";
        public Result(string message, object value = null, bool isCompleted = false)
        {
            Message = message;
            Value = value;
            IsCompleted = isCompleted;
        }
    }
}
