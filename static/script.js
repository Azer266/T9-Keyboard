var time = new Date().getTime();
var up,down;
$(document).ready(function() {
  $("#phone").find('button').mousedown(function(event){
    down = new Date().getTime();
  })

  $("#phone").find("button").mouseup(function(event) {
    up = new Date().getTime();
    var button_pressed = $(event.currentTarget).data("value")
    $("#result").val(t9($("#result").val(), button_pressed))
  })
})
var map ={
  '1': '.,!',
  '2' : 'abc',
  '3' : 'def',
  '4' : 'ghi',
  '5' : 'jkl',
  '6' : 'mno',
  '7' : 'pqrs',
  '8' : 'tuv',
  '9' : 'wxyz',
  '*' : '*',
  '0' : '0',
  '#' : '#',
}
var delay = 1000;
var prev_button='0';
var char =0
function t9(text, button_pressed) {
  // Write your code here

  current_time =new Date().getTime()
  var diff = current_time -time;
  time = current_time;
  if ( (diff>delay) || (button_pressed!=prev_button) ){
    char =0;
  }
  var ctext=text;
  if ( up-down > 500){
    ctext+= button_pressed;
  }
  else{
    ctext +=map[button_pressed][char];
  }
  if (prev_button==button_pressed){
    if (diff<delay)  {
      var res_length = text.length;
      if (button_pressed=='*' || button_pressed=='0' || button_pressed=='#' ){
        char =0;
      }
      else{
        char++;
        console.log('here')
      }
      console.log(char);
      ctext = text.substr(0,res_length-1) + map[button_pressed][char];
      if( char== map[button_pressed].length-1){
        char=-1;
      }
    }
    else{
      char =0;
    }
  }
  else{
    char=0;
  }
  prev_button = button_pressed;
  text = ctext;
  return text
}