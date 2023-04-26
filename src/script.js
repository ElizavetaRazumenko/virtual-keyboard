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

const KEYBOARD_CODE = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8,
                    9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 13,
                    20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 220,
                    16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16,
                    17, 91, 18, 32, 18, 37, 40, 39, 17];



const BUTTON_RUS = {Backquote: 'ё', Digit1: '1', Digit2: '2', Digit3: '3', Digit4: '4', Digit5: '5', Digit6: '6', Digit7: '7', Digit8: '8',
Digit9: '9', Digit0: '0', Minus: '-', Equal: '=', Backspace: 'Backspace', Tab: 'Tab', KeyQ: 'й', KeyW: 'ц', KeyE: 'у', KeyR: 'к', KeyT: 'е', 
KeyY: 'н', KeyU: 'г', KeyI: 'ш', KeyO: 'щ', KeyP: 'з', BracketLeft: 'х', BracketRight: 'ъ', Enter: 'Enter', CapsLock: 'CapsLock', KeyA: 'ф', 
KeyS: 'ы', KeyD: 'в', KeyF: 'а', KeyG: 'п', KeyH: 'р', KeyJ: 'о', KeyK: 'л', KeyL: 'д', Semicolon: 'ж', Quote: 'э', Backslash: '\\', 
ShiftLeft: 'Shift', KeyZ: 'я', KeyX: 'ч', KeyC: 'с', KeyV: 'м', KeyB: 'и', KeyN: 'т', KeyM: 'ь', Comma: 'б', Period: 'ю', Slash: '.', ArrowUp: '↑', ShiftRight: 'Shift',
ControlLeft: 'Ctrl', MetaLeft: 'Win', AltLeft: 'Alt', Space: ' ', AltRight: 'Alt', ArrowLeft: '←', ArrowDown: '↓', ArrowRight: '→', ControlRight: 'Control'}


const BUTTON_EN = {Backquote: '`', Digit1: '1', Digit2: '2', Digit3: '3', Digit4: '4', Digit5: '5', Digit6: '6', Digit7: '7', Digit8: '8',
Digit9: '9', Digit0: '0', Minus: '-', Equal: '=', Backspace: 'Backspace', Tab: 'Tab', KeyQ: 'q', KeyW: 'w', KeyE: 'e', KeyR: 'r', KeyT: 't', 
KeyY: 'y', KeyU: 'u', KeyI: 'i', KeyO: 'o', KeyP: 'p', BracketLeft: '[', BracketRight: ']', Enter: 'Enter', CapsLock: 'CapsLock', KeyA: 'a', 
KeyS: 's', KeyD: 'd', KeyF: 'f', KeyG: 'g', KeyH: 'h', KeyJ: 'j', KeyK: 'k', KeyL: 'l', Semicolon: ';', Quote: "'", Backslash: '\\', 
ShiftLeft: 'Shift', KeyZ: 'z', KeyX: 'x', KeyC: 'c', KeyV: 'v', KeyB: 'b', KeyN: 'n', KeyM: 'm', Comma: ',', Period: '.', Slash: '/', ArrowUp: '↑', ShiftRight: 'Shift',
ControlLeft: 'Ctrl', MetaLeft: 'Win', AltLeft: 'Alt', Space: ' ', AltRight: 'Alt', ArrowLeft: '←', ArrowDown: '↓', ArrowRight: '→', ControlRight: 'Control'}

function initEn() {
    let out = "";
    for (let key of Object.values(BUTTON_EN)) {
        out += "<div class='body__key'>" + key + "</div>"
    }

    KEYBOARD.innerHTML = out;
}

initEn();


