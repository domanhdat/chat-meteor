"use strict";

import 'angular-animate';
import 'angular-meteor';
import 'angular-sanitize';
import 'angular-ui-router';
import 'ionic-scripts';
import Angular from 'angular';
import Loader from 'angular-ecmascript/module-loader';
import {Meteor} from 'meteor/meteor';
import RoutesConfig from './app.router';
import 'angular-moment';

// Controller
import ChatsController from './chats/chats.controller';
import ChatController from './chat/chat.controller';

// Filter
import CalendarFilter from './filter/calendar.filter';

// Directive
import InputDirective from './directives/input.directive';

// Modules

const App = 'Whatsapp';

// App
Angular.module(App, [
    'angular-meteor',
    'ionic',
    'angularMoment'
]);

new Loader(App)
    .load(ChatsController)
    .load(ChatController)
    .load(CalendarFilter)
    .load(InputDirective)
    .load(RoutesConfig);

// Startup
if (Meteor.isCordova) {
    Angular.element(document).on('deviceready', onReady);
}
else {
    Angular.element(document).ready(onReady);
}

function onReady() {
    Angular.bootstrap(document, [App]);
}