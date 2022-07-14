const tableAClass = document.getElementById('tableA');
const tableBClass = document.getElementById('tableB');
const selectedValue = document.getElementById('grade');

tableBClass.style.display = "none";

function showHide(){
if(selectedValue.value == "b"){
    tableBClass.style.display = "table";
    tableAClass.style.display = "none"
    return console.log("Work b")
}else{
    tableBClass.style.display = "none";
    tableAClass.style.display = "table";
    return console.log("Work a");
}
}
