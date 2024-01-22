const Item = require("../models/item")


var GET_HOME = (req, res) => {

    Item.find({})
    .then(foundItems=>{
        if(foundItems.length >= 1){
            res.render("list", {
                date: new Date().toLocaleDateString(),
                data:foundItems
            })
        }else{
            res.render("list", {
                date: new Date().toLocaleDateString(),
                data:"No Items Found"
            })
        }
    })
    .catch(err=>{
        console.log(err)
        res.render("404")
    })

    
   

    
    
}



var POST_HOME = (req, res) => {
    var itemText = req.body.newItem
    const item = new Item({
        name : itemText
    })

    item.save()
    .then((saved_item)=>{
        console.log("new item =>",saved_item)
        res.redirect("/")
    })
    .catch(err=>{
        console.log(err)
        res.render("404")
    })

}





module.exports = {
    GET_HOME,
    POST_HOME
}

