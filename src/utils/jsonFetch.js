export const jsonFetch =  async (url, params) => {
    if (!url) return new Error('No url specified.');
    const response = await fetch(url)
    const json = await response.json()
    const data = json.reduce((field, obj) => obj[field])
    return data;
}