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