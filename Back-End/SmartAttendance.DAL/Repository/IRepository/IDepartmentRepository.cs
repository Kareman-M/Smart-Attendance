using SmartAttendance.DAL.DBModels;
using SmartAttendance.DAL.Models;

namespace SmartAttendance.DAL.Repository.IRepository
{
    public interface IDepartmentRepository
    {
        Result GetAll();
        Result Add(Department department);
        Result Remove(int id);
    }
}