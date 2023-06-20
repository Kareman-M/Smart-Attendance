using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SmartAttendance.DAL.Migrations
{
    /// <inheritdoc />
    public partial class addUserIdinInstructor : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Instructor",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Instructor_UserId",
                table: "Instructor",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Instructor_User_UserId",
                table: "Instructor",
                column: "UserId",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Instructor_User_UserId",
                table: "Instructor");

            migrationBuilder.DropIndex(
                name: "IX_Instructor_UserId",
                table: "Instructor");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Instructor");
        }
    }
}
