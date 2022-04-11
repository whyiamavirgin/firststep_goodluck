$('#menu-checkbox').on('click', function hide() {
    var x = document.getElementById('first');
    var y = document.getElementById('second');
    var z = document.getElementById('binary');
    if ( $(this).is(':checked') ) {
        x.className -= "first";
        x.className += " hidden";
        y.className += " hidden2";
        setTimeout( function ()  {
            x.className -= " hidden";
            x.className += ' first2';
            setTimeout(function(){
                z.className -= "binarydiv"
                z.className += " binarynorm"
            },650)
        }, 5000);
    } else {
        x.className = "first hidden";
    }
    
})