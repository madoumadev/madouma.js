import {row, col, toCss} from "./utils";

function image(block){
    return  row(` <img src="${block.value}" alt=""/>`)
}
 function title(block) {
    const {tag = 'h1', styles} = block.options
     return row(row(`<${tag} class="text-2xl">${block.value}</${tag}>`), toCss(styles))
}
 function text(block) {
    return `<div class="">
                <div>
                    <p class="">${block.value}</p>
                </div>
            </div>`
}

 function columns(block) {
    const html = block.value.map(row).join('')
    return col(html)
}

export const templates = {
    title,
    text,
    columns,
    image
}
