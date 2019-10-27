/* eslint-disable no-undef */
import Vue from 'vue'

Vue.prototype.$initFbSDK = () => {
  FB.init({
    appId: '421559441640655',
    autoLogAppEvents: true,
    xfbml: true,
    version: 'v4.0'
  })
}
