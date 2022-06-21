var total = 0;
var pz1 = 0;
var pz2 = 0;
var sumTopping = 0;
const onChoosePizza = () =>{
    pz1= event.target.value
    changePrice()
    if(pz1 == 8){
        let en = ["avocado","broccoli","onions","zucchini","tuna","ham"]
        let dis = ["lobster","oyster","salmon","bacon",'duck',"sausage"]
        disableTopping(en,dis)
    }
    if(pz1 == 10 ){
        let en = ["broccoli","onions","zucchini","lobster","oyster","salmon","bacon","ham"]
        let dis = ["avocado","tuna",'duck',"sausage"]
        disableTopping(en,dis)
    }
    if(pz1 == 12){
        let en = ["broccoli","onions","zucchini","bacon","tuna","bacon","duck","ham","sausage"]
        let dis = ["avocado","lobster","oyster","salmon"]
        disableTopping(en,dis)
    }
}
const onChooseSize = () => {
    pz2 = event.target.value
    changePrice()
}
const onChooseTopping = () =>{
    if(pz1 == 0) {
        alert("Choose Your Pizza First")
        document.getElementById(event.target.id).checked = false;
    }
    let cek = document.getElementById(event.target.id).checked
    cek ? sumTopping = sumTopping + parseInt(event.target.value) : sumTopping = sumTopping - parseInt(event.target.value)
    changePrice()
}
const changePrice = () => {
    total = parseInt(pz1) + parseInt(pz2) + sumTopping
    document.getElementById('price').innerHTML = "$"+total
}
const disableTopping = (en, dis) => {
    dis.forEach(element => {
        document.getElementById(element).disabled = true;
    });
    en.forEach(element => {
        document.getElementById(element).disabled = false;
    })   
}

