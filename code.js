var s=prompt("Nhập tên trái cây bạn mún tìm: ");

var fruit = [
    ["Nho",15],
    ["Tao",25],
    ["Xoai",35],
    ["Chuoi",45],
    ["Mit",5],
]

let i=0,d=0;
for(i in fruit)
{
    console.log(i);
}

for (i of fruit)
{
    console.log(i);
}

for(let i=0;i<fruit.length;i++)
{
    if(s==fruit[i][0])
    {
        console.log("Có "+fruit[i][1]+" trái");
        d++;
    }
}
if(d==0)
{
    console.log("Không có");
}
