"use strict";

import Ionic from 'ionic-scripts';
import Meteor from 'meteor/meteor';
import {_} from 'meteor/underscore'
import {Controller} from 'angular-ecmascript/module-helpers';
import {Chats, Messages} from './../../../lib/mongo.collections';

export default class ChatController extends Controller {
    constructor(...arg) {
        super(...arg);

        this.chatId    = this.$stateParams['chatId'];
        this.isIOS     = Ionic.Platform.isWebView() && Ionic.Platform.isIOS();
        this.isCordova = Meteor.isCordova;

        this.helpers({
            messages() {
                return Messages.find({chatId: this.chatId});
            },
            data() {
                return Chats.findOne(this.chatId);
            }
        });
    }

    sendMessage() {
        if (_.isEmpty(this.message)) return;

        this.callMethod('newMessage', {
            text  : this.message,
            type  : 'text',
            chatId: this.chatId
        });

        delete this.message;
    }

    inputUp() {
        if (this.isIOS) {
            this.keyboardHeight = 216;
        }

        this.scrollBottom(true);
    }

    inputDown() {
        if (this.isIOS) {
            this.keyboardHeight = 0;
        }

        this.$ionicScrollDelegate.$getByHandle('chatScroll').resize();
    }

    closeKeyboard() {
        if (this.isCordova) {
            cordova.plugins.Keyboard.close();
        }
    }

    scrollBottom(animate) {
        this.$timeout(() => {
            this.$ionicScrollDelegate.$getByHandle('chatScroll').scrollBottom(animate);
        }, 300);
    }
}

ChatController.$inject = ['$stateParams', '$timeout', '$ionicScrollDelegate'];
