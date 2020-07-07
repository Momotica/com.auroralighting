'use strict';

const Homey = require('homey');
const { Log } = require('homey-log');

class AuroraAOne extends Homey.App {
	
	onInit() {
		this.log('AuroraAOne is running...');
	}
	
}

module.exports = AuroraAOne;