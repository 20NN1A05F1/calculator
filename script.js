
function addvalue(val){
    let v=document.getElementById('screen').value +=val
}
function equal(){
    let v=document.getElementById('screen')
    v.value=eval(v.value)
}
function clearscreen() {
    let v = document.getElementById('screen');
    v.value = ""; 
}
function deletelast() {
    let screen = document.getElementById('screen');
    screen.value = screen.value.slice(0, -1); 
}