﻿/****************************************************************************************
Copyright (C) 2015 Jong Seong Lee
jsl@pdx.edu
Portland State University

This program is licensed under the MIT License.
Please see the file COPYING in the source distribution of this software for license terms.
****************************************************************************************/

module BabyTrader {
    export class Prologue extends Phaser.State {
        constructor() {
            super();
        }

        private key_skip = null;
        private prologueSprite = null;
        private dialogLocation = null;

        preload() {
        }

        create() {
            // setup bgm
            playBackgroundSound(this.game, 'bgm_prologue');

            // skip key setup
            setupKeyboardHotkeys(this.game, this.key_skip, Phaser.Keyboard.ESC, function () { this.game.state.start("play"); }, this);

            // set the bg color
            this.game.stage.backgroundColor = Const.PROLOGUE_BACKGROUND_STRING;

            // text printing start
            this.dialogLocation = displayTextOnScreen(this.game, this.dialogLocation, '', { font: "900 18px Work Sans", fill: BabyTrader.Const.TEXTWHITEGRAYCOLOR_STRING, align: "center" }, this.game.world.centerX, 500);

            // start prologue
            this.game.time.events.add(Phaser.Timer.SECOND * 1, this.startPrologue, this);

            if (!this.game.time.events.running) {
                this.game.time.events.start();
            }

            // when the prologue texts are all printed, go to the next state
            this.game.time.events.onComplete.add(this.endPrologue, this);
        }

        update() {
        }

        startPrologue() {
            var skipFunction = function (currentObject) {
                currentObject.game.state.start("play");
            }

            // skip instruction
            var skipText = displayTextButtonOnScreen(this, skipText, 'Please click here or press ESC button to skip...'.toUpperCase(), { font: "900 12px Work Sans", fill: BabyTrader.Const.TEXTWHITEGRAYCOLOR_STRING, align: "left" }, skipFunction, 20, 20, 0, 0);
            
            // display illustration sprite and add tweens
            this.prologueSprite = displaySpriteOnScreen(this.game, this.prologueSprite, 'prologue_babyTrader', this.game.world.centerX, 265);
            addFadeTweenToSprite(this.game, this.prologueSprite, 0, 1, 1000);

            Dialog.startDialog(this.game, this.dialogLocation, Dialog.prologue);
        }

        endPrologue() {
            addFadeTweenToSprite(this.game, this.prologueSprite, 1, 0, 1000);
            this.dialogLocation.destroy();

            var nextStateFunction = function () {
                this.game.state.start("play");
            };
            
            this.game.time.events.add(Phaser.Timer.SECOND * 2, nextStateFunction, this);
        }
    }
} 