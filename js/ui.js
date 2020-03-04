class UI{
    constructor(){
        this.init()
    }
    init(){
        this.printcryptocurrencies();
    }
    printcryptocurrencies(){
        eventbrite.getcryptocurrencies()
        .then(events => {
            const categoryList = category.category.category;
            const categorySelect = document.createElement('select');
            categoryList.forEach(category => {
                const option = document.createElement('option');
                option.value = category.id;
                option.appendChild(document.createTextNode(category.name));
                categorySelect.appendChild(option);
                
            });
            
        })
        .catch(error => console.log(error));
    }
    printMessage(message, className){
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        //insert to html
        const searchEvents = document.querySelector('#search-events');
        searchEvents.appendChild(div);

    }
}