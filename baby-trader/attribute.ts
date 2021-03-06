﻿/****************************************************************************************
Copyright (C) 2015 Jong Seong Lee
jsl@pdx.edu
Portland State University

This program is licensed under the MIT License.
Please see the file COPYING in the source distribution of this software for license terms.
****************************************************************************************/

module BabyTrader {
    export class Attribute {
        constructor() {
            var temp = getRandomNumber(BabyTrader.Attribute.attributes.length);
            this.name = BabyTrader.Attribute.attributes[temp].name;
            this.description = BabyTrader.Attribute.attributes[temp].description;
        }

        private name: string;
        private description: string;
        private static attributes = [
            { 'name': 'Doctor', 'description': 'can be a doctor' },
            { 'name': 'Kind', 'description': 'is kind to people' },
            { 'name': 'CEO', 'description': 'can be a CEO' },
            { 'name': 'Witty', 'description': 'is witty' },
            { 'name': 'Humorous', 'description': 'is humorous' },
            { 'name': 'Talkative', 'description': 'is talkative' },
            { 'name': 'Lawyer', 'description': 'can be a lawyer' },
            { 'name': 'Judge', 'description': 'can be a judge' },
            { 'name': 'Sports Star', 'description': 'can be a sports star' },
            { 'name': 'Rich', 'description': 'can be a rich' },
            { 'name': 'Artistic', 'description': 'is artistic' },
            { 'name': 'Model', 'description': 'can be a model' },
            { 'name': 'Movie Star', 'description': 'can be a movie star' }
        ];

        getName() {
            return this.name;
        }

        getDescription() {
            return this.description;
        }
    }
}