class EventBrite{
    constructor(){
        this.auth_token = 'KZXZUEVF5RWRVL3NNRN5';
    }
    
    async getcryptocurrencies(){
        const url = await fetch('https://www.eventyybriteapi.com/v3/categories/?token= ${this.auth_token}');
        const myevents = await url.json();
        return {
            myevents
        }
    }
}