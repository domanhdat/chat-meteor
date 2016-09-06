"use strict";

import {Controller} from 'angular-ecmascript/module-helpers';
import {Chats} from './../../../lib/mongo.collections';

export default class ChatsController extends Controller {
    constructor(...arg) {
        super(...arg);
        this.helpers({
            data() {
                return Chats.find();
            }
        });
    }

    static remove(chat) {
        return Chats.remove({_id: chat._id});
    }
}