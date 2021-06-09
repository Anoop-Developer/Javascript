$(".dialog-header .close").click(function(){
    $(this).parent().parent().hide();
});

const loadContent = function () {
    const calculateTotal = function(){
        const total = Number("3");
        return total;
    };

    let content = "<div><span>";
    const loaded = 3;
    const total = calculateTotal();
    for(let i=0; i<loaded; i++){
        content += "<h2>Test " + i + "</h2>";
    }
    const results = loaded == total ? "<h3>Loaded all items.</h3>" : "<h3>Failed to load all items.</h3>";
    content += results + "<span><div>";
    return content;
}

$("#processbtn").click(function(){
    $(this).hide();
    $(this).parent().append('<div class="loader"></div>');
    setTimeout(()=>{
        $(this).parent().find(".loader").remove();
        $(this).parent().append(loadContent());    
    }, 1500);


});