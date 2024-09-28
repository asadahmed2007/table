let table = +prompt("enter number")
let num = 5;
for (let i = 0; i <= 10; i++)  {
    if (table == 0){
        // console.log(num + "x" + i + "=" + i + num)
        console.log(table, 'x', i, '=', i*table)
    }else{
        // console.log(table + "x" + i + "=" + i + table)
        console.log(num, 'x', i, '=', i*num)
    }
}