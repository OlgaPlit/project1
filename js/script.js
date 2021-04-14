(function () {"use strict";}());

function learnJs(lang, callback)
{
    console.log(`я учу ${lang}`);
    callback();
}

learnJs('Javascript', function()
{
    console.log('я всё');
});

