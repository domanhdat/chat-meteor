"use strict";

import {Config} from 'angular-ecmascript/module-helpers';

export default class RoutesConfig extends Config {
    configure() {
        this.$stateProvider
            .state('tab', {
                url        : '/tab',
                abstract   : true,
                templateUrl: 'client/app/tabs/tabs.html'
            })
            .state('tab.chats', {
                url  : '/chats',
                views: {
                    'tab-chats': {
                        templateUrl : 'client/app/chats/chats.html',
                        controller  : 'ChatsController',
                        controllerAs: 'chatCtrl'
                    }
                }
            })
            .state('tab.chat', {
                url  : '/chats/:chatId',
                views: {
                    'tab-chats': {
                        templateUrl : 'client/app/chat/chat.html',
                        controller  : 'ChatController',
                        controllerAs: 'chatCtrl'
                    }
                }
            });

        this.$urlRouterProvider.otherwise('tab/chats');
    }
}

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
