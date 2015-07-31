﻿/****************************************************************************************
Copyright (C) 2015 Jong Seong Lee
jsl@pdx.edu
Portland State University

This program is licensed under the MIT License.
Please see the file COPYING in the source distribution of this software for license terms.
****************************************************************************************/

var globalBgm = null;

function playBackgroundSound(game, music: string) {
    if (globalBgm != null) {
        stopBackgroundSound();
    }

    globalBgm = game.add.audio(music);
    globalBgm.loop = true;
    globalBgm.play();
}

function stopBackgroundSound() {
    globalBgm.stop();
    globalBgm = null;
}

function setupKeyboardHotkeys(gameVariable, keyVariable, keyboardKey, keyMethod, keyThis) {
    keyVariable = gameVariable.input.keyboard.addKey(keyboardKey);
    keyVariable.onDown.add(keyMethod, keyThis);
    gameVariable.input.keyboard.removeKeyCapture(keyboardKey);
}

function displayBitmapTextOnScreen(game, textObject, text: string, bitMapFont: string, fontSize: number, x: number, y: number, anchorX: number = .5, anchorY: number = .5) {
    textObject = game.add.bitmapText(x, y, bitMapFont, text, fontSize);
    textObject.anchor.setTo(anchorX, anchorY);
    return textObject;
}

function displayTextOnScreen(game, textObject, text: string, fontStyle, x: number, y: number, anchorX: number = .5, anchorY: number = .5) {
    textObject = game.add.text(x, y, text, fontStyle);
    textObject.anchor.setTo(anchorX, anchorY);
    return textObject;
}

function displayTextButtonOnScreen(currentObject, textObject, text: string, fontStyle, upMethod, x: number, y: number, anchorX?: number, anchorY?: number) {
    textObject = displayTextOnScreen(currentObject.game, textObject, text, fontStyle, x, y, anchorX, anchorY);
    textObject.inputEnabled = true;
    textObject.input.useHandCursor = true;
    if (upMethod) {
        textObject.events.onInputUp.add(function () {
            upMethod(currentObject);
        });
    }
    return textObject;
}

function displaySpriteOnScreen(game, spriteObject, spriteName: string, x: number, y: number, anchorX: number = .5, anchorY: number = .5) {
    spriteObject = game.add.sprite(x, y, spriteName);
    spriteObject.anchor.setTo(anchorX, anchorY);
    return spriteObject;
}

function displaySpriteButtonOnScreen(currentObject, spriteObject, spriteName: string, spriteInvName: string, upMethod, x: number, y: number, anchorX?: number, anchorY?: number) {
    spriteObject = displaySpriteOnScreen(currentObject.game, spriteObject, spriteName, x, y, anchorX, anchorY);
    spriteObject.inputEnabled = true;
    spriteObject.input.useHandCursor = true;
    spriteObject.events.onInputDown.add(function () {
        spriteObject.loadTexture(spriteInvName);
    });
    spriteObject.events.onInputUp.add(function () {
        spriteObject.loadTexture(spriteName);
        if (upMethod) {
            upMethod(currentObject);
        }
    });
    return spriteObject;
}

function addTweenToGame(game, sprite, opacity: number, time: number) {
    game.add.tween(sprite).to({ alpha: opacity }, time, Phaser.Easing.Linear.None, true);
}

function addFadeTweenToSprite(game, sprite, startOpacity: number, endOpacity: number, time: number) {
    sprite.alpha = startOpacity;
    addTweenToGame(game, sprite, endOpacity, time);
}

function displaySolidBackground(game, graphicObject, color, opacity: number) {
    graphicObject = game.add.graphics(0, 0);
    graphicObject.beginFill(color, opacity);
    graphicObject.drawRect(0, 0, BabyTrader.Const.GAMESCREEN_WIDTH, BabyTrader.Const.GAMESCREEN_HEIGHT);
    graphicObject.endFill();
    graphicObject.inputEnabled = true;
    return graphicObject;
}