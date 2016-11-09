var b = "bold"
var n = "normal"
var i = "italic"
var s = 24;
var color = "black";
var styles = [""];
var weights = [""];
var texts = "";

var page = new tabris.Page({
  topLevel: true
});

tabris.ui.set("toolbarVisible", false);

var bolds = new tabris.CheckBox({
  layoutData:{left: 16, top: 170},
  text: "Bold",
  font: "bold 16px",
}).on("select", function(checkbox, checked, widget) {
  styles = [checked ? b : n ];
  if (texts == "") {} else {
  textInput.set("font", weights + " " + styles + " " + s + "px ")
  }
}).appendTo(page);

var italics = new tabris.CheckBox({
  layoutData:{left: 16, top: 190},
  text: "Italic",
  font: "italic 16px",
}).on("select", function(checkbox, checked, widget) {
  weights = [checked ? i : n ];
  if (texts == "") {} else {
  textInput.set("font", weights + " " + styles + " " + s + "px ")
  }
}).appendTo(page);

var size = new tabris.TextInput({
  layoutData: {right: 16, top: 155},
  keyboard: "number",
  background: "white",
  message: "default(24px)",
  alignment: "center",
}).on("change:text", function(widget, text){
  s = text
  teksti(widget)
}).appendTo(page);

var textcolor = new tabris.TextInput({
  layoutData: {right: 16, top: 185},
  background: "white",
  message: "default(black)",
  alignment: "center",
  textColor: color
}).on("change:text", function(widget, text){
  color = text
  colora(widget)
}).appendTo(page);

new tabris.Button({
  layoutData: {right: 5, top: 110},
  text: "Enter",
  font: "20px"
}).on("select", function(widget, text){
  enter(widget)
}).appendTo(page);

var textInput = new tabris.TextInput({
  layoutData: {top: 0, left: 0, right: 0, height: 170},
  autoCorrect: true,
  focused: true,
  type: "multiline",
  background: "white",
  alignment: "center",
  message: "Type something",
  font: "45px",
}).on("change:text", function(widget, text){
  texts = text
  teksti(widget)
}).appendTo(page);

var scroll = new tabris.ScrollView({
  direction: "vertical",
    layoutData: {top: 220, left: 10, right: 10, bottom: 0}
}).appendTo(page);

page.open();

function enter(widget){
   for (var style of styles){
  for (var weight of weights){
  var font = weight + " " + style + " " + s + "px ";
  if (texts == ""){
 } else {
 var texti = new tabris.TextInput({
   layoutData: {centerX: 0, top: "prev()"},
   background: "white",
   text: texts,
   font: font,
   textColor: color,
   alignment: "center"
   }).appendTo(scroll);
 }
var erase = new tabris.Button({
  layoutData: {left: 5, bottom: 5, width: 35, height: 40},
  text: "X",
  background: "white"
}).on("select", function(widget){
  texti.dispose();
  this.dispose();
}).appendTo(page);
textInput.set("text", "")
}}};

function colora(widget){
     if (color == ""){
      color = "black"
      textInput.set("textColor", color)
      textcolor.set("textColor", color)
    } else {
      color = color
      textInput.set("textColor", color)
      textcolor.set("textColor", color)
    }
}

function teksti(widget){
 for (var style of styles){
  for (var weight of weights){
  var font = weight + " " + style + " " + s + "px ";
  if (texts == ""){
    textInput.set("font", "45px")
  } else {
   if (s < 1){
     textInput.set("font", weight + " " + style + " " + "24px")
   } else {
    textInput.set("font", font)
}
   }
 }  
   }
   }
function tekstit(widget){
for (var style of styles){
  for (var weight of weights){
  var font = weight + " " + style + " " + s + "px ";
	textInput.set({text: texts, font: font, textColor: color})
}
   }
 }  
