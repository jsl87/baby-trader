﻿/****************************************************************************************
Copyright (C) 2015 Jong Seong Lee
jsl@pdx.edu
Portland State University

This program is licensed under the MIT License.
Please see the file COPYING in the source distribution of this software for license terms.
****************************************************************************************/

module BabyTrader {
    export class Preload extends Phaser.State {

        constructor() {
            super();
        }

        private ready: boolean;
        private preloadIcon;

        preload() {
            this.preloadIcon = displaySpriteOnScreen(this.game, this.preloadIcon, 'preloadIcon', this.game.world.centerX, this.game.world.centerY);

            this.game.load.onLoadComplete.addOnce(this.onLoadComplete, this);
            this.game.load.setPreloadSprite(this.preloadIcon);

            // sound effects
            this.game.load.audio('se_buttonClick', 'assets/sounds/se_buttonClick.mp3');

            // bgm
            this.game.load.audio('bgm_title', 'assets/sounds/bgm_usodarake.wav');
            this.game.load.audio('bgm_prologue', 'assets/sounds/bgm_makkura.wav');
            this.game.load.audio('bgm_play', 'assets/sounds/bgm_rihujin.wav');
            
            // fonts
            this.game.load.bitmapFont('carrier_command', 'assets/bitmapFonts/nokia.png', 'assets/bitmapFonts/nokia.xml');

            // sprites: title
            this.game.load.image('startPage_title', 'assets/sprites/startPage_title_244x177.png');
            this.game.load.image('startPage_babyTrader', 'assets/sprites/startPage_babyTrader_558x326.png');
            this.game.load.image('startPage_copyright', 'assets/sprites/startPage_copyright_171x533.png');
            this.game.load.image('startPage_creditsButton', 'assets/sprites/startPage_creditsButton_191x463.png');
            this.game.load.image('startPage_creditsButton_inv', 'assets/sprites/startPage_creditsButton_inv_191x463.png');
            this.game.load.image('startPage_howToPlayButton', 'assets/sprites/startPage_howToPlayButton_191x410.png');
            this.game.load.image('startPage_howToPlayButton_inv', 'assets/sprites/startPage_howToPlayButton_inv_191x410.png');
            this.game.load.image('startPage_startButton', 'assets/sprites/startPage_startButton_191x357.png');
            this.game.load.image('startPage_startButton_inv', 'assets/sprites/startPage_startButton_inv_191x357.png');

            // sprites: babies
            this.game.load.image('babies_male_001', 'assets/sprites/baby_m_001.png');
            this.game.load.image('babies_male_002', 'assets/sprites/baby_m_002.png');
            this.game.load.image('babies_male_003', 'assets/sprites/baby_m_003.png');
            this.game.load.image('babies_male_004', 'assets/sprites/baby_m_004.png');
            this.game.load.image('babies_female_001', 'assets/sprites/baby_f_001.png');
            this.game.load.image('babies_female_002', 'assets/sprites/baby_f_002.png');
            this.game.load.image('babies_female_003', 'assets/sprites/baby_f_003.png');
            this.game.load.image('babies_female_004', 'assets/sprites/baby_f_004.png');

            // sprites: customers
            this.game.load.image('customers_001', 'assets/sprites/customer_001.png');
            this.game.load.image('customers_002', 'assets/sprites/customer_002.png');
            this.game.load.image('customers_003', 'assets/sprites/customer_003.png');
            this.game.load.image('customers_004', 'assets/sprites/customer_004.png');
            this.game.load.image('customers_005', 'assets/sprites/customer_005.png');
            this.game.load.image('customers_006', 'assets/sprites/customer_006.png');
            this.game.load.image('customers_007', 'assets/sprites/customer_007.png');
            this.game.load.image('customers_008', 'assets/sprites/customer_008.png');
            this.game.load.image('customers_009', 'assets/sprites/customer_009.png');

            // sprites: prologue
            this.game.load.image('prologue_babyTrader', 'assets/sprites/prologue_babyTrader.png');

            // sprites: goal screen
            this.game.load.image('goalScreen_backToTitleButton', 'assets/sprites/goalScreen_backToTitleButton_263x452.png');
            this.game.load.image('goalScreen_backToTitleButton_inv', 'assets/sprites/goalScreen_backToTitleButton_inv_263x452.png');
            this.game.load.image('goalScreen_panel', 'assets/sprites/goalScreen_panel_401x250.png');
            this.game.load.image('goalScreen_startButton', 'assets/sprites/goalScreen_startButton_526x452.png');
            this.game.load.image('goalScreen_startButton_inv', 'assets/sprites/goalScreen_startButton_inv_526x452.png');
            
            // sprites: result screen
            this.game.load.image('resultScreen_backToTitleButton', 'assets/sprites/resultScreen_backToTitleButton_292x487.png');
            this.game.load.image('resultScreen_backToTitleButton_inv', 'assets/sprites/resultScreen_backToTitleButton_inv_292x487.png');
            this.game.load.image('resultScreen_nextLevelButton', 'assets/sprites/resultScreen_nextLevelButton_526x487.png');
            this.game.load.image('resultScreen_nextLevelButton_inv', 'assets/sprites/resultScreen_nextLevelButton_inv_526x487.png');
            this.game.load.image('resultScreen_tryAgainButton', 'assets/sprites/resultScreen_tryAgainButton_526x487.png');
            this.game.load.image('resultScreen_tryAgainButton_inv', 'assets/sprites/resultScreen_tryAgainButton_inv_526x487.png');
            this.game.load.image('resultScreen_panel', 'assets/sprites/resultScreen_panel_401x252.png');
            this.game.load.image('resultScreen_titleFail', 'assets/sprites/resultScreen_titleFail_393x144.png');
            this.game.load.image('resultScreen_titleSuccess', 'assets/sprites/resultScreen_titleSuccess_393x144.png');

            // sprites: template
            this.game.load.image('template_arrowLeft', 'assets/sprites/template_arrowLeft_543x380.png');
            this.game.load.image('template_arrowLeft_inv', 'assets/sprites/template_arrowLeft_inv_543x380.png');
            this.game.load.image('template_arrowRight', 'assets/sprites/template_arrowRight_762x380.png');
            this.game.load.image('template_arrowRight_inv', 'assets/sprites/template_arrowRight_inv_762x380.png');
            this.game.load.image('template_businessButton', 'assets/sprites/template_businessButton_693x536.png');
            this.game.load.image('template_businessButton_inv', 'assets/sprites/template_businessButton_inv_693x536.png');
            this.game.load.image('template_chargeButton', 'assets/sprites/template_chargeButton_553x562.png');
            this.game.load.image('template_chargeButton_inv', 'assets/sprites/template_chargeButton_inv_553x562.png');
            this.game.load.image('template_pauseButton', 'assets/sprites/template_pauseButton_693x466.png');
            this.game.load.image('template_pauseButton_inv', 'assets/sprites/template_pauseButton_inv_693x466.png');
            this.game.load.image('template_talentButton', 'assets/sprites/template_talentButton_487x562.png');
            this.game.load.image('template_talentButton_inv', 'assets/sprites/template_talentButton_inv_487x562.png');
            this.game.load.image('template_template', 'assets/sprites/template_template_center.png');

            // sprites: credits
            this.game.load.image('credits_backToTitleButton', 'assets/sprites/credits_backToTitle_400x500.png');
            this.game.load.image('credits_backToTitleButton_inv', 'assets/sprites/credits_backToTitle_400x500_inv.png');
            this.game.load.image('credits_title', 'assets/sprites/credits_title_400x100.png');

            // sprites: how to play
            this.game.load.image('howToPlay_backToTitleButton', 'assets/sprites/howToPlay_backToTitle_400x532.png');
            this.game.load.image('howToPlay_backToTitleButton_inv', 'assets/sprites/howToPlay_backToTitle_400x532_inv.png');
            this.game.load.image('howToPlay_screenExample', 'assets/sprites/howToPlay_left_52x152.png');
            this.game.load.image('howToPlay_title', 'assets/sprites/howToPlay_title_400x80.png');
        }

        create() {
            this.preloadIcon.cropEnabled = false;
            setupButtonSoundEffect(this.game, 'se_buttonClick');
        }

        update() {
            if (this.ready) {
                this.game.state.start('title');
            }
        }

        onLoadComplete() {
            this.ready = true;
        }
    }
}