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
            'files-passport': 'required',
            'files-reference': 'required',

        },
        validClass: 'is-valid',
        errorClass: 'is-invalid',

        messages: {
            name1: errorMessage,
            name2: errorMessage,
            number: errorMessage,
            "date-of-birth": errorMessage,
            "birth-place": errorMessage,
            "passport-num": errorMessage,
            "issued-by": errorMessage,
            "issued-date": errorMessage,
            address: errorMessage,
            'live-address': errorMessage,
            'live-place': errorMessage,
            'passportINN': errorMessage,
            'input-phone': "В формате: 0 (700) 123-456",
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
