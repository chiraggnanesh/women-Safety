class Form{
    constructor(){

    }

    display(){
        var div = document.createElement('div');
        div.id = "div1";
        div.innerHTML = "helpline numbers";
        document.body.appendChild(div);

        var divTwo = document.createElement('div');
        divTwo.id = "div2";
        divTwo.innerHTML = "self defense";
        document.body.appendChild(divTwo);

        var divThree = document.createElement('div');
        divThree.id = "div3";
        divThree.innerHTML = "play a game";
        document.body.appendChild(divThree);

        var divFour = document.createElement('div');
        divFour.id = "div4";
        divFour.innerHTML = 'Hello';
        document.body.appendChild(divFour);
    }
}