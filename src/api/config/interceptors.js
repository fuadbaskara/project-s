import { notification } from 'antd'

import { clearCookies } from '../../utils/cookies'
import { MENU } from '../../config/menu'
import { getCookies } from '../../utils/cookies'
import { CONFIG_COOKIES } from '../../config/cookies'
import { PUBLIC_URL } from '../../config/url'

const getConfig = (config) => {
	const token = getCookies(CONFIG_COOKIES.TOKEN)
  if (token) {
    config.headers = {
			Authorization: `Bearer ${token}`,
      ...config.headers,
    }
  }
  return config
}

export const preRequestInterceptor = config => getConfig(config)

export const errorInterceptor = (err) => {
	const { response } = err
	if (response) {
		if (response.status === 401) {
			notification.error({
				message: 'Error',
				description: 'Token expired, please login again',
			})
			window.setTimeout(() => {
				clearCookies()
				window.location.href = `${PUBLIC_URL}${MENU.LOGIN}`
			}, 1500)
		} else if (response.status === 403) {
			notification.error({
				message: 'Error',
				description: 'Unauthorized Action!',
			})
		} else if (response.status === 500) {
			notification.error({
				message: 'Error',
				description: 'Something went wrong!',
			})
		} else {
			notification.error({
				message: response.data ? (response.data.code || 'Error') : 'Error',
				description: response.data ? (response.data.message || response.data.error) : '',
			})
		}
	}
	return Promise.reject(err)
}
