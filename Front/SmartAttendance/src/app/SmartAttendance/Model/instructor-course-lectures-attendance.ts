export class InstructorCourseLecturesAttendance {
    public lectureTitle :string = '';
    public attendanceGrade :number= 0;
    public lectureDate :string = '';
    public lectureId :number = 0;
    public students : {id:number, studenId:number, studentName:string,attendAt:string}[] = [];
}
