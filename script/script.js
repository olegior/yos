const storage ={
    data () {
        return{
            goods: [{
                brand: 'Converse',
                name: 'Rival Mid',
                price: 11000,
                id: 1,
                hover: true,
                sizes: '41, 42, 43, 44, 45',
                showed: true
            },{
                brand: 'Lacoste',
                name: 'Кеды',
                price: 7500,
                id: 2,
                hover: false,
                sizes: '41, 42, 43, 44, 45',
                showed: true
            },{
                brand: 'Lacoste',
                name: 'Кеды',
                price: 11000,
                id: 3,
                hover: false,
                sizes: '41, 42, 43, 44, 45',
                showed: true
            },{
                brand: 'Lacoste',
                name: 'Кеды',
                price: 15000,
                id: 4,
                hover: false,
                sizes: 'out of stock',
                showed: true
            },{
                brand: 'Lacoste',
                name: 'Кроссовки',
                price: 12000,
                id: 5,
                hover: false,
                sizes: 'out of stock',
                showed: true
            },{
                brand: 'Lacoste',
                name: 'Кроссовки',
                price: 15000,
                id: 6,
                hover: false,
                sizes: '48, 49',
                showed: true
            },{
                brand: 'Adidas',
                name: 'NMD',
                price: 15000,
                id: 7,
                hover: false,
                sizes: 'out of stock',
                showed: true
            },{
                brand: 'Adidas',
                name: 'Superstar',
                price: 11000,
                id: 8,
                hover: false,
                sizes: '42, 43',
                showed: true
            },{
                brand: 'Adidas',
                name: 'Forum mid',
                price: 11000,
                id: 9,
                hover: false,
                sizes: '41, 42, 43, 44, 45',
                showed: true
            },{
                brand: 'Adidas',
                name: 'Forum low',
                price: 15000,
                id: 10,
                hover: false,
                sizes: 'out of stock',
                showed: true
            },{
                brand: 'Adidas',
                name: 'stritball',
                price: 12000,
                id: 11,
                hover: false,
                sizes: 'out of stock',
                showed: true
            },{
                brand: 'Adidas',
                name: 'stritball 2',
                price: 15000,
                id: 12,
                hover: false,
                sizes: '48, 49',
                showed: true
            },{
                brand: 'Adidas',
                name: 'ozweego',
                price: 15000,
                id: 13,
                hover: false,
                sizes: 'out of stock',
                showed: true
            },{
                brand: 'Adidas',
                name: 'ozweego',
                price: 11000,
                id: 14,
                hover: false,
                sizes: '42, 43',
                showed: true
            },{
                brand: 'Adidas',
                name: 'ozweego',
                price: 11000,
                id: 15,
                hover: true,
                sizes: '41, 42, 43, 44, 45',
                showed: true
            },{
                brand: 'Adidas',
                name: 'ozweego',
                price: 7500,
                id: 16,
                hover: false,
                sizes: '41, 42, 43, 44, 45',
                showed: true
            },{
                brand: 'Adidas',
                name: 'ozweego celox',
                price: 11000,
                id: 17,
                hover: false,
                sizes: '41, 42, 43, 44, 45',
                showed: true
            },{
                brand: 'Adidas',
                name: 'ozweego celox',
                price: 15000,
                id: 18,
                hover: false,
                sizes: 'out of stock',
                showed: true
            },{
                brand: 'Adidas',
                name: 'ozweego celox',
                price: 12000,
                id: 19,
                hover: false,
                sizes: 'out of stock',
                showed: true
            },{
                brand: 'Adidas',
                name: 'superstar',
                price: 15000,
                id: 20,
                hover: false,
                sizes: '48, 49',
                showed: true
            },{
                brand: 'Adidas',
                name: 'fprum mid',
                price: 13000,
                id: 21,
                hover: false,
                sizes: 'out of stock',
                showed: true
            },{
                brand: 'Adidas',
                name: 'ozweego',
                price: 11000,
                id: 22,
                hover: false,
                sizes: '42, 43',
                showed: true
            },{
                brand: 'Adidas',
                name: 'niteball',
                price: 12000,
                id: 23,
                hover: false,
                sizes: '41, 42, 43, 44, 45',
                showed: true
            },{
                brand: 'Puma',
                name: 'high',
                price: 14000,
                id: 24,
                hover: false,
                sizes: 'out of stock',
                showed: true
            },{
                brand: 'Reebok',
                name: 'Zig kinetica ii edge',
                price: 12000,
                id: 25,
                hover: false,
                sizes: 'out of stock',
                showed: true
            },{
                brand: 'Reebok',
                name: 'Zig kinetica ii edge',
                price: 16000,
                id: 26,
                hover: false,
                sizes: '48, 49',
                showed: true
            },{
                brand: 'Reebok',
                name: 'classic leather',
                price: 15000,
                id: 27,
                hover: false,
                sizes: 'out of stock',
                showed: true
            },{
                brand: 'Unnamed',
                name: 'Forum Mid',
                price: 11000,
                id: 28,
                hover: false,
                sizes: '42, 43',
                showed: true
            }],
            isListed: false,
            brands:[],
            checkedBrands:[],
            sortedUp: false,
            sortedDown: false,
            radio:0,
            radioButtons: [{
                id: 'brand',
                value : 1,
                title : 'бренд',
                checked: true
            },{
                id: 'name',
                value : 2,
                title : 'название',
                checked: false
            },{
                id: 'price',
                value : 3,
                title : 'цена',
                checked: false
            }],
            showedGoods:[]
        }
    },
    methods: {
        setUnlisted(){
            this.isListed = false;
            console.log (this.isListed)
        },
        setListed(){
            this.isListed = true;
            console.log (this.isListed)
        },
        setItemUrl(index){
           // if (this.showedGoods[index].hover == true){
            if (this.showedGoods[index].hover == true){
                url = 'content-images/'+this.showedGoods[index].id+'/2.jpg';
                return url;
            }
            else if (this.showedGoods[index].hover == false){
                url = 'content-images/'+this.showedGoods[index].id+'/1.jpg';
                return url;
            } 
        },
        // разобраться как работает сортировка
        sortUp(){
            if(this.sortedUp == false){
                
                if (this.radio == 1){
                    this.showedGoods.sort((a, b) => a.brand > b.brand ? 1 : -1)
                }
                if (this.radio == 2){
                    this.showedGoods.sort((a, b) => a.name > b.name ? 1 : -1)
                }
                if (this.radio == 3){
                    this.showedGoods.sort((a, b) => a.price > b.price ? 1 : -1)
                }
                this.sortedDown = false;
                this.sortedUp = true;
            }
        },
        sortDown(){
            if(this.sortedDown == false){
                if (this.radio == 1){
                    this.showedGoods.sort((a, b) => a.brand < b.brand ? 1 : -1)
                }
                if (this.radio == 2){
                    this.showedGoods.sort((a, b) => a.name <  b.name ? 1 : -1)
                }
                if (this.radio == 3){
                    this.showedGoods.sort((a, b) => a.price <  b.price ? 1 : -1)
                } 
                this.sortedUp = false;
                this.sortedDown = true;
            }
        },
        clearSort(){
            this.sortedUp = false;
            this.sortedDown = false;
        },
        selectBrand(){
            // console.log(a);
            this.showedGoods=[]
            let ind=[], q=0;
            this.checkedBrands.forEach(element => {
                if (element.checked == true){
                    q++
                    console.log(element)
                    this.goods.forEach(goods => {
                       if (goods.brand == element.brand){
                        ind.push(goods.id)
                       }
                    });
                }
            });
            //console.log(ind);
            
           for (j=0; j<ind.length; j++){
               for (i=0; i< this.goods.length; i++){
                   if (this.goods[i].id == ind[j]){
                     this.showedGoods.push(this.goods[i])
                   }
                }
           }
           console.log(this.showedGoods);
          if (!q){
            this.showedGoods= this.goods
            }
        }
    },
    beforeMount(){

        // выбираем бренды
        this.goods.forEach(item => {
            this.brands.push(item.brand);
        });
        this.brands = this.brands.filter((v, i, a) => a.indexOf(v) === i); 
        this.brands.sort();
       // console.log(this.brands)
        this.showedGoods=this.goods
        this.brands.forEach(element => {
            this.checkedBrands.push({brand:element, checked: false})
        });
        //console.log(this.checkedBrands)
        //console.log(this.showedGoods)
        //console.log(JSON.stringify(this.goods));
    }
}


const store ={
    data () {
        return {
            category:[
                {title:'худи'},
                {title:'свитшоты'},
                {title:'костюмы'},
                {title:'лосины'},
                {title:'джоггеры'},
                {title:'жилетки'},
                {title:'куртки'},
                {title:'аксессуары'},
                {title:'sale'}
            ],
            goods:[{
                category: 'свитшоты',
                title: 'Пудра',
                color: 'rose',
                size: 'oversize',
                price: '85',
                img: '18',
                id: '1'
            },{
                category: 'худи',
                title: 'Тудра',
                color: 'green',
                size: 'oversize',
                price: '110',
                img: '19',
                id: '2'
            },{
                category: 'лосины',
                title: 'Выдра',
                color: 'blue',
                size: 's',
                price: '55',
                img: '20',
                id: '3'
            }]
        }
    },
    methods: {
        setItemURL(index){
            url = '/img/goods/image '+this.goods[index].img+'.jpg';
            console.log(url)
            return url;
         }
    },
    beforeMount(){
        console.log(this.goods);
    }
}

Vue.createApp(store).mount('#app')