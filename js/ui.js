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
            console.log(events);
        })
    }
}