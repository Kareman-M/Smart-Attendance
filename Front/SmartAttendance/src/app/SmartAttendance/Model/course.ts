import { InstructorCourse } from "./instructor-course";

export class Course {
    public id: number = 0;
    public name: string = '';
    public avilable: boolean = false;
    public departmentId: number = 0;
    public instructorCourses: InstructorCourse[] = [];
}
