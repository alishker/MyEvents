class UI{
    constructor(){
        this.init()
    }
    init(){
        this.printcryptocurrencies();
    }
    printcryptocurrencies(){
        CryptoApi.getcryptocurrencies()
        .then(events => {
            console.log(events);
        })
    }
}