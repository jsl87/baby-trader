﻿/****************************************************************************************
Copyright (C) 2015 Jong Seong Lee
jsl@pdx.edu
Portland State University

This program is licensed under the MIT License.
Please see the file COPYING in the source distribution of this software for license terms.
****************************************************************************************/

module BabyTrader {
    export class Dialog {
        public static get prologue(): string[] {
            return [
                "Welcome to my shop.",
                "Please let me introduce my self.",
                "I am the Baby Trader.",
                "It is my pleasure to offer you a great deal.",
                "Have you ever thought you would want to have your dream baby?",
                "Since you visited me, I see you are quite disappointed with yours.",
                "Do not worry anymore, I have babies you have been dreamed for...",
                "They are in a condition beyond your expectations.",
                "You want your baby to be a doctor in the future?",
                "Or a most famous movie star in the world?",
                "Any baby you can imagine is in my stock.",
                "Please look around, I am sure you will find what you are looking for.",
                "Thank you, and enjoy your stay..."
            ];
        };

        private static game = null;
        private static dialogLocation = null;
        private static dialogContent = null;
        private static dialogIndex = -1;
        private static dialogLine = '';
        private static nextLineCheck = null;
        private static updateCheck = null;

        public static startDialog(game, dialogLocation, dialogContent) {
            if (BabyTrader.Dialog.nextLineCheck) {
                this.game.time.events.remove(BabyTrader.Dialog.nextLineCheck);
            }
            
            if (BabyTrader.Dialog.updateCheck) {
                this.game.time.events.remove(BabyTrader.Dialog.updateCheck);
            }

            this.game = game;
            this.dialogLocation = dialogLocation;
            this.dialogContent = dialogContent;
            this.dialogIndex = -1;
            this.nextLine();
            return dialogLocation;
        }

        private static nextLine() {
            this.dialogIndex++;

            if (this.dialogIndex < this.dialogContent.length) {
                this.dialogLine = '';
                BabyTrader.Dialog.updateCheck = this.game.time.events.repeat(80, this.dialogContent[this.dialogIndex].length + 1, BabyTrader.Dialog.updateLine, this);
            }
        }

        private static updateLine() {
            if (this.dialogLine.length < this.dialogContent[this.dialogIndex].length) {
                this.dialogLine = this.dialogContent[this.dialogIndex].substr(0, this.dialogLine.length + 1);
                this.dialogLocation.setText(this.dialogLine.toUpperCase());
            }
            else {
                BabyTrader.Dialog.nextLineCheck = this.game.time.events.add(Phaser.Timer.SECOND * 2, BabyTrader.Dialog.nextLine, this);
            }
        }
    }
} 