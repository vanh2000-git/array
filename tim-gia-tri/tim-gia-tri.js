let numbers = [1, 3, 10 , 5 ,2];
function find(){
let check = true;
    let value = +document.getElementById('value').value;

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] === value) {
                   check= false;
                   break;
        }
    }
    check === false?document.write("Giá trị có trong mảng"):document.write("Giá trị không có trong mảng");
}