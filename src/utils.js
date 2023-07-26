export function row(content, styles = '') {
    return `<div style="${styles}">${content}</div>`
}

export function col(content) {
    return `<div class="grid grid-cols-3 gap-2 mt-2">${content}</div>`
}

export function toCss(styles = {}) {
    if(typeof styles === 'string') return  styles
    const toString = key => `${key}: ${styles[key]}`
    return Object.keys(styles).map(toString).join(';')
}

export  function block(type){
    return `
        <form name="${type}" class="bg-gray-100 p-3 m-2">
            <h5 class="capitalize">${type}</h5>
            <div class="mb-1">
                <input name="value"  class="border p-2" placeholder="value">
            </div>
             <div class="">
                <input name="styles" class="border p-2" placeholder="styles">
            </div>
            <button type="submit" class="my-3 bg-gray-700 text-white rounded-md px-3 py-2 hover:bg-gray-900">Add</button>
        </form>
        <hr/>
    `
}