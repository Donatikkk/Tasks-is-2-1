const nums = [1,2,3,4,5,6,7,8,9,10];
let isNegative = false;

for (num of nums)
{
    if (num < 0)
    {
        isNegative = true;
    }
}

if(isNegative === true)
{
    console.log("Да");
}
else
{
    console.log("Нет");
}