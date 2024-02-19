let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let output = [];
let lastIndex = 0;

for(value of nums)
{
    if (value % 3 === 0)
    {
        output[lastIndex] = value;
        lastIndex++;
    }
    else if (value % 5 === 0)
    {
        output[lastIndex] = value;
        lastIndex++;
    }
    else if (value % 7 === 0)
    {
        output[lastIndex] = value;
        lastIndex++;
    }
}

console.log(output);