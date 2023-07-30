function addToCart(idSanPhamm, tenSanPham, giaSanPham, hinhAnhSanPham, soLuongSanPham) {
    //them vao gio hang
    debugger
    var cartItems = [];
    if(localStorage.getItem('productsInCart')){
        cartItems = JSON.parse(localStorage.getItem('productsInCart'));
    }
    
    if(cartItems.filter(x => x.id === idSanPhamm).length > 0){
        var index = cartItems.findIndex(x => x.id === idSanPhamm);
        cartItems[index].quantity += soLuongSanPham;
    }
    else{
        cartItems.push({
            id: idSanPhamm,
            name: tenSanPham,
            price: giaSanPham,
            image: hinhAnhSanPham,
            quantity: soLuongSanPham
        });
    }
    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
    document.getElementById('cart').innerHTML = `${cartItems.map(item => `<a>${item.name}: ${item.quantity}</a>`)}`;   
}

(function(){
    var cartItems = [];
    if(localStorage.getItem('productsInCart')){
        cartItems = JSON.parse(localStorage.getItem('productsInCart'));
    }
    document.getElementById('cart').innerHTML = `${cartItems.map(item => `<a>${item.name}: ${item.quantity}</a>`)}`;
})()




function addToCart(idSanPhamm, tenSanPham, giaSanPham, hinhAnhSanPham, soLuongSanPham) {
    //them vao gio hang
    
    var cartItems = [];
    if(localStorage.getItem('productsInCart')){
        cartItems = JSON.parse(localStorage.getItem('productsInCart'));
    }
    
    if(cartItems.filter(x => x.id === idSanPhamm).length < 0){
        var index = cartItems.findIndex(x => x.id === idSanPhamm);
        cartItems[index].quantity -= soLuongSanPham;
    // }
    // else{
    //     cartItems.push({
    //         id: idSanPhamm,
    //         name: tenSanPham,
    //         price: giaSanPham,
    //         image: hinhAnhSanPham,
    //         quantity: soLuongSanPham
    //     });
    }
    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
    document.getElementById('cart').innerHTML = `${cartItems.map(item => `<a>${item.name}: ${item.quantity}</a>`)}`;   
}

(function(){
    var cartItems = [];
    if(localStorage.getItem('productsInCart')){
        cartItems = JSON.parse(localStorage.getItem('productsInCart'));
    }
    document.getElementById('cart').innerHTML = `${cartItems.map(item => `<a>${item.name}: ${item.quantity}</a>`)}`;
})()

(function (d) {
    var js, id = 'facebook-jssdk';
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement('script');
    js.id = id;
    js.async = true;
    js.src = "https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&appId=363772567412181&version=v2.0";
    js.onload = function () {
        //$('.fb-plugin-chat-container').html('<div class="fb-customerchat" page_id="1449657571974931" ref="website" minimized="true"></div>')
    }
    d.getElementsByTagName('head')[0].appendChild(js);
}(document));

