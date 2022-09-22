let a1 = [1, 3, 4, 2, 7, 9, 10, 6, 8] ;
let a2 = [1, 3, 9, 11, 5, 7, 13]
let array1 = a1.concat(a2);

/*Tạo hàm lấy phần tử trùng trong mảng JavaScript*/
function number( array, size){
    let result = [];
    let count = 0;
    for (let i = 0; i < size - 1; ++i) {
        for (let j = i + 1; j < size; ++j) {
            if (array[i] == array[j]) {
                /*Tìm thấy phần tử trùng thì thêm vào mảng kết quả*/
                result[count]=array[i];
                ++ count;
            }
        }
    }
    return result
}




//Kiểm tra phần tử trùng nhau
let result1 = number(array1,array1.length);
console.log(result1);

