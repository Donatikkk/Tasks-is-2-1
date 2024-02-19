const nums = [1,2,6];
let delitsa = false;

for (num of nums)
{
    if (num % 3 === 0)
    {
        delitsa = true;
    }
}

if(delitsa === true)
{
    console.log("Да");
}
else
{
    console.log("Нет");
}