//  JAVA SCRIPT

let screen= document.getElementById('screen');
buttons = document.querySelectorAll('button');

let screenValue = '';

for(item of buttons)
{
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        console.log("Button Text Is : " , buttonText);

        if(buttonText=='x')
        {
            buttonText = '*' ;
            screenValue += buttonText ;
            screen.value = screenValue ;
        }

        else if (buttonText == 'RESET')
        {
            screenValue = "" ;
            screen.value = screenValue ;
        }

        else if (buttonText == 'DEL')
        {
            if (!screenValue == '')
            {
            screen.value = screen.value.slice(0 , -1) ;
            screenValue = screenValue.slice(0,-1);
            }
        }

        else if (buttonText == '=')
        {
            if (!screenValue == '')
            {
                screen.value = eval(screenValue);
            }
        }

        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}



//  toggle theme js

const checkbox = 
document.getElementById('checkbox');

checkbox.addEventListener('change' , () => {
    // change the theme of the website
    document.body.classList.toggle('light');
});


