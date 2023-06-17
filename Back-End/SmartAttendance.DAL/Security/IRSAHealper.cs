namespace SmartAttendance.DAL.Security
{
    public interface IRSAHealper
    {
        public string Decrypt(string encrypted);
        public string Encrypt(string decrypted);
    }
}
