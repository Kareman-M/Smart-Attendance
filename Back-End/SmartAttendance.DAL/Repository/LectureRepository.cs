using SmartAttendance.DAL.Context;
using SmartAttendance.DAL.DBModels;
using SmartAttendance.DAL.Models;
using SmartAttendance.DAL.Repository.IRepository;

namespace SmartAttendance.DAL.Repository
{
    public class LectureRepository : ILectureRepository
    {
        private SmartAttendanceContext _context;
        public LectureRepository(SmartAttendanceContext context) => _context = context;

        public Result Add(Lucture lecture)
        {

            if (lecture== null) return new Result(Result.NullValues);

            _context.Lucture.Add(lecture);

            return _context.SaveChanges() > 0 ? new Result("Lectures Added Successfully", null, true) : new Result(Result.SaveChangesError);
        }

        public Result Delete(int id)
        {
            var lec = _context.Lucture.FirstOrDefault(x => x.Id == id);
            if(lec == null ) return new Result(Result.ITemNotExist);
            _context.Lucture.Remove(lec);
            return _context.SaveChanges() > 0 ? new Result(Result.Deleted, null, true) : new Result(Result.SaveChangesError);
        }

        public IEnumerable<Lucture> GetByInstructorCourseId(int insCrsId)
        {
            return _context.Lucture
                .Where(x => x.InstructorCourseId == insCrsId);
        }

        public IEnumerable<Lucture> GetByInstructorId(int instructorId)
        {
            return _context.Lucture
                .Where(x => x.InstructorCourse.InstructorId == instructorId);
        }
    }
}