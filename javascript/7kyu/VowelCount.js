//Aldo Ignata Chandra
//Vowel Count

/* TASK
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, and u as vowels for this Kata.
The input string will only consist of lower case letters and/or spaces.
*/

//Short Version
function getCount (str) {
    return (str.match(/[aeiou]/ig)||[]).length;
}

//Long Version
function getCount (str) {
    var vowelsCount = 0;
    var vowel_list = 'aeiouAEIOU';

    for(var x = 0; x < str.length ; x++)
    {
        if (vowel_list.indexOf(str[x]) !== -1)
        {
            vowelsCount += 1;
        }
    }

    return vowelsCount;
}

//TEST
console.log(getCount("ARKADEMY"));