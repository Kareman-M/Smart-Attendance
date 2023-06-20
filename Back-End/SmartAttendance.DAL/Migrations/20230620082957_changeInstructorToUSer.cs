using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SmartAttendance.DAL.Migrations
{
    /// <inheritdoc />
    public partial class changeInstructorToUSer : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_InstructorCourse_Instructor_InstructorId",
                table: "InstructorCourse");

            migrationBuilder.AddColumn<int>(
                name: "InstructorId1",
                table: "InstructorCourse",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_InstructorCourse_InstructorId1",
                table: "InstructorCourse",
                column: "InstructorId1");


            migrationBuilder.AddForeignKey(
                name: "FK_InstructorCourse_User_InstructorId",
                table: "InstructorCourse",
                column: "InstructorId",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_InstructorCourse_Instructor_InstructorId1",
                table: "InstructorCourse");

            migrationBuilder.DropForeignKey(
                name: "FK_InstructorCourse_User_InstructorId",
                table: "InstructorCourse");

            migrationBuilder.DropIndex(
                name: "IX_InstructorCourse_InstructorId1",
                table: "InstructorCourse");

            migrationBuilder.DropColumn(
                name: "InstructorId1",
                table: "InstructorCourse");

            migrationBuilder.AddForeignKey(
                name: "FK_InstructorCourse_Instructor_InstructorId",
                table: "InstructorCourse",
                column: "InstructorId",
                principalTable: "Instructor",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
