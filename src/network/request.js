import axios from 'axios'
// ==========================================================
// ============= axios封装 公共配置和拦截器 ===================
// ==========================================================
export function request(config) {
	const instance = axios.create({
		baseURL: 'https://devapi.qweather.com/v7',
		timeout: 5000
	})
	instance.interceptors.request.use(
		config => {
			config.params.key = '631b52f0c26b412bbe52d46823896cfa';
			return config
		}),
		err => {
			console.log(err)
		}
	return instance(config);
}
// ==== 和风天气 API (城市信息搜索)====
export function citylookup(config) {

	const instance = axios.create({
		baseURL: 'https://geoapi.qweather.com/v2/city/lookup',
		timeout: 5000
	})
	instance.interceptors.request.use(
		config => {
			config.params.key = '631b52f0c26b412bbe52d46823896cfa';
			return config
		}),
		err => {
			console.log(err)
		}
	return instance(config);
}
// ==========================================================
// ========================= api请求 ========================
// ==========================================================

// 实时天气数据
export function getNowData(pos) {
	return request({
		url: '/weather/now',
		params: {
			location: pos
		}
	})
}
// 15日未来天气预报
export function get7DaysData(pos) {
	return request({
		url: '/weather/15d',
		params: {
			location: pos
		}
	})
}

// 生活指数
export function getLifestyle(pos) {
	return request({
		url: '/indices/1d',
		params: {
			type: '1,2,3',
			location: pos
		}
	})
}
// 城市信息搜索
export function getCitylist(pos) {
	return citylookup({
		params: {
			location: pos
		}
	})
}