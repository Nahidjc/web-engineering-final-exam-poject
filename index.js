var element = document.getElementById("submit");
element.addEventListener('click', function () {
    var inputValue = document.getElementById("input-text").value;
    let filter = document.getElementById("filter").value;
    let finalResult;
    var wordArray = [];
    if (filter.length !== 0) {
        var result = inputValue.replace(filter, '');
        wordArray = result.split(' ');
        finalResult = reverseArray(wordArray);


    } else {
        wordArray = inputValue.split(' ');

        finalResult = reverseArray(wordArray);

    }

    console.log(finalResult)
});


function reverseArray(arr) {
    var newArray = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        newArray.push(arr[i]);
    }
    return newArray;
}