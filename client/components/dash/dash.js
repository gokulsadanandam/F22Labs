/**
* dash Module
*
* Description
*/
angular.module('dash', [])
	.controller('dash', ['$scope', function($scope){
			
			$scope.icons = [{
				'url':'/client/components/dash/whatsapp-logo.svg',
				'action':''
			},
			{
				'url':'/client/components/dash/whatsapp-logo.svg',
				'action':''
			},
			{
				'url':'/client/components/dash/whatsapp-logo.svg',
				'action':''
			},
			{
				'url':'/client/components/dash/whatsapp-logo.svg',
				'action':''
			},
			{
				'url':'/client/components/dash/whatsapp-logo.svg',
				'action':''
			},
			{
				'url':'/client/components/dash/whatsapp-logo.svg',
				'action':''
			}]

			$scope.inbox = [{
				'type':'All',
				'count':89,
				'special':0
			},{
				'type':'Messages',
				'count':11,
				'special':0
			},{
				'type':'Unread',
				'count':8,
				'special':0
			},{
				'type':'Important',
				'count':23,
				'special':1
			},{
				'type':'Teams',
				'count':8,
				'special':0
			},{
				'type':'Groups',
				'count':9,
				'special':0
			},{
				'type':'Channels',
				'count':4,
				'special':0
			},{
				'type':'Locations',
				'special':0
			},{
				'type':'Media',
				'count':56,
				'special':1
			},{
				'type':'Help',
				'special':0
			},{
				'type':'Settings',
				'special':0
			}]

			$scope.click = function(data){
				console.log(data)
			}



	}])