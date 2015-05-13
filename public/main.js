

$(document).on('ready', function(){

    $('#translator').on('submit', function(e){
        e.preventDefault();
        var from = $(this).find('[name="from"]').val();
        var to = $(this).find('[name="to"]').val();
        var text = $(this).find('[name="text"]').val();
        // var dataArr = [fromLanguage, toLanguage, word];
        
        var transData = {text: text};

        for(var i=0 ; i<languages.length ; i++){
            if(from === languages[i][0]){
                transData['from'] = languages[i][1];
            }
             if(to === languages[i][0]){
                transData['to'] = languages[i][1];
            }
        }

        console.log(transData);
        $.post('/translator', transData, function(data){
            console.log('Server says:', data);
        });


    });




});