function addToCart(proId){
    console.log('hi');
    $.ajax({
        url:'/add-to-cart/' +proId,
        method:'get',
        success:(response)=>{
            if(response.status){
                let count=$('#cart-count').html()
                count=parseInt(count)+1
                $("#cart-count").html(count)
            }
            
        }
    })
}