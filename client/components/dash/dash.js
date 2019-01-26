/**
 * dash Module
 *
 * Description
 */
angular.module('dash', [])
    .controller('dash', ['$scope', function($scope) {
        $scope.active = "dash-messages-active"
        $scope.icons = [{
                'url': '/client/components/dash/menu.svg',
                'action': ''
            },
            {
                'url': '/client/components/dash/whatsapp-logo.svg',
                'action': ''
            },
            {
                'url': '/client/components/dash/gmail.svg',
                'action': ''
            },
            {
                'url': '/client/components/dash/skype.svg',
                'action': ''
            },
            {
                'url': '/client/components/dash/slack.svg',
                'action': ''
            },
            {
                'url': '/client/components/dash/add.svg',
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
            'message': 'How about you?',
            'time': '2 mins ago',
            'nickName':'Micky',
            'contact':'8878789898',
            'bday':'22nd Nov 1995',
            'gender':'Male',
            'language':'German',
            'url':'/client/components/dash/user1.jpeg',
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
            'name': 'Nikol Tesla',
            'message': 'How about this Sunday?',
            'time': '20 mins ago',
            'nickName':'Micky',
            'contact':'8878789898',
            'bday':'22nd Nov 1995',
            'gender':'Male',
            'language':'French',
            'url':'/client/components/dash/user2.jpeg',
            'messageList': [{
                'message': 'Can we Meet this Week?',
                'sender': false,
                'time': '13:30'
            }, {
                'message': "Yes! I know it's been a long time",
                'sender': true,
                'time': '13:31'
            }, {
                'message': 'How about this Sunday?',
                'sender': false,
                'time': '13:32'
            }, {
                'message': 'Yes! I love to meet this Sunday!',
                'sender': true,
                'time': '13:34'
            }]
        }, {
            'name': 'Jax Paxter',
            'message': 'How about you?',
            'time': '11 mins ago',
            'nickName':'Jaxxy',
            'contact':'88784539898',
            'bday':'22nd Nov 1999',
            'gender':'Male',
            'language':'English',
            'url':'/client/components/dash/user3.jpeg',
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
            'nickName':'Micky',
            'contact':'8878789898',
            'bday':'22nd Nov 1995',
            'gender':'Male',
            'language':'German',
            'url':'/client/components/dash/user1.jpeg',

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

        $scope.clickIcon = function(){
            document.getElementById('active').removeAttribute("id")
            document.getElementsByClassName('dash-inbox')[0].setAttribute("id","active")
        }

        $scope.clickInbox = function(){
        document.getElementById('active').removeAttribute("id")            
        document.getElementsByClassName('dash-users')[0].setAttribute("id","active")
        }

        $scope.changeUser = function(data) {
            $scope.activeUser = data
            document.getElementById('active').removeAttribute("id")            
            document.getElementsByClassName('dash-messages')[0].setAttribute("id","active")
        }
    }])