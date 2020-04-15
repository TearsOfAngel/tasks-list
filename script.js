$(document).ready(function(){


    function addDeal() {
        let name = $('input').val(),
            text = $('textarea').val(),
            date = new Date().toLocaleString();

        if (name.length !== 0 && text.length !== 0) {
            $('.empty').hide();
            $('.list_of_cases').append(`
            
        <div class="todoitem">
            <div class="todoname">${name}</div>
            <button class="wrap"></button>
            <button class="delete_case"></button>
            <div class="wraping">
                <div class="case_text">${text}</div>
            </div>
        </div>
            
            `);
            name = $('input').val(``);
            text = $('textarea').val(``);
            
        }
        /*else {
            $('input').addClass(`error`);
            $('textarea').addClass(`error`); 
        }*/
    }
    function deleteCase(item) {
        item.remove();
    }

    $('#buttonadd').on('click', addDeal);

    $('body').on('click', '.delete_case', function(event){
        event.preventDefault();

        let item = $(this).parents('.todoitem');

        deleteCase(item);

        let cases = $('.todoitem') ;

        if (cases.length == 0) {
            $('.empty').show();
        }
    });

    $('body').on('click', '.wrap', function() {
        $(this).siblings(".wraping").slideToggle("slow");
       
      });

});