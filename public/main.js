$(document).on('ready', function(){

    $('#translator').on('submit', function(e){
        e.preventDefault();
        var fromLanguage = $(this).find('[name="language-from"]').val();
        var toLanguage = $(this).find('[name="language-to"]').val();
        var word = $(this).find('[name="word"]').val();
        var dataArr = [fromLanguage, toLanguage, word];
        console.log(fromLanguage);
        $.post('/translator', dataArr, function(data){
            console.log('Server says:', data);
        });


    });




});