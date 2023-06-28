function remain(){
let OkButton = document.getElementById('OkButton');
console.log(OkButton)
const List_Link = document.getElementById('List_Link')
OkButton.addEventListener('click', function () {
  let Task_input=document.getElementById('Task-input')
  let Music=document.getElementById('music')
  let Time_input=document.getElementById('start_time')
  //const List_Link = document.getElementById
  console.log(Task_input.value);
  console.log(Music.value);
  console.log(Time_input.value);
  // Task_list.append(start_time);
  // Task_list.append(end_time);
  // deleteButton.append('Delete');
  // deleteButton.addEventListener('click', () => Task-list.remove());
  // Task_list.append(input.value);
  // Task_list.append(deleteButton);
  // Task_list.append(Task_list);

});
}

window.onload=function(){
  remain()
}