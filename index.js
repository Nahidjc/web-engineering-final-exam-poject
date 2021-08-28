var element = document.getElementById("submit");
element.addEventListener('click', function () {
    var inputValue = document.getElementById("phase").value;
    let filter = document.getElementById("filter").value;
    if (filter.length !== 0) {
        var ret = inputValue.replace(filter, '');
    }

    console.log(ret)
});
