console.log("THIS", this)
console.log("ME", me)
if (me) {
    this.userId = me.id    
} else {
    cancel("You should not be here")
}
console.log("ME_AGAIN", me)
