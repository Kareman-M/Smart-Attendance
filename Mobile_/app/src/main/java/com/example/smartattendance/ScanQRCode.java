package com.example.smartattendance;


import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.graphics.Color;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import com.google.zxing.integration.android.IntentIntegrator;
import com.google.zxing.integration.android.IntentResult;

import okhttp3.OkHttpClient;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class ScanQRCode extends AppCompatActivity {
    private Button ScanRQCodeBtn;
    private TextView TextCode;
    private TextView ErrorText;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);


        setContentView(R.layout.activity_scan_qrcode);
        ScanRQCodeBtn = findViewById(R.id.idBtnScanQRCode);
        ScanRQCodeBtn.setBackgroundColor(Color.YELLOW);
        TextCode = findViewById(R.id.idTextCode);
        ErrorText = findViewById(R.id.idTextError);
        ScanRQCodeBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                IntentIntegrator intentIntegrator = new IntentIntegrator(ScanQRCode.this);
                intentIntegrator.setOrientationLocked(true);
                intentIntegrator.setPrompt("Scan QR Code");
                intentIntegrator.setDesiredBarcodeFormats(IntentIntegrator.QR_CODE);
                intentIntegrator.initiateScan();
            }
        });
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        Intent intent = getIntent();
        int StudentId = intent.getIntExtra("StudentId",0);
        IntentResult intentResult = IntentIntegrator.parseActivityResult(requestCode, resultCode, data);
        if (intentResult != null) {
            String content = intentResult.getContents();
            if (content != null) {
                OkHttpClient okHttpClient = UnsafeOkHttpClient.getUnsafeOkHttpClient();

                Retrofit retrofit = new Retrofit.Builder()
                        .baseUrl("http://smartattendance.somee.com/")
                        .addConverterFactory(GsonConverterFactory.create())
                        .client(okHttpClient)
                        .build();

                StudentsCourseAttendance model = new StudentsCourseAttendance();
                model.StudenId = StudentId;
                model.Barcode = content;

                ApiInterface apiInterface = retrofit.create(ApiInterface.class);
                Call<Result> call = apiInterface.Attend(model);
                call.enqueue(new Callback<Result>() {
                    @Override
                    public void onResponse(Call<Result> call, Response<Result> response) {
                        //if(call.)
                        Result result = response.body();
                        if(result.getIsCompleted()){
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
                TextCode.append(content);
            }
        } else {
            super.onActivityResult(requestCode, resultCode, data);
        }
    }
}