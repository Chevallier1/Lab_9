"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Nicolas Catlin
   Date: 03/26/2019

*/

/* Date Variable Declaration */
var thisTime = new Date();

/* Save thisTime to timeStr */
var timeStr = thisTime.toLocaleString();

/* Edit to HTML for timestamp element to timeStr */
document.getElementById("timeStamp").innerHTML = timeStr; //timeStamp not timestamp in textbook.

/* Determining Sky Map */
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();
var mapNum = (2 * thisMonth + thisHour) % 24;

/* HTML Code for displaying sky image */
var imgStr = document.getElementById("mask").innerHTML = "<img src='sd_sky" + mapNum + ".png' />";

/* inserting imgStr into planisphere */
document.getElementById("planisphere").insertAdjacentHTML("afterbegin", imgStr);