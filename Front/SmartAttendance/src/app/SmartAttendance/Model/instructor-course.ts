import { Lucture } from "./lucture";

export class InstructorCourse {
    public  id :number = 0;
    public  instructorId :number = 0;
    public  totalAttendanceGrade :number = 0;
    public  term :string = '';
    public  createdAt :string = '';
    public  courseId :number = 0;
    public  courseName :string = '';
    public  departmentName :string = '';
    public  departmentId :number = 0;
    public  lectures  :Lucture[] = []
}
