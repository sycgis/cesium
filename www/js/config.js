/******
* !! WARNING: This is a generated file !!
*
* PLEASE DO NOT MODIFY DIRECTLY
*
* => Changes should be done on file 'app/config.json'.
******/

angular.module("cesium.config", [])

.constant("csConfig", {
	"timeout": 4000,
	"cacheTimeMs": 60000,
	"useRelative": true,
	"timeWarningExpireMembership": 5184000,
	"timeWarningExpire": 7776000,
	"useLocalStorage": false,
	"rememberMe": false,
	"showUDHistory": false,
	"node": {
		"host": "test-net.duniter.fr",
		"port": "9201"
	},
	"plugins": {
		"es": {
			"enable": true,
			"host": "test-net.duniter.fr",
			"port": "9203"
		}
	},
	"version": "0.2.12",
	"build": "2016-08-29T20:40:18.130Z",
	"newIssueUrl": "https://github.com/duniter/cesium/issues/new?labels=bug"
})

;