class EventBrite{
    constructor(){
        this.auth_token = 'Y3RBRQ6GPHS57N56TX';
    }
    
    async getcryptocurrencies(){
        const url = await fetch('KZXZUEVF5RWRVL3NNRN5');
        const myevents = await url.json();
        return {
            myevents
        }
    }
}