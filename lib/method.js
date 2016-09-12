"use strict";

import {Meteor} from 'meteor/meteor';
import {Chats, Messages} from './mongo.collections';

Meteor.methods({
    newMessage(message) {
        check(message, {
            text  : String,
            chatId: String
        });

        message.timestamp = new Date();

        const messageId = Messages.insert(message);
        Chats.update(message.chatId, {$set: {lastMessage: message}});

        return messageId;
    }
});
