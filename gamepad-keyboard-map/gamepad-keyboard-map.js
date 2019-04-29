//This code maps gamepad inputs with the keyboard keys. This way when you press a gamepad button a keyboard click event triggers.

(function () {
    //Gamepad input keyCodes can vary, this is a X-Box compliant input map with up, down, left, right and two common action buttons
    var pressedKeys = {},
        keyMap = {      // change these to the keys you want to implement. This is key map of form { keyboard : gamepadKey }
            65 : 14,
            68 : 15,
            32 : 1,
            83 : 13,
            16 : 0
        };

    var step = function () {
        var gamepadButtons = navigator.getGamepads()[0].buttons,
            keyName;

        for (var keyName in keyMap) {
            console.log(!pressedKeys[keyName] && gamepadButtons[keyMap[keyName]].pressed, pressedKeys[keyName], gamepadButtons[keyMap[keyName]].pressed);
            if (pressedKeys[keyName]) {
                if (!gamepadButtons[keyMap[keyName]].pressed) {
                    //console.log(keyName);
                    //keyup(Number(keyName));     //Add your keyup trigger events here. ForEx. $('#gameArea').keyUp({ keyCode : keyName });
                    delete pressedKeys[keyName];
                }
            } else {
                if (gamepadButtons[keyMap[keyName]].pressed) {
                    console.log(keyName);
                    //keydown(Number(keyName)); //Add your keydown trigger events here. ForEx. $('#gameArea').keyDown({ keyCode : keyName });
                    pressedKeys[keyName] = true;
                }
            }
        }
        requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
})()