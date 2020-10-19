function edu(selectedElements) {

    const elements = document.querySelectorAll(selectedElements);

    function tchauEdu(){
        elements.forEach((element) => {
            element.style.display = 'none';
        });

        return edu(selectedElements);
    }


    function oiEdu(){
        elements.forEach((element) => {
            element.style.display = 'initial';
        });

        return edu(selectedElements);
    }

    return{
        elements,
        tchauEdu,
        oiEdu
    }
}

const btns = edu('button');

console.log(btns.oiEdu());