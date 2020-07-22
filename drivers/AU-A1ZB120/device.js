'use strict';

const { ZigBeeLightDevice } = require('homey-zigbeedriver');

class AUA1ZB120 extends ZigBeeLightDevice {
	get energyMap() {
		return {
			'AOne 120W Dimmer': {
				approximation: {
					usageOff: 0,
					usageOn: 120,
				},
			},
		};
	}

}

module.exports = AUA1ZB120;