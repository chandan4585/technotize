/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var app = {
    // Application Constructor
    initialize: function() {
//        alert("call");
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
       
//        alert("call2");
       
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
//        alert("call3");
        this.receivedEvent('deviceready');
       
        
        
    },
    

    // Update DOM on a Received Event
    receivedEvent: function(id) {
//        alert("call4");
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
    
};


app.initialize();
//document.addEventListener("deviceready", onDeviceReady, false);
//function onDeviceReady() {
//    console.log(navigator.camera);
//}
var map;
var marker;
var watchID;

//$(document).ready(function() {
////    alert("call5");
//    document.addEventListener("deviceready", onDeviceReady, false);
//    
//    //uncomment for testing in Chrome browser
//    onDeviceReady();
//});

//function onDeviceReady() {
////    alert("call6");
////    $(window).unbind();
//    $(window).bind('pageshow resize orientationchange', function(e) {
//        max_height();
//       
//    });
//    max_height();
//    google.load("maps", "3.8", {"callback": map, other_params: "sensor=true&language=en"});
//     
//}

//function max_height() {
//    var h = $('div[data-role="header"]').outerHeight(true);
//    var f = $('div[data-role="footer"]').outerHeight(true);
//    var w = $(window).height();
//    var c = $('div[data-role="content"]');
//    var c_h = c.height();
//    var c_oh = c.outerHeight(true);
//    var c_new = w - h - f - c_oh + c_h;
//    var total = h + f + c_oh;
//    if (c_h < c.get(0).scrollHeight) {
//        c.height(c.get(0).scrollHeight);
//    } else {
//        c.height(c_new);
//    }
//}
//
//function map() {
//    var latlng = new google.maps.LatLng(50.08, 14.42);
//    var myOptions = {
//        zoom: 15,
//        center: latlng,
//        streetViewControl: true,
//        mapTypeId: google.maps.MapTypeId.ROADMAP,
//        zoomControl: true
//    };
//    map = new google.maps.Map(document.getElementById("map"), myOptions);
//
//    google.maps.event.addListenerOnce(map, 'tilesloaded', function() {
//        watchID = navigator.geolocation.watchPosition(gotPosition, null, {maximumAge: 5000, timeout: 60000, enableHighAccuracy: true});
//    });
//}
//
//// Method to open the About dialog
//function showAbout() {
//    showAlert( "Created by chandan","Google Maps");
//}
//;
//
//function showAlert(message, title) {
//    if (window.navigator.notification) {
//        window.navigator.notification.alert(title,null,null,message,marker,"ok");
//    } else {
//        alert(title ? (title + ": " + message) : message);
//    }
//}
//
//function gotPosition(position) {
//    map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
//
//    var point = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//    if (!marker) {
//        //create marker
//        marker = new google.maps.Marker({
//            position: point,
//            map: map
//        });
//    } else {
//        //move marker to new position
//        marker.setPosition(point);
//    }
//}
//camera
//
//           var pictureSource;   // picture source
//    var destinationType; // sets the format of returned value
//
//    // Wait for device API libraries to load
//    //
//   
//
//    // Called when a photo is successfully retrieved
//    //
//    function onPhotoDataSuccess(imageData) {
//      // Uncomment to view the base64-encoded image data
//      // console.log(imageData);
//
//      // Get image handle
//      //
//      var smallImage = document.getElementById('smallImage');
//
//      // Unhide image elements
//      //
//      smallImage.style.display = 'block';
//
//      // Show the captured photo
//      // The in-line CSS rules are used to resize the image
//      //
//      smallImage.src = "data:image/jpeg;base64," + imageData;
//    }
//
//    // Called when a photo is successfully retrieved
//    //
//    function onPhotoURISuccess(imageURI) {
//      // Uncomment to view the image file URI
//      // console.log(imageURI);
//
//      // Get image handle
//      //
//      var largeImage = document.getElementById('largeImage');
//
//      // Unhide image elements
//      //
//      largeImage.style.display = 'block';
//
//      // Show the captured photo
//      // The in-line CSS rules are used to resize the image
//      //
//      largeImage.src = imageURI;
//    }
//
//    // A button will call this function
//    //
//    function capturePhoto() {
//        
//      // Take picture using device camera and retrieve image as base64-encoded string
//      
//      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
//          sourceType: navigator.camera.PictureSourceType.CAMERA,
//        destinationType: navigator.camera.destinationType.DATA_URL });
//    alert("navigator.camera.DestinationType");
//    }
//
//    // A button will call this function
//    //
//    function capturePhotoEdit() {
//        alert("hii");
//      // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
//      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
//          sourceType: navigator.camera.PictureSourceType.CAMERA,
//        destinationType: navigator.camera.destinationType.DATA_URL });
//    }
//
//    // A button will call this function
//    //
//    function getPhoto(source) {
//      // Retrieve image file location from specified source
//      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
//        destinationType: navigator.camera.destinationType.FILE_URI,
//        sourceType: source });
//    }
//
//    // Called if something bad happens.
//    //
//    function onFail(message) {
//      alert('Failed because: ' + message);
//    }

      