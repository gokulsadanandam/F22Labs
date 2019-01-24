/**
 * dash Module
 *
 * Description
 */
angular.module('dash', [])
    .controller('dash', ['$scope', function($scope) {

        $scope.icons = [{
                'url': '/client/components/dash/whatsapp-logo.svg',
                'action': ''
            },
            {
                'url': '/client/components/dash/whatsapp-logo.svg',
                'action': ''
            },
            {
                'url': '/client/components/dash/whatsapp-logo.svg',
                'action': ''
            },
            {
                'url': '/client/components/dash/whatsapp-logo.svg',
                'action': ''
            },
            {
                'url': '/client/components/dash/whatsapp-logo.svg',
                'action': ''
            },
            {
                'url': '/client/components/dash/whatsapp-logo.svg',
                'action': ''
            }
        ]

        $scope.inbox = [{
            'type': 'All',
            'count': 89,
            'special': 0
        }, {
            'type': 'Messages',
            'count': 11,
            'special': 0
        }, {
            'type': 'Unread',
            'count': 8,
            'special': 0
        }, {
            'type': 'Important',
            'count': 23,
            'special': 1
        }, {
            'type': 'Teams',
            'count': 8,
            'special': 0
        }, {
            'type': 'Groups',
            'count': 9,
            'special': 0
        }, {
            'type': 'Channels',
            'count': 4,
            'special': 0
        }, {
            'type': 'Locations',
            'special': 0
        }, {
            'type': 'Media',
            'count': 56,
            'special': 1
        }, {
            'type': 'Help',
            'special': 0
        }, {
            'type': 'Settings',
            'special': 0
        }]

        $scope.users = [{
            'name': 'Michelle',
            'message': 'Can you send me the Address',
            'time': '2 mins ago',
            'messageList': [{
                'message': 'How are You?',
                'sender': false,
                'time': '13:30'
            }, {
                'message': 'I am Fine',
                'sender': true,
                'time': '13:31'
            }, {
                'message': 'How about you?',
                'sender': true,
                'time': '13:32'
            }]
        }, {
            'name': 'Tesla',
            'message': 'Can you send me the link',
            'time': '20 mins ago',
            'messageList': [{
                'message': 'How are You?',
                'sender': false,
                'time': '13:30'
            }, {
                'message': 'I am Fine',
                'sender': true,
                'time': '13:31'
            }, {
                'message': 'How about you?',
                'sender': true,
                'time': '13:32'
            }]
        }, {
            'name': 'Jax',
            'message': 'How are you?',
            'time': '11 mins ago',
            'messageList': [{
                'message': 'How are You?',
                'sender': false,
                'time': '13:30'
            }, {
                'message': 'I am Fine',
                'sender': true,
                'time': '13:31'
            }, {
                'message': 'How about you?',
                'sender': true,
                'time': '13:32'
            }]
        }]

        $scope.activeUser = {
            'name': 'Michelle',
            'message': 'Can you send me the Address',
            'time': '2 mins ago',
            'messageList': [{
                'message': 'How are You?',
                'sender': false,
                'time': '13:30'
            }, {
                'message': 'I am Fine',
                'sender': true,
                'time': '13:31'
            }, {
                'message': 'How about you?',
                'sender': true,
                'time': '13:32'
            }]
        }

        $scope.click = function(data) {
            console.log(data)
        }
    }])