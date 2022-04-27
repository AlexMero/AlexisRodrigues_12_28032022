const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

let server = ''

async function fetcher(url, method = 'GET', body = null) {
  const options = {
    headers,
    method,
  }
  if (body !== null) options.body = JSON.stringify(body)

  try {
    const res = await fetch(server + url, options)
    return await res.json()
  } catch (err) {
    console.error('error:', err)
    throw err
  }
}

function setServerBaseUrl(url) {
  server = url
}

export { fetcher, setServerBaseUrl }
