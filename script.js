'use strict';

$(document).ready(function () {

    //--------------------------------------bold text
    let chekerBold = true;
    $('.bold').click(() => { //bold text
        if (chekerBold) {
            $('.text').css({
                fontWeight: '900'
            })
            chekerBold = false;
        } else {
            $('.text').css({
                fontWeight: '300'
            })
            chekerBold = true;
        }
    })
    //--------------------------------------/bold text

    //--------------------------------------italic text
    let chekerItalic = true;
    $('.italic').click(() => {
        if (chekerItalic) {
            $('.text').css({
                fontStyle: 'italic'
            })
            chekerItalic = false;
        } else {
            $('.text').css({
                fontStyle: 'normal'
            })
            chekerItalic = true;
        }
    })
    //--------------------------------------/italic text

    //--------------------------------------underline text
    let chekerUnderline = true;
    $('.underline').click(() => {
        if (chekerUnderline) {
            $('.text').css({
                textDecoration: 'underline'
            })
            chekerUnderline = false;
        } else {
            $('.text').css({
                textDecoration: 'none'
            })
            chekerUnderline = true;
        }
    })
    //--------------------------------------/underline text

    //--------------------------------------line-through
    let chekerThrough = true;
    $('.strikethrough').click(() => {
        if (chekerThrough) {
            $('.text').css({
                textDecoration: 'line-through'
            })
            chekerThrough = false;
        } else {
            $('.text').css({
                textDecoration: 'none'
            })
            chekerThrough = true;
        }
    })


    //--------------------------------------/line-through

    //--------------------------------------text-align
    $('.alignLeft').click(() => { // text-align left
        $('.text').css({
            'text-align': 'left'
        })
    })
    $('.alignCenter').click(() => { // text-align center
        $('.text').css({
            'text-align': 'center'
        })
    })
    $('.alignRight ').click(() => { // text-align right
        $('.text').css({
            'text-align': 'right'
        })
    })
    //--------------------------------------/text-align

    //--------------------------------------font-family

    $('.textFont').focus(() => { //font-family focus
        $('.ulFontFamily').show()
    });

    $('.ulFontFamily>li').each(function (i, elem) { //li (font-family style)
        elem.style.fontFamily = `${elem.textContent}`
    });


    for (let i = 0; i < $('.ulFontFamily>li').length; i++) { //click: li font-family
        $('.ulFontFamily>li')[i].addEventListener('click', function () {
            $('.text').css({
                'fontFamily': `${this.textContent}`
            })
            $('.ulFontFamily').hide()
        });
    }


    //-------------------------------------/font-family

    //--------------------------------------font-size

    $('.textSize').click(() => { //font-size focus
        $('.ulTextSize').show()
    });
   
    for (let i = 0; i < $('.ulTextSize >li').length; i++) {
        $('.ulTextSize >li')[i].addEventListener('click', function () {
         

            $('.text').css({
                'fontSize': `${this.textContent}`
            })
            $('.ulTextSize ').hide();
        })
    }
    $('.ulTextSize>li').each(function () { //list font-family
        this.style.fontSize = `${this.textContent}`
    });

    //  $('.ulTextSize').blur(() => { //font-size blur
    //     $('.ulTextSize').hide()
    // });

    //--------------------------------------modal text-color
    let colors = ['#37b99a', '#2e9c83', '#44c770', '#38aa60', '#4298db', '#3680b8', '#975db7', '#8a49ab', '#36485e', '#2d3e50', '#ecc203', '#ed9c0c', '#df7f1f', '#cb5800', '#e0523c', '#b83e28', '#edeff2', '#bec2c6', '#94a3a4', '#7f8a8c', '#000001', ]; //colors
    for (let i = 0; i < colors.length; i++) {
        $('.colorsBody>div')[i].style.backgroundColor = colors[i];
    }
    $('.textColor').click(() => { //colors modal window
        $('.modalBgText').css({
            'display': 'flex'
        });
        $('.textDivColors').css({
            'display': 'block'
        })

    });
    $('.modalBgText').click(function () {
        $('.modalBgText').css({
            'display': 'none'
        })
        $('.textDivColors').css({
            'display': 'none'
        })
    })
    $('.fa-times').click(function () {
        $('.modalBgText').css({
            'display': 'none'
        })
        $('.textDivColors').css({
            'display': 'none'
        })
    })

    for (let i = 0; i < colors.length; i++) { //click for all colors elements
        $('.colorsBody>div')[i].addEventListener('click', function () {
            $('.text').css('color', `${this.style.backgroundColor}`);
        });
    }
    //--------------------------------------/modal text-color

    //--------------------------------------modal background-color
    $('.bgColor')[0].addEventListener('click', function () {
        $('.textDivBackground')[0].style.display = 'block';
        $('.modalBg').css({
            'display': 'block'
        })
    })
    //-------------modalBg click
    $('.modalBg').click(function () {
        $('.modalBg').css({
            'display': 'none'
        })
        $('.textDivBackground').css({
            'display': 'none'
        })
    })
    $('.bgI').click(() => {
        $('.modalBg').css({
            'display': 'none'
        })
        $('.textDivBackground').css({
            'display': 'none'
        })
    })

    //--------------------------------------tabs

    for (let i = 0; i < $('.tab').length; i++) {
        $('.tab')[i].addEventListener('click', function () {
            for (let i = 0; i < $('.tab').length; i++) {
                $('.tabContent')[i].style.display = 'flex';
                $('.tab')[i].classList.add('whiteborder');

                if ($('.tab')[i] != this) {
                    $('.tabContent')[i].style.display = 'none';
                    $('.tab')[i].classList.remove('whiteborder');
                }
            }
        })
    }
    $('.tabContent')[0].style.display = 'flex';
    //--------------------------------------/tabs

    //--------------------------------------tabs Colors
    for (let i = 0; i < $('.tabContentColors>div').length; i++) { // '.tabImg>div' bacground-color
        $('.tabContentColors>div')[i].style.backgroundColor = colors[i];
    }
    for (let i = 0; i < $('.tabContentColors>div').length; i++) {// click on some div with bacground-color
        $('.tabContentColors>div')[i].addEventListener('click', function () {
            $('.text')[0].style.backgroundImage = '';
            $('.text')[0].style.backgroundColor = this.style.backgroundColor
        })
    }

    //--------------------------------------tabs Images
    let imgArray = ['url(images/im1.jpg)', 'url(images/im2.jpg)', 'url(images/im3.jpg)', 'url(images/im4.jpg)', 'url(images/im5.jpg)', 'url(images/im6.jpg)', 'url(images/im7.jpg)', 'url(images/im8.jpg)', 'url(images/im9.jpg)', ];
    for (let i = 0; i < $('.tabImg>div').length; i++) {// '.tabImg>div' bacground-image
        $('.tabImg>div')[i].style.backgroundImage = imgArray[i];

    }
    for (let i = 0; i < $('.tabImg>div').length; i++) {// click on some div with bacground image
        $('.tabImg>div')[i].addEventListener('click', function () {
            $('.text')[0].style.backgroundImage = this.style.backgroundImage;
        })
    }

    //--------------------------------------files input
    const img = document.forms['img'];
    img.file.onchange = function (event) {
        let url = URL.createObjectURL(event.target.files[0]);
        $('.text')[0].style.backgroundImage = `url(${url})`;
    }

    $('#search').click(function () { // if click input[type='search'] to click input[type="file"] 
        $('#lableFile').click();
    })
    //--------------------------------------/files input

    //--------------------------------------lock button
    $('.lock').click(() => { //show modal window 'Sign in'
        $('#modalWindowForm').css('display', 'block');
    })
    //--------------------------------------/lock button


    //--------------------------------------modal window 'Sign in'
    $('#loginBtn').click(function () { // clear all value and style if press button 'Sign in'
        $('#empty').hide();
        $('#invalidValues').hide();
        $('#login').css({
            boxShadow: 'none',
        })
        $('#password').css({
            boxShadow: 'none',
        })


        if ($('#login').val() == '' || $('#password').val() == '') { //if value is empty
            $('#empty').show();
            $('#login').css({
                boxShadow: ' 0px 0px 1px 1px #d61010b7',
            })
            $('#password').css({
                boxShadow: ' 0px 0px 1px 1px #d61010b7',
            })

        } else if ($('#login').val() != 'admin' || $('#password').val() != 'admin') { //if value is not admin
            $('#invalidValues').show();
            $('#login').css({
                boxShadow: ' 0px 0px 1px 1px #d61010b7',
            })
            $('#password').css({
                boxShadow: ' 0px 0px 1px 1px #d61010b7',
            })
        } else { // values is valid
            $('#modalWindowForm').hide();
            $('#empty').hide();
            $('#invalidValues').hide();
            $('#login').val('');
            $('#password').val('');
        }
    })
    // ---------------------------CODE BUTTON--------------------
    $('.code').click(() => { //open window to change text
        $('.wrapperAdmin').css('display', 'block');
        $('.wrapper').css('display', 'none');
        $('#textarea').val($('.text').html()); // innerHTML from '.text' to '#textarea'
    })
    /* -------------------------TEXTAREA WRAPPER------------------- */
    $('.saveBtn').click(() => { // SAVE BUTTON
        $('.text').html($('#textarea').val());
        $('.wrapper').css('display', 'block');
        $('.wrapperAdmin').css('display', 'none');
    })
    /* -------------------------MODAL TABLE WINDOW------------------- */
    $('.tableBtn').click(() => { //click to show modal window
        $('#modalTableWindow').show();
        $('#tableWindow').css('display', 'block');
    })
    $('.canselTable').click(() => { //click to exit modal window
        $('#tableWindow').css('display', 'none');
        $('#modalTableWindow').css('display', 'none');

    })
    $('#modalTableWindow').click(() => { //click to exit modal window
        $('#modalTableWindow').css('display', 'none');
        $('#tableWindow').css('display', 'none');
        $('.olwrapp').css('display', 'none');
        $('.ulwrapp').css('display', 'none');

    })
    $('.bgI').click(() => { // icon to closse modal window
        $('.olwrapp').css('display', 'none');
        $('#modalTableWindow').css('display', 'none');
        $('.ulwrapp').css('display', 'none');
    })

    // --------------------------BUTTON "CREATE TABLE"-----------
    $('#createTB').click(() => {

        /*         let checkCountTR = false;
        let checkWidthTD = false;
        let checkWidthBorder = false;
        let countTD = false;
        let checkHeigthTD = false;


        let checkerValue = function (id, checker) {
            if (isNaN(+$(id).val()) || $(id).val() == false) {
                $(id).css('box-shadow', ' 0px 0px 0px 2px rgba(255,17,17,0.4)')
            } else {
                $(id).css('box-shadow', 'none')
                checker = true;//---------------------------- ЧОМУ НЕ ПРАЦЮЮТЬ ЧЕКЕРИ?
            }
        }
        checkerValue('#countTR', checkCountTR);
        checkerValue('#widthOfTD', checkWidthTD);
        checkerValue('#widthOfBorder', checkWidthBorder);
        checkerValue('#countTD', countTD);
        checkerValue('#heigthTD', checkHeigthTD);
        console.log(checkWidthTD);
         */


        // --------------------------------------------check if some value is wrong
        let checkCountTR = false;
        if (isNaN(+$('#countTR').val()) || !$('#countTR').val()) { //check if value countTR
            $('#countTR').css('box-shadow', ' 0px 0px 0px 2px rgba(255,17,17,0.4)')
        } else {
            $('#countTR').css('box-shadow', 'none');
            checkCountTR = true;
        }

        let checkWidthTD = false;
        if (isNaN(+$('#widthOfTD').val()) || !$('#widthOfTD').val()) { //check if value countTD
            $('#widthOfTD').css('box-shadow', ' 0px 0px 0px 2px rgba(255,17,17,0.4)')
        } else {
            $('#widthOfTD').css('box-shadow', 'none');
            checkWidthTD = true;
        }

        let checkWidthBorder = false;
        if (isNaN(+$('#widthOfBorder').val()) || !$('#widthOfBorder').val()) { //check if value widthOfBorder
            $('#widthOfBorder').css('box-shadow', ' 0px 0px 0px 2px rgba(255,17,17,0.4)')
        } else {
            $('#widthOfBorder').css('box-shadow', 'none');
            checkWidthBorder = true;
        }

        let countTD = false;
        if (isNaN(+$('#countTD').val()) || !$('#countTD').val()) {//check if value countTD
            $('#countTD').css('box-shadow', ' 0px 0px 0px 2px rgba(255,17,17,0.4)')
        } else {
            $('#countTD').css('box-shadow', 'none');
            countTD = true;
        }

        let checkHeigthTD = false;
        if (isNaN(+$('#heigthTD').val()) || !$('#heigthTD').val()) {//check if value heigthTD
            $('#heigthTD').css('box-shadow', ' 0px 0px 0px 2px rgba(255,17,17,0.4)')
        } else {
            $('#heigthTD').css('box-shadow', 'none');
            checkHeigthTD = true;
        }

        let chekerStyleBorder = false;
        for (let i = 0; i < $('#styleBorder>option').length; i++) { //calck selected border style
            if ($('#styleBorder')[0].children[i].selected && $('#styleBorder')[0].children[i].value == 'choose style') {
                // $('#styleBorder')[0].css('box-shadow', ' 0px 0px 0px 2px rgba(255,17,17,0.4)'); чому не працює?
                $('#styleBorder')[0].style.boxShadow = '0px 0px 0px 2px rgba(255,17,17,0.4)';
                break;
            } else {
                $('#styleBorder')[0].style.boxShadow = 'none';
                chekerStyleBorder = true;
            }
        }

        let chekerColorBorder = false;
        for (let i = 0; i < $('#colorBorder>option').length; i++) { //calck selected border color
            if ($('#colorBorder')[0].children[i].selected && $('#colorBorder')[0].children[i].value == 'choose color') {
                $('#colorBorder')[0].style.boxShadow = '0px 0px 0px 2px rgba(255,17,17,0.4)';
                break;
            } else {
                $('#colorBorder')[0].style.boxShadow = 'none';
                chekerColorBorder = true;
            }
        }
        // --------------------------------------------/check if some value is wrong

        //if all value is true
        if (checkCountTR && checkWidthTD && checkWidthBorder && countTD && checkHeigthTD && chekerStyleBorder && chekerColorBorder) {
            $('.invalid').hide();

            let table = document.createElement('table');
            $('#bufer').append(table);
            for (let i = 0; i < +$('#countTR').val(); i++) { //calck TR
                let tr = document.createElement('tr');
                $('#bufer>table').append(tr);
            }
            for (let i = 0; i < +$('#countTD').val(); i++) { //calck TD
                let td = document.createElement('td');
                $('#bufer>table>tr').append(td);
            }
            let borderStyle;
            let colorBorder;
            for (let i = 0; i < $('#styleBorder>option').length; i++) { //border style
                if ($('#styleBorder')[0].children[i].selected) {
                    borderStyle = $('#styleBorder')[0].children[i].value
                }
            }

            for (let i = 0; i < $('#colorBorder>option').length; i++) { //border color
                if ($('#colorBorder')[0].children[i].selected) {
                    colorBorder = $('#colorBorder')[0].children[i].value;
                }
            }

            $('#bufer td').text('TD') //style TD
            $('#bufer>table>tr>td').css({
                'width': $('#widthOfTD').val() + 'px',
                'height': $('#heigthTD').val() + 'px',
                'border': $('#widthOfBorder').val() + 'px' + ' ' + colorBorder + ' ' + borderStyle,
            })

            $('#textarea').val($('#textarea').val() + $('#bufer').html()) //push all html to value
            $('#bufer').html('') //clear bufer
        } else {
            $('.invalid').show()
            checkCountTR = checkWidthTD = checkWidthBorder = countTD = checkHeigthTD = chekerStyleBorder = chekerColorBorder = false;
        }

    })
    // --------------------------BUTTON "RESET" (TABLE)------------------
    $('#resetTB').click(() => {
        $('#countTR').val('');
        $('#widthOfTD').val('');
        $('#widthOfBorder').val('');
        $('#countTD').val('');
        $('#heigthTD').val('');
        $('#styleBorder')[0].children[0].selected = true;
        $('#colorBorder')[0].children[0].selected = true;
        $('#countTR').css('box-shadow', 'none');
        $('#widthOfTD').css('box-shadow', 'none');
        $('#widthOfBorder').css('box-shadow', 'none');
        $('#countTD').css('box-shadow', 'none');
        $('#heigthTD').css('box-shadow', 'none');
        $('#styleBorder')[0].style.boxShadow = 'none';
        $('#colorBorder')[0].style.boxShadow = 'none';
        $('.invalid').hide();
        checkCountTR = checkWidthTD = checkWidthBorder = countTD = checkHeigthTD = chekerStyleBorder = chekerColorBorder = false;
    })
    // --------------------------BUTTON "OL"-----------

    $('.olBtn').click(() => { // show containet ol
        $('#modalTableWindow').css('display', 'block')
        $('.olwrapp').css('display', 'block')
        $('#olMark')[0].children[0].selected = true;
        $('#countLiOl').val('');
        $('.invalid').css('display', 'none');
        $('#olMark')[0].style.boxShadow = 'none';
        $('#countLiOl').css('box-shadow', 'none');
    })

    $('#createOl').click(() => {
        let checkOlCount = false;
        if (isNaN(+$('#countLiOl').val()) || !$('#countLiOl').val()) { //if not corect value input text mark
            $('#countLiOl').css('box-shadow', ' 0px 0px 0px 2px rgba(255,17,17,0.4)')
            $('.invalid').css('display', 'block');
        } else {
            $('.invalid').css('display', 'none');
            $('#countLiOl').css('box-shadow', 'none');
            checkOlCount = true;
        }

        let chekerOlMark = false;
        for (let i = 0; i < $('#olMark>option').length; i++) { //if not corect value select mark
            if ($('#olMark')[0].children[0].selected === true) {
                $('#olMark')[0].style.boxShadow = '0px 0px 0px 2px rgba(255,17,17,0.4)';
                $('.invalid').css('display', 'block');
                break;
            } else {
                $('.invalid').css('display', 'none');
                $('#olMark')[0].style.boxShadow = 'none';
                chekerOlMark = true;
            }
        }

        if (chekerOlMark && checkOlCount) {
            let ol = document.createElement('ol')
            $('#bufer').append(ol);

            for (let i = 0; i < +$('#countLiOl').val(); i++) { //calc of li
                let li = document.createElement('li');
                $('#bufer>ol').append(li);
                $('#bufer li').text('item');
            }

            for (let i = 0; i < $('#olMark>option').length; i++) { //mark style ol
                if ($('#olMark')[0].children[i].selected) {
                    $('ol').css({
                        'list-style-type': $('#olMark')[0].children[i].value,
                    })
                }
            }
            chekerOlMark = checkOlCount = false;
        }
        $('#textarea').val($('#textarea').val() + $('#bufer').html()) //push all html to value
        $('#bufer').html('') //clear bufer   


    })
    $('#resetOl').click(() => { //-----------reset button ol
        $('#olMark')[0].children[0].selected = true;
        $('#countLiOl').val('');
        $('.invalid').css('display', 'none');
        $('#olMark')[0].style.boxShadow = 'none';
        $('#countLiOl').css('box-shadow', 'none');
    })

    // --------------------------BUTTON "UL"-----------------
    $('.ulBtn').click(() => { // show container ul
        $('.ulwrapp').css('display', 'block');
        $('#modalTableWindow').css('display', 'block');
        $('#ulMark')[0].children[0].selected = true;
        $('#countUl').val('');
        $('.invalid').css('display', 'none');
        $('#ulMark')[0].style.boxShadow = 'none';
        $('#countLiUl').css('box-shadow', 'none');
    })


    $('#creUl').click(() => { //create ul list
        let checkUlCount = false;
        if (isNaN(+$('#countUl').val()) || !$('#countUl').val()) { //if not corect value input text mark
            $('#countUl').css('box-shadow', ' 0px 0px 0px 2px rgba(255,17,17,0.4)')
            $('.invalid').css('display', 'block');
        } else { //if corect value
            $('.invalid').css('display', 'none');
            $('#countUl').css('box-shadow', 'none');
            checkUlCount = true;
        }

        let chekerUlMark = false;
        for (let i = 0; i < $('#ulMark>option').length; i++) { //if not corect value select mark
            if ($('#ulMark')[0].children[0].selected === true) {
                $('#ulMark')[0].style.boxShadow = '0px 0px 0px 2px rgba(255,17,17,0.4)';
                $('.invalid').css('display', 'block');
                break;
            } else {
                $('.invalid').css('display', 'none');
                $('#ulMark')[0].style.boxShadow = 'none';
                chekerUlMark = true;
            }
        }

        if (chekerUlMark && checkUlCount) {
            let ul = document.createElement('ul')
            $('#bufer').append(ul);

            for (let i = 0; i < +$('#countUl').val(); i++) { //calc of li
                let li = document.createElement('li');
                $('#bufer>ul').append(li);
                $('#bufer li').text('item');
            }

            for (let i = 0; i < $('#ulMark>option').length; i++) { // style ul
                if ($('#ulMark')[0].children[i].selected) {
                    $('ul').css({
                        'list-style-type': $('#ulMark')[0].children[i].value,
                    })
                }
            }
            chekerUlMark = checkUlCount = false;
        }
        $('#textarea').val($('#textarea').val() + $('#bufer').html()) //push all html to value
        $('#bufer').html('') //clear bufer   
    })
    $('#resUl').click(() => { //-----------reset button ul
        $('#ulMark')[0].children[0].selected = true;
        $('#countUl').val('');
        $('.invalid').css('display', 'none');
        $('#ulMark')[0].style.boxShadow = 'none';
        $('#countLiUl').css('box-shadow', 'none');
    })
})