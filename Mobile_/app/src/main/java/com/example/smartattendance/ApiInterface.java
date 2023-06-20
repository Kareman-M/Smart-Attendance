package com.example.smartattendance;

import  retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.POST;

public interface ApiInterface {
    @POST("api/Account/Login")
    public  Call<Result> loginUser(@Body LoginModel model);

    @POST("api/StudentCourseAttendance/Add")
    public  Call<Result> Attend(@Body StudentsCourseAttendance model);
}
