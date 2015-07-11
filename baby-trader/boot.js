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
    var Boot = (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            _super.call(this);
        }
        Boot.prototype.preload = function () {
            this.game.load.image('preloadIcon', 'assets/graphics/preloader.gif');
        };
        Boot.prototype.create = function () {
            this.game.state.start("preload");
        };
        Boot.prototype.update = function () {
        };
        return Boot;
    })(Phaser.State);
    BabyTrader.Boot = Boot;
})(BabyTrader || (BabyTrader = {}));
//# sourceMappingURL=boot.js.map