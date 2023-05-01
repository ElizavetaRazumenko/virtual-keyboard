const BODY_WRAPPER = document.createElement("div");
BODY_WRAPPER.className = "body-wrapper";
BODY_WRAPPER.innerHTML = "Virtual keyboard";
document.body.append(BODY_WRAPPER);

const TEXT_AREA = document.createElement("textarea");
TEXT_AREA.className = "body__textarea";
BODY_WRAPPER.append(TEXT_AREA);

const KEYBOARD = document.createElement("div");
KEYBOARD.className = "body__keyboard";
BODY_WRAPPER.append(KEYBOARD);

const DESCRIPTION = document.createElement("p");
DESCRIPTION.className = "body__p";
DESCRIPTION.textContent = "The keyboard was created in the Windows operating system. Press the keys Ctrl + Alt to switch the language.";
BODY_WRAPPER.append(DESCRIPTION);



const BUTTON_RUS = {Backquote: 'ё', Digit1: '1', Digit2: '2', Digit3: '3', Digit4: '4', Digit5: '5', Digit6: '6', Digit7: '7', Digit8: '8',
Digit9: '9', Digit0: '0', Minus: '-', Equal: '=', Backspace: 'Backspace', Tab: 'Tab', KeyQ: 'й', KeyW: 'ц', KeyE: 'у', KeyR: 'к', KeyT: 'е', 
KeyY: 'н', KeyU: 'г', KeyI: 'ш', KeyO: 'щ', KeyP: 'з', BracketLeft: 'х', BracketRight: 'ъ',  Backslash: '\\', Delete: 'Del', CapsLock: 'CapsLock', KeyA: 'ф', 
KeyS: 'ы', KeyD: 'в', KeyF: 'а', KeyG: 'п', KeyH: 'р', KeyJ: 'о', KeyK: 'л', KeyL: 'д', Semicolon: 'ж', Quote: 'э', Enter: 'Enter',  
ShiftLeft: 'Shift', KeyZ: 'я', KeyX: 'ч', KeyC: 'с', KeyV: 'м', KeyB: 'и', KeyN: 'т', KeyM: 'ь', Comma: 'б', Period: 'ю', Slash: '.', ArrowUp: '↑', ShiftRight: 'Shift',
ControlLeft: 'Ctrl', MetaLeft: 'Win', AltLeft: 'Alt', Space: ' ', AltRight: 'Alt', ArrowLeft: '←', ArrowDown: '↓', ArrowRight: '→', ControlRight: 'Ctrl'}


const BUTTON_EN = {Backquote: '`', Digit1: '1', Digit2: '2', Digit3: '3', Digit4: '4', Digit5: '5', Digit6: '6', Digit7: '7', Digit8: '8',
Digit9: '9', Digit0: '0', Minus: '-', Equal: '=', Backspace: 'Backspace', Tab: 'Tab', KeyQ: 'q', KeyW: 'w', KeyE: 'e', KeyR: 'r', KeyT: 't', 
KeyY: 'y', KeyU: 'u', KeyI: 'i', KeyO: 'o', KeyP: 'p', BracketLeft: '[', BracketRight: ']', Backslash: '\\', Delete: 'Del', CapsLock: 'CapsLock', KeyA: 'a', 
KeyS: 's', KeyD: 'd', KeyF: 'f', KeyG: 'g', KeyH: 'h', KeyJ: 'j', KeyK: 'k', KeyL: 'l', Semicolon: ';', Quote: "'", Enter: 'Enter', 
ShiftLeft: 'Shift', KeyZ: 'z', KeyX: 'x', KeyC: 'c', KeyV: 'v', KeyB: 'b', KeyN: 'n', KeyM: 'm', Comma: ',', Period: '.', Slash: '/', ArrowUp: '↑', ShiftRight: 'Shift',
ControlLeft: 'Ctrl', MetaLeft: 'Win', AltLeft: 'Alt', Space: ' ', AltRight: 'Alt', ArrowLeft: '←', ArrowDown: '↓', ArrowRight: '→', ControlRight: 'Ctrl'}

const SHIFT_ELEM = {Backquote: '~', Digit1: '!', Digit2: '@', Digit3: '#', Digit4: '$', Digit5: '%', Digit6: '^', Digit7: '&', Digit8: '*',
Digit9: '(', Digit0: ')', Minus: '_', Equal: '+', BracketLeft: '{', BracketRight: '}', Backslash: '|', Semicolon: ':', Quote: '"', Comma: '<', Period: '>', Slash: '?'}

let arrayOfSystemBtn = ['Backspace', 'Tab', 'Del',  'CapsLock', 'Shift', 'Enter', 'Ctrl', 'Win', 'Alt', '←', '↓', '→', '↑']; 

function initEn() {
    let out = "";
    for (let key of Object.keys(BUTTON_EN)) {
        if (key === 'Enter') {
            out += "<div class='body__key body__key_enter' data='" + key + "'>" + BUTTON_EN[key] + "</div>";
        } else if (key === 'ShiftLeft' || key === 'ShiftRight') {
            out += "<div class='body__key body__key_shift' data='" + key + "'>" + BUTTON_EN[key] + "</div>";
        } else if (key === 'Space') {
            out += "<div class='body__key body__key_space' data='" + key + "'>" + BUTTON_EN[key] + "</div>";
        } else {
            out += "<div class='body__key' data='" + key + "'>" + BUTTON_EN[key] + "</div>";
        }
    }

    KEYBOARD.innerHTML = out;
}



function initRu() {
    let out = "";
    for (let key of Object.keys(BUTTON_RUS)) {
        if (key === 'Enter') {
            out += "<div class='body__key body__key_enter' data='" + key + "'>" + BUTTON_RUS[key] + "</div>";
        } else if (key === 'ShiftLeft' || key === 'ShiftRight') {
            out += "<div class='body__key body__key_shift' data='" + key + "'>" + BUTTON_RUS[key] + "</div>";
        } else if (key === 'Space') {
            out += "<div class='body__key body__key_space' data='" + key + "'>" + BUTTON_RUS[key] + "</div>";
        } else {
            out += "<div class='body__key' data='" + key + "'>" + BUTTON_RUS[key] + "</div>";
        }
    }

    KEYBOARD.innerHTML = out;
}




let counter = 0;

document.body.onload = () => {
        let counterSaver = JSON.parse(localStorage.getItem("counter") || "");
        if (!counterSaver || counterSaver % 2 === 0) {
            initEn();
        } else {
            initRu(); 
        }

        TEXT_AREA.value = JSON.parse(localStorage.getItem("textarea") || "");
};


document.addEventListener('keydown', function(event) {
    if (event.shiftKey && event.altKey ) {
        counter++;
        if (counter % 2 !== 0) {
            initRu(); 
        } else {
            initEn();
        }

        localStorage.setItem("counter", JSON.stringify(counter));
    }
           

    document.querySelector('.body__key[data="'+ event.code + '"]')?.classList.add('active');


  });

  
  document.addEventListener('keyup', function() {
    document.querySelectorAll('.body__key').forEach(function(element) {
        element.classList.remove('active');
}); 
  })


  

  KEYBOARD.addEventListener('click', (event) => {
    if (event.target instanceof HTMLElement) {
        let elem = event.target.closest('.body__key');
        if (!elem) return;
        
        
        
        if (elem.textContent === 'Backspace') {

            if (TEXT_AREA.value.length >= 1) {
                TEXT_AREA.value = TEXT_AREA.value.slice(0, TEXT_AREA.selectionStart - 1) + TEXT_AREA.value.slice(TEXT_AREA.selectionStart);
            } 

        }
         else if (elem.textContent === 'Tab') {
               TEXT_AREA.value = TEXT_AREA.value.slice(0, TEXT_AREA.selectionStart) + '    ' + TEXT_AREA.value.slice(TEXT_AREA.selectionStart);
        } 
        else if (elem.textContent === 'Del') {

            let cursor = TEXT_AREA.selectionStart;

           if (TEXT_AREA.selectionStart < TEXT_AREA.value.length) {
            TEXT_AREA.value = TEXT_AREA.value.slice(0, TEXT_AREA.selectionStart) + TEXT_AREA.value.slice(TEXT_AREA.selectionStart + 1);
            TEXT_AREA.selectionStart = cursor;
           }

        } 
         else if (elem.textContent === 'Enter') {
            TEXT_AREA.value = TEXT_AREA.value.slice(0, TEXT_AREA.selectionStart) + `\n` + TEXT_AREA.value.slice(TEXT_AREA.selectionStart); 
        }
         else if (elem.textContent === 'CapsLock') {

            
            
            document.querySelectorAll('.body__key').forEach((elem) => {
                if (elem.textContent) {
                    if (elem.textContent?.toLowerCase() === elem.textContent && !arrayOfSystemBtn.includes(elem.textContent)) {
                        elem.textContent = elem.textContent.toUpperCase();
                    } else {

                        if (!arrayOfSystemBtn.includes(elem.textContent)) {
                            elem.textContent = elem.textContent.toLowerCase();
                        }
                    }
                }
                
            })
            
            
        } else if (elem.textContent === 'Shift' || elem.textContent === 'Ctrl' || elem.textContent === 'Win' || elem.textContent === 'Alt') {
            TEXT_AREA.value = TEXT_AREA.value;
        } 
          else {
            TEXT_AREA.value +=  elem.textContent;
        }
        
    }

    localStorage.setItem("textarea", JSON.stringify(TEXT_AREA.value));
  });



  KEYBOARD.addEventListener('mousedown', (event) => {
    if (event.target instanceof HTMLElement) {
        let elem = event.target.closest('.body__key');
        if (!elem) return;
        
        elem.classList.add('active');

        if (elem.textContent === 'Shift') {
            document.querySelectorAll('.body__key').forEach((elem) => {
                if (elem.textContent) {
                    if (!arrayOfSystemBtn.includes(elem.textContent)) {
                        let atrubut = elem.getAttribute('data') || '';
                        if (SHIFT_ELEM[atrubut]) {
                            elem.textContent = SHIFT_ELEM[atrubut];
                        }
                        

                        elem.textContent = elem.textContent.toUpperCase();
                    }
                }
                
            })

        }

    }})

    KEYBOARD.addEventListener('mouseup', (event) => {
        if (event.target instanceof HTMLElement) {
            let elem = event.target.closest('.body__key');
            if (!elem) return;
            
            document.querySelectorAll('.body__key').forEach(function(element) {
                element.classList.remove('active');
            }); 


            if (elem.textContent === 'Shift') {
                document.querySelectorAll('.body__key').forEach((elem) => {
                    if (elem.textContent) {
                       
                            if (!arrayOfSystemBtn.includes(elem.textContent)) {
                                elem.textContent = elem.textContent.toLowerCase();
                            }

                            let atrubut = elem.getAttribute('data') || '';
                        if (SHIFT_ELEM[atrubut]) {
                            elem.textContent = BUTTON_EN[atrubut];
                        }
                        
                        
                    }
                    
                })
    
            }
        
    
        }})


   

  

    