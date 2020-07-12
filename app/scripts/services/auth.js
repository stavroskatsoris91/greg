'use strict';

/**
 * @ngdoc service
 * @name gregApp.auth
 * @description
 * # auth
 * Service in the gregApp.
 */
angular.module('gregApp')
  .service('auth', function ($q) {
    var firebase = window.firebase;
    function signUp(email, password) {
      return firebase.auth().createUserWithEmailAndPassword(email, password).then(function (res) {
        return res;
      }).catch(function (error) {
        // var errorCode = error.code;
        // var errorMessage = error.message;
        return error;
        // ...
      });
    }
    function signIn(email, password) {
      return firebase.auth().signInWithEmailAndPassword(email, password).then(function (res) {
        return res;

      }).catch(function (error) {

        return error;
      });
    }
    function anonimusSignIn() {
      return firebase.auth().signInAnonymously().then(function (res) {
        return res;

      }).catch(function (error) {
        return error;
      });
    }

    function status() {
      var promise = $q.defer();
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          // User is signed in.
          // var displayName = user.displayName;
          // var email = user.email;
          // var emailVerified = user.emailVerified;
          // var photoURL = user.photoURL;
          // var isAnonymous = user.isAnonymous;
          // var uid = user.uid;
          // var providerData = user.providerData;
          // console.log(user);
          return promise.resolve(user.isAnonymous ? 'anonymous' : user.email);
          // ...
        } else {
          return promise.resolve(false);
        }
      });
      return promise.promise;
    }
    function logOut(){
      return firebase.auth().signOut();
    }
    function subscribe(){
      return firebase.database().ref('users/' + firebase.auth().currentUser.uid).set({
        subscribedToMailingList: true,
        email: firebase.auth().currentUser.email
      });
    }
    function unsubscribe(){
      return firebase.database().ref('users/' + firebase.auth().currentUser.uid + '/subscribedToMailingList').set(false);
    }
    return {
      signUp: signUp,
      signIn: signIn,
      anonimusSignIn: anonimusSignIn,
      status: status,
      logOut: logOut,
      subscribe : subscribe,
      unsubscribe : unsubscribe,
    };
  });
