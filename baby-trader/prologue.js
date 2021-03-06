/****************************************************************************************
Copyright (C) 2015 Jong Seong Lee
jsl@pdx.edu
Portland State University

This program is licensed under the MIT License.
Please see the file COPYING in the source distribution of this software for license terms.
****************************************************************************************/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BabyTrader;
(function (BabyTrader) {
    var Prologue = (function (_super) {
        __extends(Prologue, _super);
        function Prologue() {
            _super.call(this);
            this.key_skip = null;
            this.prologueSprite = null;
            this.dialogLocation = null;
        }
        Prologue.prototype.preload = function () {
        };
        Prologue.prototype.create = function () {
            // setup bgm
            playBackgroundSound(this.game, 'bgm_prologue');
            // skip key setup
            setupKeyboardHotkeys(this.game, this.key_skip, Phaser.Keyboard.ESC, function () { this.game.state.start("play"); }, this);
            // set the bg color
            this.game.stage.backgroundColor = BabyTrader.Const.PROLOGUE_BACKGROUND_STRING;
            // text printing start
            this.dialogLocation = displayTextOnScreen(this.game, this.dialogLocation, '', { font: "900 18px Work Sans", fill: BabyTrader.Const.TEXTWHITEGRAYCOLOR_STRING, align: "center" }, this.game.world.centerX, 500);
            // start prologue
            this.game.time.events.add(Phaser.Timer.SECOND * 1, this.startPrologue, this);
            if (!this.game.time.events.running) {
                this.game.time.events.start();
            }
            // when the prologue texts are all printed, go to the next state
            this.game.time.events.onComplete.add(this.endPrologue, this);
        };
        Prologue.prototype.update = function () {
        };
        Prologue.prototype.startPrologue = function () {
            var skipFunction = function (currentObject) {
                currentObject.game.state.start("play");
            };
            // skip instruction
            var skipText = displayTextButtonOnScreen(this, skipText, 'Please click here or press ESC button to skip...'.toUpperCase(), { font: "900 12px Work Sans", fill: BabyTrader.Const.TEXTWHITEGRAYCOLOR_STRING, align: "left" }, skipFunction, 20, 20, 0, 0);
            // display illustration sprite and add tweens
            this.prologueSprite = displaySpriteOnScreen(this.game, this.prologueSprite, 'prologue_babyTrader', this.game.world.centerX, 265);
            addFadeTweenToSprite(this.game, this.prologueSprite, 0, 1, 1000);
            BabyTrader.Dialog.startDialog(this.game, this.dialogLocation, BabyTrader.Dialog.prologue);
        };
        Prologue.prototype.endPrologue = function () {
            addFadeTweenToSprite(this.game, this.prologueSprite, 1, 0, 1000);
            this.dialogLocation.destroy();
            var nextStateFunction = function () {
                this.game.state.start("play");
            };
            this.game.time.events.add(Phaser.Timer.SECOND * 2, nextStateFunction, this);
        };
        return Prologue;
    })(Phaser.State);
    BabyTrader.Prologue = Prologue;
})(BabyTrader || (BabyTrader = {}));
//# sourceMappingURL=prologue.js.map