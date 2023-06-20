using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SmartAttendance.DAL.Migrations
{
    /// <inheritdoc />
    public partial class removeDepartmentFromInstructor : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Instructor_Department_DepartmentId",
                table: "Instructor");

            migrationBuilder.DropIndex(
                name: "IX_Instructor_DepartmentId",
                table: "Instructor");

            migrationBuilder.DropColumn(
                name: "DepartmentId",
                table: "Instructor");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "DepartmentId",
                table: "Instructor",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Instructor_DepartmentId",
                table: "Instructor",
                column: "DepartmentId");

            migrationBuilder.AddForeignKey(
                name: "FK_Instructor_Department_DepartmentId",
                table: "Instructor",
                column: "DepartmentId",
                principalTable: "Department",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
