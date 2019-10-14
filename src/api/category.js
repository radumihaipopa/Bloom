export default () => {
    return fetch(`http://online.smartsoft.ro:3333/api/vod/`)
        .then(response => Promise.all([response, response.json()]))
}
