export  class Sidebar {
    constructor(selector) {
        this.$el = document.querySelector(selector)

        this.init()
    }

    init(){
        this.$el.insertAdjacentHTML('afterbegin', this.template)
    }

    get template(){
        return [
            block('text'),
            block('title')
        ].join('')
    }
}

export  function block(type){
    return `
        <form class="bg-gray-100 p-3 m-2">
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