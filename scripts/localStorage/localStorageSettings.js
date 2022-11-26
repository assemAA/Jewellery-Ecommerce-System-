

if (!localStorage.getItem('clientBag')) {
    var content =  [{prod_id : 0 , quan : 0}]
    localStorage.setItem('clientBag' , JSON.stringify(content))
}

if (!localStorage.getItem('BagCounter')) {
    localStorage.setItem('BagCounter' , 0)
}