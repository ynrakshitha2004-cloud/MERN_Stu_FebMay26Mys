const inspectBtn = document.getElementById("inspectBtn");
const sampleText = document.getElementById("sampleText");
const out = document.getElementById("out");

inspectBtn.addEventListener("click", 
    function () {
        const info = {
            htmlLang : document.documentElement.lang,
            charset : document.characterSet,//browser's primary prefer language
            browserLangauge : navigator.language,//Array of all broswer language
            browserLangauges : navigator.languages,
            sampleText : document.getElementById("sampleTest").textContent
        };
        console.log(info);
        out.textContent = JSON.stringify(info,null,2);
    }
);

    
    