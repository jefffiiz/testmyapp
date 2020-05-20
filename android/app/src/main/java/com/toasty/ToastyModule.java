package com.toasty;

import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Map;

import es.dmoral.toasty.Toasty;

public class ToastyModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";

    ToastyModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(DURATION_SHORT_KEY, Toasty.LENGTH_SHORT);
        constants.put(DURATION_LONG_KEY, Toasty.LENGTH_LONG);
        return constants;
    }

    @Override
    public String getName() {
        return "Toasty";
    }

    @ReactMethod
    public void show(String message, int duration){
        Toasty.info(getReactApplicationContext(), message, duration, true).show();
    }
}
