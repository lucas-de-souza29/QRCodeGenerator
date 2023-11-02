const vm = new Vue({
    el:'#app',
    data: {
        title: 'QRCode Generator',
        link: 'https://www.google.com',
        qrcode: new QRious({
            size: 300
        })
    },
    computed: {
        newQrCode(){
            this.qrcode.value = this.link
            return this.qrcode.toDataURL();
        }
    },
})