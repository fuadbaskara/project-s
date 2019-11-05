import Cookies from 'js-cookie'
import { CONFIG_COOKIES } from '../../config/cookies'
import { MENU } from '../../config/menu'
import { PUBLIC_URL } from '../../config/url'

export const getCookies = name => Cookies.get(name)

export const setCookies = (name, value) => {
  Cookies.set(name, value, { sameSite: 'lax' })
}

export const clearCookies = async () => {
  await Cookies.remove(CONFIG_COOKIES.TOKEN)
  await Cookies.remove(CONFIG_COOKIES.REFRESH_TOKEN)
  await Cookies.remove(CONFIG_COOKIES.ROLE)
  await Cookies.remove(CONFIG_COOKIES.FULLNAME)
}

export const logout = () => {
  clearCookies()
  window.location.href = `${PUBLIC_URL}${MENU.LOGIN}?isLogout=true`
}
