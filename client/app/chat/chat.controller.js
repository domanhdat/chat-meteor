"use strict";

import {Controller} from 'angular-ecmascript/module-helpers';
import {Chats, Messages} from './../../../lib/mongo.collections';

export default class ChatController extends Controller {
    constructor(...arg) {
        super(...arg);

        this.chatId = this.$stateParams['chatId'];

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
    }
}

ChatController.$inject = ['$stateParams'];
