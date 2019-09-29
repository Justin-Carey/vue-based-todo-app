// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue' // import Vue object
import App from './App' // text file that was compiled into js (VUE INSTANCE)


/* eslint-disable no-new */
new Vue({
  el: '#app', // Specifying that we want to plug our app into the DOM
  components: { App },
  template: '<App/>'
})
