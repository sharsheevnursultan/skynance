
$(document).ready(function () {

    let errorMessage = 'Заполните это поле';
    //new-bid-yur.html

    $("#2main-info-form").validate({
        // wrapper:'span',
        rules: {
            name1: "required",
            name2: "required",
            name3: "required",
            name4: "required",
            name5: "required",
            name6: "required",
            name7: "required",
            name8: "required",
            name9: "required",
            name10: "required",
            name11: "required",
            name12: "required",
            name13: "required",
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
            name7: errorMessage,
            name8: errorMessage,
            name9: errorMessage,
            name10: errorMessage,
            name11: errorMessage,
            name12: errorMessage,
            name13: errorMessage,
        }

    });
    $("#2credit-line").validate({
        rules: {
            selector: 'required',
            name1: 'required',
            name2: 'required',
            name3: 'required',
            name4: 'required',
            name5: 'required',
            name6: 'required',
            name7: 'required',
            name8: 'required',

        },
        validClass: 'is-valid',
        errorClass: 'is-invalid',

        messages: {
            selector: errorMessage,
            name1: errorMessage,
            name2: errorMessage,
            name3: errorMessage,
            name4: errorMessage,
            name5: errorMessage,
            name6: errorMessage,
            name7: errorMessage,
            name8: errorMessage,

        }

    });
    $("#2chief").validate({
        rules: {
            name1: 'required',
            name2: 'required',
            name3: 'required',
            name4: 'required',
            name5: 'required',
            name6: 'required',
            name7: 'required',
            name8: 'required',
            name9: 'required',
            name10: 'required',
            name11: 'required',
            name12: 'required',
            name13: 'required',
            name14: 'required',
            name15: 'required',
            name16: 'required',
            name17: 'required',
            name18: 'required',
            name19: 'required',
            name20: 'required',
            name21: 'required',
            name22: 'required',
            name23: 'required',
            name24: 'required',
            name25: 'required',
            name26: 'required',
            name27: 'required',
            name28: 'required',
            name29: 'required',
            name30: 'required',

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
            name7: errorMessage,
            name8: errorMessage,
            name9: errorMessage,
            name10: errorMessage,
            name11: errorMessage,
            name12: errorMessage,
            name13: errorMessage,
            name14: errorMessage,
            name15: errorMessage,
            name16: errorMessage,
            name17: errorMessage,
            name18: errorMessage,
            name19: errorMessage,
            name20: errorMessage,
            name21: errorMessage,
            name22: errorMessage,
            name23: errorMessage,
            name24: errorMessage,
            name25: errorMessage,
            name26: errorMessage,
            name27: errorMessage,
            name28: errorMessage,
            name29: errorMessage,
            name30: errorMessage,
        }

    });
    $("#2booker").validate({
        rules: {
            name1: 'required',
            name2: 'required',
            name3: 'required',
            name4: 'required',
            name5: 'required',
            name6: 'required',
            name7: 'required',
            name8: 'required',
            name9: 'required',
            name10: 'required',
            name11: 'required',
            name12: 'required',
            name13: 'required',
            name14: 'required',
            name15: 'required',

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
            name7: errorMessage,
            name8: errorMessage,
            name9: errorMessage,
            name10: errorMessage,
            name11: errorMessage,
            name12: errorMessage,
            name13: errorMessage,
            name14: errorMessage,
            name15: errorMessage,
        }

    });
    $("#2collateral").validate({
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
    $("#2surety").validate({
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
    $("#2credit-history").validate({
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


});

