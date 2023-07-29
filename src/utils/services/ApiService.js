

export default class ApiService {
    static _instanceCache;

    static instance() {
        if (!this._instanceCache) {
            this._instanceCache = new this();
        }

        return this._instanceCache;
    }
    get(url){
        return fetch(url)
        .then(res=>res.json())
       
        
    }
    async getProducts (){
      
        return await this.get("https://fakestoreapi.com/products")

    }

    async getProduct (id = "1" ){
      
        return await this.get(`https://fakestoreapi.com/products/${id}`)

    }
}
