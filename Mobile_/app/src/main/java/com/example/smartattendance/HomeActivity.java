package com.example.smartattendance;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import  android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.google.zxing.integration.android.IntentIntegrator;
import com.google.zxing.integration.android.IntentResult;

import okhttp3.OkHttpClient;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class HomeActivity extends AppCompatActivity {
private Button LoginBtn;
    private EditText UserNameText;
    private EditText Password;
    private TextView ErrorText;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);
        LoginBtn = findViewById(R.id.idBtnLogin);
        UserNameText = findViewById(R.id.idUsername);
        Password = findViewById(R.id.idPassword);
        ErrorText = findViewById(R.id.idTextError);
        LoginBtn.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View view) {
                OkHttpClient okHttpClient = UnsafeOkHttpClient.getUnsafeOkHttpClient();

                Retrofit retrofit = new Retrofit.Builder()
                        .baseUrl("https://106.139.71.19:7226/")
                        .addConverterFactory(GsonConverterFactory.create())
                        .client(okHttpClient)
                        .build();

                LoginModel model = new LoginModel();
                model.username = UserNameText.getText().toString();
                model.password = Password.getText().toString();

                ApiInterface apiInterface = retrofit.create(ApiInterface.class);
                Call<Result> call = apiInterface.loginUser(model);
                call.enqueue(new Callback<Result>() {
                    @Override
                    public void onResponse(Call<Result> call, Response<Result> response) {
                        //if(call.)
                        Result result = response.body();
                        if(result.getIsCompleted()){
                            openNextActivity();
                            return;
                        }
                        ErrorText.append(result.getMessage());
                    }

                    @Override
                    public void onFailure(Call<Result> call, Throwable t) {
                        Log.d("TAG", "onFailure: "+ t.getMessage());
                        ErrorText.append("Something Went wrong please try again");
                    }
                });
            }
        });
    }

    private void openNextActivity() {
        Intent i = new Intent(HomeActivity.this,ScanQRCode.class);
        startActivity(i);
    }


}