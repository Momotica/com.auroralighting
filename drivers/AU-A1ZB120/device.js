'use strict';

const ZigBeeDevice = require('homey-meshdriver').ZigBeeDevice;
const ZigBeeLightDevice = require('homey-meshdriver').ZigBeeLightDevice;
const minDimLevel = 30;

class AUA1ZB120 extends ZigBeeLightDevice {

	onMeshInit() {

    	this.enableDebug();
        // print the node's info to the console
        this.printNode();

		this.registerCapability('onoff', 'genOnOff');

		this.registerCapability('dim', 'genLevelCtrl');

		this.log('AUA1ZB120 Zigbee device has been inited');
	}

}

module.exports = AUA1ZB120;