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


document.body.onload = () => initEn();

let counter = 0;
//console.log(navigator.language || navigator.userLanguage);

document.addEventListener('keydown', function(event) {
    if (event.shiftKey && event.altKey ) {
        counter++;
        if (counter % 2 !== 0) {
            initRu(); 
        } else {
            initEn();
        }
    }
    document.querySelectorAll('.body__key').forEach(function(element) {
        element.classList.remove('active');
    }); 
    console.log(event.code)
    document.querySelector('.body__key[data="'+ event.code + '"]')?.classList.add('active');
  });


  KEYBOARD.addEventListener('click', (event) => {
    if (event.target instanceof HTMLElement) {
        let elem = event.target.closest('.body__key');
        if (!elem) return;
        document.querySelectorAll('.body__key').forEach(function(element) {
            element.classList.remove('active');
        }); 
        
        elem.classList.add('active');
    }
  })



