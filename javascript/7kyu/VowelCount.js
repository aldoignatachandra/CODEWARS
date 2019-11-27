//Aldo Ignata Chandra
//Vowel Count

//Short Version
function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
}

//Long Version
function getCount(str) {
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