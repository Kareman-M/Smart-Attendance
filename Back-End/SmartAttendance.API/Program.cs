using Microsoft.EntityFrameworkCore;
using SmartAttendance.API;
using SmartAttendance.DAL.Context;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddDbContext<SmartAttendanceContext>(opt =>
{
    opt.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});
builder.Services.AddApplicationDependencyInjectionServices(builder.Configuration);

builder.Services.AddCors(option => option.AddPolicy("CorsPolicy", buider =>
{
    buider.WithOrigins("http://localhost:4200/")
    .AllowAnyMethod()
    .AllowAnyHeader()
    ;
}));

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();
app.MapControllers();

app.UseCors("CorsPolicy");
app.Run();
