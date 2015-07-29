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

        key_skip = null;
        prologueSprites = null;
        spriteIndex = 0;
        sprite = null;
        dialogLocation = null;

        preload() {
            // setup sprites
            this.prologueSprites = [
                'sprite_prologue_01',
                'sprite_prologue_02'
            ];
        }

        create() {
            // skip key setup
            setupKeyboardHotkeys(this.game, this.key_skip, Phaser.Keyboard.ESC, this.skipToPlay, this);

            // skip instruction
            this.game.add.bitmapText(20, 20, 'carrier_command', 'Press ESC to skip', 14);

            // set the bg color
            this.game.stage.backgroundColor = Const.PROLOGUE_BACKGROUND;

            // update event
            this.game.time.events.repeat(Phaser.Timer.SECOND * 8, this.prologueSprites.length + 1, this.nextMove, this);

            // text printing start
            //this.dialogLocation = this.game.add.text(this.game.world.centerX, 500, '', { font: "35px Arial", fill: "#ffffff", align: "center" });
            this.dialogLocation = this.game.add.bitmapText(this.game.world.centerX, 500, 'carrier_command', '', 18);

            this.dialogLocation.anchor.setTo(.5);
            Dialog.startDialog(this.game, this.dialogLocation, Dialog.prologue);
        }

        update() {
        }

        skipToPlay() {
            this.game.state.start("play");
        }

        nextMove() {
            if (this.spriteIndex >= this.prologueSprites.length) {
                this.skipToPlay();
            } else {
                this.switchSprite();
            }
        }

        switchSprite() {
            if (this.spriteIndex > 0) {
                this.game.add.tween(this.sprite).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            }
            
            this.sprite = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY - 100, this.prologueSprites[this.spriteIndex++]);
            this.sprite.anchor.setTo(.5);

            // set initial transparency to zero
            this.sprite.alpha = 0;

            this.game.add.tween(this.sprite).to({ alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
        }
    }
} 