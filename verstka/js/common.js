$(document).ready(function() {

    //Остановить перезагрузку страницы после отправки формы

    $("form").on('submit', function(e) {
        e.preventDefault();
    });

    // переключение табов

    $(function() {
        var activeTab = 0;
        var arrayForm = [];


        //Табы отключены, чтобы все поля прошли валидацию. Раскомментируйте для включения

        $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');

            activeTab = $(this).index();
        });

        $('.nextPage').on('click', function() {
            // Before each form is valid
            var valid = true;

            // Get parent FORM element of clicked button
            // find all inputs and validate each of them
            $(this).parent().parent().find('input[required]').each(function() {
                // We check only if given field is emtpy
                // you can also add your requirements
                if ($(this).val() === '') {
                    valid = false;
                }
            })

            if (!valid) {
                // if form is not valid then alert to user
                console.log("Заполните все поля");
                // end process
                return;
            }

            // if activeTab index is equal to 5
            // this means that form fields ended and this is the last form is checked
            // you can you use ajax request and send data to your server
            // so your server also must validate forms
            // if (activeTab === 5 && arrayForm.length === 6) {
            //     /* TODO ajax request  */
            //     alert('All fields are good so I am gonna send it to server. But you must wait a response');
            //     return;
            // }

            // all valid forms will be pushed back to the arrayform container
            if (!arrayForm.includes(activeTab))
                arrayForm.push(activeTab);

            console.log(arrayForm.length)


            activeTab++;
            activeTab %= 7;
            console.log(activeTab)
            $("ul.tabs__caption>li:nth-child(" + (activeTab + 1) + ")")
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq(activeTab).addClass('active');
        });
    });

    function mainSlider() {
        $('.ms-item').each(function() {
            $(this).append('<div class="logo"><img src="img/logo-big.png" alt=""></div>');

        });

        /*функция, сменяющая слайды каждую секунду*/

    }

    mainSlider();

});

//new-bid.html work or business tab

// $(document).ready(function () {
//     $("#checkbox-business").click(function () {
//         $("#checkbox-business-content").toggle(this.checked);
//     }).triggerHandler('click');
// });
//
// $(document).ready(function () {
//     $("#checkbox-work").click(function () {
//         $("#checkbox-work-content").toggle(this.checked);
//     }).triggerHandler('click');
// });

// document.getElementById("checkbox_business").addEventListener("click", function () {
//     document.getElementById('checkbox-business-content').style.display = 'block';
//     document.getElementById('checkbox-work-content').style.display = 'none';
// }, false);
//
// document.getElementById("checkbox-work").addEventListener("click", function () {
//     document.querySelector('#checkbox-work-content').style.display = 'block';
//     document.querySelector('#checkbox-business-content').style.display = 'none';
// }, false);


// Скрипт отображает иконку файла после загрузки

function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object
    console.log(files)
        // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

        // Only process image files.
        if (!f.type.match('image.*')) {
            continue;
        }

        var reader = new FileReader();

        // Closure to capture the file information.
        reader.onload = (function(theFile) {
            return function(e) {
                // Render thumbnail.
                var span = document.createElement('span');
                span.className = 'example-1'
                span.innerHTML = ['<div><div class="my-profile__scan"><img class="my-profile__scan-thumb" alt="" src="', e.target.result,
                    '" title="', escape(theFile.name), '"/></div></div>'
                ].join('');
                document.getElementById('list').insertBefore(span, null);
            };
        })(f);

        // Read in the image file as a data URL.
        reader.readAsDataURL(f);
    }
    console.log(files.length)
}

document.getElementById('files').addEventListener('change', handleFileSelect, false);

// Скрипт отображает имя файла после загрузки

$(document).ready(function() {

    $('#work-input-file[type="file"]').change(function() {
        let value = $("#work-input-file[type='file']").val();
        $('.work-input-file-output').text(value);
    });

});


//Валидация форм new-bid.html

$(document).ready(function() {

    let errorMessage = 'Обязательное поле';

    $("#main-info-form").validate({
        // wrapper:'span',
        rules: {
            name1: "required",
            name2: "required",
            number: {
                required: true,
                max: 100,
            },
            "date-of-birth": {
                required: true,
            },
            "birth-place": "required",
            "passport-num": "required",
            "issued-by": "required",
            "issued-date": "required",
            address: 'required',
            'live-address': 'required',
            'live-place': 'required',
            'passportINN': 'required',
            'input-phone': 'required',
            'select-education': 'required',
            files: 'required',

        },
        validClass: 'is-valid',
        errorClass: 'is-invalid',

        messages: {
            name1: "Введите ФИО",
            name2: "ФИО супруги(а)",
            number: 'Сколько иждивенцов?',
            "date-of-birth": "Дата рождения",
            "birth-place": errorMessage,
            "passport-num": errorMessage,
            "issued-by": errorMessage,
            "issued-date": errorMessage,
            address: errorMessage,
            'live-address': errorMessage,
            'live-place': errorMessage,
            'passportINN': errorMessage,
            'input-phone': errorMessage,
            'select-education': errorMessage,
            files: errorMessage,
        }

    });

    $("#business-form").validate({
        rules: {
            name1: 'required',
            name2: {
                required: true,
                max: 100,
            },
            name3: 'required',
            name4: 'required',


        },
        validClass: 'is-valid',
        errorClass: 'is-invalid',

        messages: {
            name1: errorMessage,
            name2: errorMessage,
            name3: errorMessage,
            name4: errorMessage,
        }

    });

    $("#work-form").validate({
        rules: {
            name1: 'required',
            name2: 'required',
            name3: 'required',
            name4: 'required',


        },
        validClass: 'is-valid',
        errorClass: 'is-invalid',

        messages: {
            name1: errorMessage,
            name2: errorMessage,
            name3: errorMessage,
            name4: errorMessage,
        }

    });
    $("#credit-line").validate({
        rules: {
            "credit-line": 'required',
            name1: 'required',
            name2: 'required',
            name3: 'required',
            name4: 'required',


        },
        validClass: 'is-valid',
        errorClass: 'is-invalid',

        messages: {
            "credit-line": errorMessage,
            name1: errorMessage,
            name2: errorMessage,
            name3: errorMessage,
            name4: errorMessage,


        }

    });
    $("#collateral").validate({
        rules: {
            name1: 'required',
            name2: 'required',
            name3: 'required',
            name4: 'required',

        },
        validClass: 'is-valid',
        errorClass: 'is-invalid',
        messages: {
            name1: errorMessage,
            name2: errorMessage,
            name3: errorMessage,
            name4: errorMessage,
        }

    });
    $("#surety").validate({
        rules: {
            name1: 'required',
            name2: 'required',
            name3: 'required',
            name4: 'required',
            name5: 'required',

        },
        validClass: 'is-valid',
        errorClass: 'is-invalid',

        messages: {
            name1: errorMessage,
            name2: errorMessage,
            name3: errorMessage,
            name4: errorMessage,
            name5: errorMessage,
        }

    });
    $("#credit-history").validate({
        rules: {
            name1: 'required',
            name2: 'required',
            name3: 'required',
            name4: 'required',
            name5: 'required',
            name6: 'required',

        },
        validClass: 'is-valid',
        errorClass: 'is-invalid',

        messages: {
            name1: errorMessage,
            name2: errorMessage,
            name3: errorMessage,
            name4: errorMessage,
            name5: errorMessage,
            name6: errorMessage,
        }

    });
    $("#communication-moderator").validate({
        rules: {
            name1: 'required',
            name2: 'required',
            name3: 'required',
            name4: 'required',
            name5: 'required',


        },
        validClass: 'is-valid',
        errorClass: 'is-invalid',

        messages: {
            name1: errorMessage,
            name2: errorMessage,
            name3: errorMessage,
            name4: errorMessage,
            name5: errorMessage,

        }

    });


});


// work business checkbox
//
// let businessCheckbox = document.getElementById('checkbox_business');
// let businessContent = document.querySelectorAll('.business-control')
// if (businessCheckbox.checked === true) {
//     businessContent.required = true
//     console.log(businessContent.required)
// } else {
//     businessContent.required = false
// }
//
// let workCheckbox = document.getElementById('checkbox-work');
// let workContent = document.getElementById('checkbox-work-content');
// if (workCheckbox.checked === true) {
//     workContent.required = true
//     console.log(workContent.required)
// } else {
//     workContent.required = false
// }