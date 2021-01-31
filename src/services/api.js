import env from '../../environment'

const loginUrl = '/login'

export async function request(url, options = {}){
  const err = []
  const res = await fetch(env.apiUrl+url, {
    headers: new Headers({
      'content-type': 'application/json'
    }),
    credentials: 'include',
    ...options })
  const dat = await res.json()

  // Handle errors
  if (!res.ok) {
    if (typeof dat === 'object' && dat.message) {
      err.push(dat.message)
    }
    if (res.status === 404) {
      !err.length && err.push('Not found!')
    } else if (res.status === 403) {
      !err.length && err.push('Access Forbidden!')
    } else if (res.status === 401) {
      if (window.location.href !== loginUrl) {
        window.location.href = loginUrl
      }
      return
    }
    err.length || err.push('Unknown API Error.')
  }

  return [ dat, err, res]
}

export async function get(url, options = {}) {
  return request(url, {...options, method:'GET'})
}

export async function destroy(url, options = {}) {
  return request(url, {...options, method:'DELETE'})
}

export async function post(url, data, options = {}) {
  return request(url, {
    ...options,
    method: 'POST',
    body: JSON.stringify(data)
  })
}

export async function put(url, data, options = {}) {
  return request(url, {
    ...options,
    method: 'PUT',
    body: JSON.stringify(data)
  })
}

export async function patch(url, data, options= {}) {
  return request(url, {
    ...options,
    method: 'PATCH',
    body: JSON.stringify(data)
  })
}