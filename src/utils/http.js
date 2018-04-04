export default (url, method = 'get', body) => {
  const baseURL = 'http://localhost:8000/api/'
  return fetch(baseURL + url, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
}
