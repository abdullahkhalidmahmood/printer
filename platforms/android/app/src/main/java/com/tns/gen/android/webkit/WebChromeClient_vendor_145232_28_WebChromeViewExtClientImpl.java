/* AUTO-GENERATED FILE. DO NOT MODIFY.
 * This class was automatically generated by the
 * static binding generator from the resources it found.
 * Please do not modify by hand.
 */
package com.tns.gen.android.webkit;

public class WebChromeClient_vendor_145232_28_WebChromeViewExtClientImpl
    extends android.webkit.WebChromeClient implements com.tns.NativeScriptHashCodeProvider {
  public WebChromeClient_vendor_145232_28_WebChromeViewExtClientImpl() {
    super();
    com.tns.Runtime.initInstance(this);
  }

  public void onProgressChanged(android.webkit.WebView param_0, int param_1) {
    java.lang.Object[] args = new java.lang.Object[2];
    args[0] = param_0;
    args[1] = param_1;
    com.tns.Runtime.callJSMethod(this, "onProgressChanged", void.class, args);
  }

  public void onReceivedTitle(android.webkit.WebView param_0, java.lang.String param_1) {
    java.lang.Object[] args = new java.lang.Object[2];
    args[0] = param_0;
    args[1] = param_1;
    com.tns.Runtime.callJSMethod(this, "onReceivedTitle", void.class, args);
  }

  public void onShowCustomView(
      android.view.View param_0, android.webkit.WebChromeClient.CustomViewCallback param_1) {
    java.lang.Object[] args = new java.lang.Object[2];
    args[0] = param_0;
    args[1] = param_1;
    com.tns.Runtime.callJSMethod(this, "onShowCustomView", void.class, args);
  }

  @SuppressWarnings("deprecation")
  public void onShowCustomView(
      android.view.View param_0,
      int param_1,
      android.webkit.WebChromeClient.CustomViewCallback param_2) {
    java.lang.Object[] args = new java.lang.Object[3];
    args[0] = param_0;
    args[1] = param_1;
    args[2] = param_2;
    com.tns.Runtime.callJSMethod(this, "onShowCustomView", void.class, args);
  }

  public void onHideCustomView() {
    java.lang.Object[] args = new java.lang.Object[0];
    com.tns.Runtime.callJSMethod(this, "onHideCustomView", void.class, args);
  }

  public boolean onJsAlert(
      android.webkit.WebView param_0,
      java.lang.String param_1,
      java.lang.String param_2,
      android.webkit.JsResult param_3) {
    java.lang.Object[] args = new java.lang.Object[4];
    args[0] = param_0;
    args[1] = param_1;
    args[2] = param_2;
    args[3] = param_3;
    return (boolean) com.tns.Runtime.callJSMethod(this, "onJsAlert", boolean.class, args);
  }

  public boolean onJsConfirm(
      android.webkit.WebView param_0,
      java.lang.String param_1,
      java.lang.String param_2,
      android.webkit.JsResult param_3) {
    java.lang.Object[] args = new java.lang.Object[4];
    args[0] = param_0;
    args[1] = param_1;
    args[2] = param_2;
    args[3] = param_3;
    return (boolean) com.tns.Runtime.callJSMethod(this, "onJsConfirm", boolean.class, args);
  }

  public boolean onJsPrompt(
      android.webkit.WebView param_0,
      java.lang.String param_1,
      java.lang.String param_2,
      java.lang.String param_3,
      android.webkit.JsPromptResult param_4) {
    java.lang.Object[] args = new java.lang.Object[5];
    args[0] = param_0;
    args[1] = param_1;
    args[2] = param_2;
    args[3] = param_3;
    args[4] = param_4;
    return (boolean) com.tns.Runtime.callJSMethod(this, "onJsPrompt", boolean.class, args);
  }

  @SuppressWarnings("deprecation")
  public void onConsoleMessage(java.lang.String param_0, int param_1, java.lang.String param_2) {
    java.lang.Object[] args = new java.lang.Object[3];
    args[0] = param_0;
    args[1] = param_1;
    args[2] = param_2;
    com.tns.Runtime.callJSMethod(this, "onConsoleMessage", void.class, args);
  }

  public boolean onConsoleMessage(android.webkit.ConsoleMessage param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    return (boolean) com.tns.Runtime.callJSMethod(this, "onConsoleMessage", boolean.class, args);
  }

  public int hashCode__super() {
    return super.hashCode();
  }

  public boolean equals__super(java.lang.Object other) {
    return super.equals(other);
  }
}
