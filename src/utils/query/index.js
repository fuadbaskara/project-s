import qs from 'qs'

export const getQueryString = (search) => {
  const query = qs.parse(search.replace('?', ''))
  const offset = ((parseInt(query.page, 10) - 1) || 0) * 10
  delete query.page
  return {
    ...query,
    offset,
  }
}

export const getQueryStringForPagination = (search) => {
  const query = qs.parse(search.replace('?', ''))
  const page = parseInt(query.page, 10) || 1
  return {
    ...query,
    page,
  }
}
