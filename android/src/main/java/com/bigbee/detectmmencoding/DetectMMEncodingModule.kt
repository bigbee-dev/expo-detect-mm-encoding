package com.bigbee.detectmmencoding

import android.graphics.Paint
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class DetectMMEncodingModule : Module() {
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  override fun definition() = ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('DetectMMEncoding')` in JavaScript.
    Name("DetectMMEncoding")

    // Defines a JavaScript synchronous function that runs the native code on the JavaScript thread.
    Function("isUnicode") {
      val paint = Paint()

      return@Function paint.measureText("က") == paint.measureText("က္က")
    }
  }
}
