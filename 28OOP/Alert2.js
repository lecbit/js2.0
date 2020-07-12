class Alert2 extends Alert{
    constructor(a, b, c, icon){
        super(a, b, c);
        this.icon = icon;
    }
showIconAlert(){
    document.querySelector(this.out).innerHTML = `<p class="${this.cssClass}"><i class="material-icons">${this.icon}</i> ${this.message}</p>`;
}
myAlert(){
    alert("hi!!!!" + this.message);
}
}