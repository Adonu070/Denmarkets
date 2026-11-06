
const ulpage=document.querySelectorAll('.ul-page');
const list=document.querySelectorAll('.list')
const curency=document.querySelectorAll('.currency')
const selectpiar=document.getElementById('select-pair')
const bluring=document.querySelector('.blur')
const allplatformblur=document.querySelector('.allplatformblur')
const pair=document.querySelector('.pairs')
// const pairsymbol=document.getElementById('pairsymbol');
const liveprice=document.getElementById('liveprice')
let balance=document.getElementById('balance');









 list.forEach(list=>{
list.addEventListener('click',()=>{ 
  curency.forEach(curency=>{
     curency.innerHTML=list.innerHTML
  })  
 
//  document.querySelector('.currencyselcted').innerHTML=list.innerHTML
bluring.style.display='none'

  })
 
})


// ,"base_code":"GBP","target_code":"USD","conversion_rate":1.3375}

async function gatedata(thesymbol){
try{

  const respons= await fetch(`https://v6.exchangerate-api.com/v6/be74dfdcb77d34057d6b35a5/pair/${thesymbol}`)

const data= await respons.json();
let result=JSON.stringify(data.conversion_rate)
liveprice.innerHTML=result

// let pairchar=JSON.stringify(thesymbol);
let removedpairchar=thesymbol.replaceAll("/","")
//  pairsymbol.innerHTML=removedpairchar


}catch (error){


}

}

// window.gatedata=gatedata;




const marketselection=document.querySelectorAll('.market-leection')
const forex=document.getElementById('forex');
const crypto=document.getElementById('crypto');
const indices=document.getElementById('indices')
const market=document.querySelector('.market')

const fxbgcolor= document.querySelector('.fx');
const cryptobrcolor=document.querySelector('.cryp');
const indicesecolor=document.querySelector('.inds');
const thefx=document.querySelector('.thefx')
const thedity=document.querySelector('.thedity')
const thepto=document.querySelector('.thepto')
const allplatform=document.querySelector('.allplatform')
const brokers=document.querySelector('.brokers')
const propfirm=document.querySelector('.prop');
const platformtype=document.querySelector('.platform-type');
const thebroker=document.querySelector('.thebroker');
  const thepropfirm=document.querySelector('.thepropfirm');
const  platform=document.querySelectorAll('.platform')
const brokerandpropdisplay=document.querySelector('.brokerandprop-display');
const selectedplatform=document.querySelectorAll('.selected-platform')



brokers.style.display='block';

// auto
pair.innerHTML='Currency pair'
thefx.innerHTML='fx'
fxbgcolor.classList.add('green')
 curency.innerHTML='Select pair'

// autor end



marketselection.forEach(marketselection=>{
  marketselection.addEventListener('click',()=>{
 thefx.innerHTML='';
thedity.innerHTML='';
thepto.innerHTML='';
ulpage.forEach(ulpage=>{
  ulpage.style.display='none'
})

    if (marketselection.innerHTML==='FX(Forex)'){
// forex.style.display='block';
  // market.forEach(market=>{
    fxbgcolor.classList.add('green')
    indicesecolor.classList.remove('green')
    cryptobrcolor.classList.remove('green')
pair.innerHTML='Currency pair';
curency.innerHTML='Select pair'
thefx.innerHTML='fx'
// })

    }


else if(marketselection.innerHTML.includes('Indices')){
allplatform.style.display='block'
brokers.style.display='block';
propfirm.style.display='none'
  indicesecolor.classList.add('green')
  cryptobrcolor.classList.remove('green')
    fxbgcolor.classList.remove('green')
  thedity.innerHTML='commodity';
  pair.innerHTML='Choose pair'
    curency.innerHTML='Select pair'
    allplatformblur.style.display='block';
    thebroker.classList.add('green');
    thepropfirm.classList.remove('green')
}


else if(marketselection.innerHTML==='Crypto'){
  // crypto.style.display='block';
cryptobrcolor.classList.add('green')
  indicesecolor.classList.remove('green');
  fxbgcolor.classList.remove('green')
thepto.innerHTML='crypto'
pair.innerHTML='Choose pair'
curency.innerHTML='Select pair'
// thefx.innerHTML='';
}



  })
})







bluring.addEventListener('click',()=>{
bluring.style.display='none'
})

selectpiar.addEventListener('click',()=>{

 if (thefx.innerHTML==='fx'){

forex.style.display='block'
  indices.style.display='none';
  crypto.style.display='none';
 bluring.style.display='block'
}


else if(thedity.innerHTML==='commodity'){
  indices.style.display='block'
  forex.style.display='none';
  crypto.style.display='none';
 bluring.style.display='block'
}
 else if(thepto.innerHTML==='crypto'){
crypto.style.display='block';
  indices.style.display='none'
  forex.style.display='none'
bluring.style.display='block'
 }

})




// fetch(`https://api.massive.com/v2/aggs/ticker/I:NDX/range/1/minute/2026-11-03/2026-11-04?apiKey=YOUR_API_KEY`)


//  display result

if (balance){


let pips=document.getElementById('pips');
let risk=document.getElementById('Risk');
let lotsize=document.querySelector('.lots-size');
const calculatebtn=document.querySelector('.calculate-btn');
const displayriskaount=document.querySelector('.riskamount');
const displaypipvalue=document.querySelector('.pips-par-value');
const displaypipsinrisk=document.querySelector('.pips-in-risk')
// pips value
let xauusdpaylot=100
let majorpairpaylot=10
let cryptopairpaylot=1
let pairwithoutjpy= 0.0001
let pairdwithjpy=0.01
let contractsize=100000
// indices
let smallcontractsize=1
let mediumcontractsize=10
// pips value end



calculatebtn.addEventListener('click',()=>{

// fetch(`https://v6.exchangerate-api.com/v6/8ce863e5f792ed76106498b9/pair/${thepiar}`)
// .then((threspons)=>threspons.json())




  // get % of the balance
 let balanceevalue=Number(balance.value) 
 let riskvalue=Number(risk.value)
 let pipsvalue=Number(pips.value)
 let risktotake=balanceevalue*riskvalue/100; //risk
//  get % of the balance end
// commodity
if (curency.innerHTML.includes('XAUUSD')&& balanceevalue&&riskvalue&&pipsvalue){
 let xauusdlotstouse=risktotake/(pipsvalue*xauusdpaylot)
 lotsize.innerHTML=xauusdlotstouse.toFixed(3);
 displayriskaount.innerHTML=`$${risktotake}`
 displaypipvalue.innerHTML=`$${1}`
 displaypipsinrisk.innerHTML=pipsvalue
}

// get html currency showing
const allpairs=curency.textContent.trim();
const quotecurrency=allpairs.slice(-3)
console.log(quotecurrency)
// get html currency showing end

// USD/CAD GROUP
 if (quotecurrency==='CAD'&&balanceevalue&&riskvalue&&pipsvalue){
fetch(`https://v6.exchangerate-api.com/v6/be74dfdcb77d34057d6b35a5/pair/USD/CAD`)
.then((threspons)=>threspons.json())
.then( therespons=>localStorage.setItem('usdcadprice',therespons.conversion_rate))

// console.log(threspons.conversion_rate);

  let thecontracsize=contractsize*pairwithoutjpy
 
  let convertusdcadprice=Number(localStorage.getItem('usdcadprice')) //usdcad price
  let convertousdamount=thecontracsize/convertusdcadprice; //pips in USD is correct
  let thelotsizetouse=risktotake/(pipsvalue*convertousdamount) 
  lotsize.innerHTML=thelotsizetouse.toFixed(3)
   displayriskaount.innerHTML=`$${risktotake}`
 displaypipvalue.innerHTML=`$${'--'}`
 displaypipsinrisk.innerHTML=pipsvalue

}


// USD/CHF GROUP
else if (quotecurrency==='CHF'&&balanceevalue&&riskvalue&&pipsvalue){

 fetch(` https://v6.exchangerate-api.com/v6/be74dfdcb77d34057d6b35a5/pair/USD/CHF`)
.then((threspons)=>threspons.json())
.then( therespons=>localStorage.setItem('usdchfprice',therespons.conversion_rate))
  let thecontracsize=contractsize*pairwithoutjpy
 console.log(thecontracsize)
  let convertusdchfprice=Number(localStorage.getItem('usdchfprice')) //usdcad price
  let convertousdamount=thecontracsize/convertusdchfprice; //pips in USD is correct
  let thelotsizetouse=risktotake/(pipsvalue*convertousdamount) 
  lotsize.innerHTML=thelotsizetouse.toFixed(3);
     displayriskaount.innerHTML=`$${risktotake}`
 displaypipvalue.innerHTML=`$${'--'}`
 displaypipsinrisk.innerHTML=pipsvalue
}



// USD/JPY GROUP
else if (quotecurrency==='JPY'&&balanceevalue&&riskvalue&&pipsvalue){

  
 fetch(`https://v6.exchangerate-api.com/v6/be74dfdcb77d34057d6b35a5/pair/USD/JPY`)
.then((threspons)=>threspons.json())
.then( therespons=>localStorage.setItem('usdjpyfprice',therespons.conversion_rate))

  let thecontracsize=contractsize*pairdwithjpy

  let convertusdjpyprice=Number(localStorage.getItem('usdjpyfprice')) //usdcad price
  let convertousdamount=thecontracsize/convertusdjpyprice; //pips in USD is correct
  let thelotsizetouse=risktotake/(pipsvalue*convertousdamount) 
  lotsize.innerHTML=thelotsizetouse.toFixed(3);
   displayriskaount.innerHTML=`$${risktotake}`
 displaypipvalue.innerHTML=`$${'--'}`
 displaypipsinrisk.innerHTML=pipsvalue
}

// AUDUSD GROUP

else if (quotecurrency==='AUD'&&balanceevalue&&riskvalue&&pipsvalue){
  
 fetch(` https://v6.exchangerate-api.com/v6/be74dfdcb77d34057d6b35a5/pair/AUD/USD`)
.then((threspons)=>threspons.json())
.then( therespons=>localStorage.setItem('audusdprice',therespons.conversion_rate))
console.log()
  let thecontracsize=contractsize*pairwithoutjpy
 console.log(thecontracsize)
  let convertaudusdprice=Number(localStorage.getItem('audusdprice')) //audusd price
  let convertousdamount=thecontracsize*convertaudusdprice; //pips in USD is correct
  let thelotsizetouse=risktotake/(pipsvalue*convertousdamount) 
  lotsize.innerHTML=thelotsizetouse.toFixed(3);
   displayriskaount.innerHTML=`$${risktotake}`
 displaypipvalue.innerHTML=`$${'--'}`
 displaypipsinrisk.innerHTML=pipsvalue
}


// GBPUSD GROUP
else if (quotecurrency==='GBP'&&balanceevalue&&riskvalue&&pipsvalue){
 fetch(` https://v6.exchangerate-api.com/v6/be74dfdcb77d34057d6b35a5/pair/GBP/USD`)
.then((threspons)=>threspons.json())
.then( therespons=>localStorage.setItem('gbpusdprice',therespons.conversion_rate))
console.log()
  let thecontracsize=contractsize*pairwithoutjpy
 console.log(thecontracsize)
  let convertgbpusdprice=Number(localStorage.getItem('gbpusdprice')) //gbpusd price
  let convertousdamount=thecontracsize*convertgbpusdprice; //pips in USD is correct
  let thelotsizetouse=risktotake/(pipsvalue*convertousdamount) 
  lotsize.innerHTML=thelotsizetouse.toFixed(3);
     displayriskaount.innerHTML=`$${risktotake}`
 displaypipvalue.innerHTML=`$${'--'}`
 displaypipsinrisk.innerHTML=pipsvalue

}


// EURUSD GROUP


else if (quotecurrency==='EUR'&&balanceevalue&&riskvalue&&pipsvalue){
 fetch(` https://v6.exchangerate-api.com/v6/be74dfdcb77d34057d6b35a5/pair/EUR/USD`)
.then((threspons)=>threspons.json())
.then( therespons=>localStorage.setItem('eurusdprice',therespons.conversion_rate))
console.log()
  let thecontracsize=contractsize*pairwithoutjpy
 console.log(thecontracsize)
  let converteurusdprice=Number(localStorage.getItem('eurusdprice')) //eurusd price
  let convertousdamount=thecontracsize*converteurusdprice; //pips in USD is correct
  let thelotsizetouse=risktotake/(pipsvalue*convertousdamount) 
  lotsize.innerHTML=thelotsizetouse.toFixed(3);
     displayriskaount.innerHTML=`$${risktotake}`
 displaypipvalue.innerHTML=`$${'--'}`
 displaypipsinrisk.innerHTML=pipsvalue

}

// NZDUSD GROUP

else if (quotecurrency==='NZD'&&balanceevalue&&riskvalue&&pipsvalue){
 fetch(` https://v6.exchangerate-api.com/v6/be74dfdcb77d34057d6b35a5/pair/NZD/USD`)
.then((threspons)=>threspons.json())
.then( therespons=>localStorage.setItem('nzdusdprice',therespons.conversion_rate))
console.log()
  let thecontracsize=contractsize*pairwithoutjpy
 console.log(thecontracsize)
  let convertnzdusdprice=Number(localStorage.getItem('nzdusdprice')) //nzdusd price
  let convertousdamount=thecontracsize*convertnzdusdprice; //pips in USD is correct
  let thelotsizetouse=risktotake/(pipsvalue*convertousdamount) 
  lotsize.innerHTML=thelotsizetouse.toFixed(3);
     displayriskaount.innerHTML=`$${risktotake}`
 displaypipvalue.innerHTML=`$${'--'}`
 displaypipsinrisk.innerHTML=pipsvalue

}



//major pairs

else if (quotecurrency==='USD'&&balanceevalue&&riskvalue&&pipsvalue) {
  
let majorpairlots=risktotake/(pipsvalue*majorpairpaylot)
 lotsize.innerHTML=majorpairlots.toFixed(3);
 displayriskaount.innerHTML=`$${risktotake}`
 displaypipvalue.innerHTML=`$${0.01}`
 displaypipsinrisk.innerHTML=pipsvalue;

   displayriskaount.innerHTML=`$${risktotake}`
 displaypipvalue.innerHTML=`$${'--'}`
 displaypipsinrisk.innerHTML=pipsvalue
}


// crytpo


else if (curency.innerHTML.includes('BTC')||curency.innerHTML.includes('ETH')&&balanceevalue &&riskvalue && pipsvalue){
let cryptolotstouse=risktotake/(pipsvalue*cryptopairpaylot)
 lotsize.innerHTML=cryptolotstouse.toFixed(3);
 displayriskaount.innerHTML=`$${risktotake}`
 displaypipvalue.innerHTML=`$${0.10}`
 displaypipsinrisk.innerHTML=pipsvalue;
    displayriskaount.innerHTML=`$${risktotake}`
 displaypipvalue.innerHTML=`$${'--'}`
 displaypipsinrisk.innerHTML=pipsvalue
}

// indices

else if(curency.innerHTML.includes('NAS100')||curency.innerHTML.includes('SXP500')){
let indiceslotstouse=risktotake/(pipsvalue*smallcontractsize)
 lotsize.innerHTML=indiceslotstouse.toFixed(3);
  displayriskaount.innerHTML=`$${risktotake}`
     displayriskaount.innerHTML=`$${risktotake}`
 displaypipvalue.innerHTML=`$${'--'}`
 displaypipsinrisk.innerHTML=pipsvalue
}
else if(brokerandpropdisplay.innerHTML.includes('OctaFX')&&curency.innerHTML.includes('US30')){
let indiceslotstouse=risktotake/(pipsvalue*mediumcontractsize)
 lotsize.innerHTML=indiceslotstouse.toFixed(3);
  displayriskaount.innerHTML=`$${risktotake}`
     displayriskaount.innerHTML=`$${risktotake}`
 displaypipvalue.innerHTML=`$${'--'}`
 displaypipsinrisk.innerHTML=pipsvalue
}

else if(brokerandpropdisplay.innerHTML.includes('Funded next')){
let indiceslotstouse=risktotake/(pipsvalue*mediumcontractsize)
 lotsize.innerHTML=indiceslotstouse.toFixed(3);
  displayriskaount.innerHTML=`$${risktotake}`
     displayriskaount.innerHTML=`$${risktotake}`
 displaypipvalue.innerHTML=`$${'--'}`
 displaypipsinrisk.innerHTML=pipsvalue
}


else if(curency.innerHTML.includes('US30')){
  let indiceslotstouse=risktotake/(pipsvalue*smallcontractsize)
 lotsize.innerHTML=indiceslotstouse.toFixed(3);
  displayriskaount.innerHTML=`$${risktotake}`;
     displayriskaount.innerHTML=`$${risktotake}`
 displaypipvalue.innerHTML=`$${'--'}`
 displaypipsinrisk.innerHTML=pipsvalue
}

else if(curency.innerHTML.includes('GER40')){

 fetch(` https://v6.exchangerate-api.com/v6/be74dfdcb77d34057d6b35a5/pair/EUR/USD`)
.then((threspons)=>threspons.json())
.then( therespons=>localStorage.setItem('eurusdprice',therespons.conversion_rate))
let indiceslotstouse=risktotake/(pipsvalue*smallcontractsize*Number(localStorage.getItem('eurusdprice')))
 lotsize.innerHTML=indiceslotstouse.toFixed(3);
   displayriskaount.innerHTML=`$${risktotake}`
 displaypipvalue.innerHTML=`$${'--'}`
 displaypipsinrisk.innerHTML=pipsvalue

}
else if(curency.innerHTML.includes('JP225')){

 fetch(` https://v6.exchangerate-api.com/v6/be74dfdcb77d34057d6b35a5/pair/USD/JPY`)
.then((threspons)=>threspons.json())
.then( therespons=>localStorage.setItem('usdjpyprice',therespons.conversion_rate))
let indiceslotstouse=(risktotake*Number(localStorage.getItem('usdjpyprice')))/(pipsvalue*smallcontractsize)

 lotsize.innerHTML=indiceslotstouse.toFixed(3);
   displayriskaount.innerHTML=`$${risktotake}`
 displaypipvalue.innerHTML=`$${'--'}`
 displaypipsinrisk.innerHTML=pipsvalue;
}

else if(curency.innerHTML.includes('UK100')){

 fetch(`ht https://v6.exchangerate-api.com/v6/be74dfdcb77d34057d6b35a5/pair/GBP/USD`)
.then((threspons)=>threspons.json())
.then( therespons=>localStorage.setItem('gbpusdprice',therespons.conversion_rate))
let indiceslotstouse=risktotake/(pipsvalue*smallcontractsize*Number(localStorage.getItem('gbpusdprice')))
 lotsize.innerHTML=indiceslotstouse.toFixed(3);

   displayriskaount.innerHTML=`$${risktotake}`
 displaypipvalue.innerHTML=`$${'--'}`
 displaypipsinrisk.innerHTML=pipsvalue
}

// cruid oil
// else if (curency.innerHTML.includes('USOIL')&&balanceevalue&&riskvalue&&pipsvalue&&brokerandpropdisplay.innerHTML.includes('IC Markets')||brokerandpropdisplay.innerHTML.includes('HFM')){

//  let usoilotstouse=risktotake/(pipsvalue*smallcontractsize)
//  lotsize.innerHTML=usoilotstouse.toFixed(3);
//  displayriskaount.innerHTML=`$${risktotake}`
//  displaypipvalue.innerHTML=`$${1}`
//  displaypipsinrisk.innerHTML=pipsvalue
// }

// else if(curency.innerHTML.includes('USOIL')&&balanceevalue&&riskvalue&&pipsvalue&&brokerandpropdisplay.innerHTML.includes('Exness')){
//  let usoilotstouse=risktotake/(pipsvalue*mediumcontractsize)
//  lotsize.innerHTML=usoilotstouse.toFixed(3);
//  displayriskaount.innerHTML=`$${risktotake}`
//  displaypipvalue.innerHTML=`$${10}`
//  displaypipsinrisk.innerHTML=pipsvalue

// }


else{
 lotsize.innerHTML='0.000'
    displayriskaount.innerHTML=`$${'0.00'}`
 displaypipvalue.innerHTML=`$${'--'}`
 displaypipsinrisk.innerHTML='0.00'
}


 

})}













const savebalance=document.querySelector('.save-balance');
const savebalancerap=document.querySelector('.save-balance-rap');
const inputext=document.querySelectorAll('.input-text')
const savetext='Save'
 savebalance.innerHTML=savetext

balance.addEventListener('click',()=>{
savebalancerap.style.display='block';
 savebalance.innerHTML=savetext
})

savebalance.addEventListener('click',()=>{

 localStorage.setItem('savedbalance',balance.value)
        savebalance.innerHTML='Saved';

})
balance.value=localStorage.getItem('savedbalance')

inputext.forEach(inputext=>{
  inputext.addEventListener('click',()=>{
   savebalancerap.style.display='none'
})
})


// if(savebalance.innerHTML==='Saved'){

// }



// nav

const informationpage=document.getElementById('informationpage');
const inforpagesign=document.querySelector('.infor-page-sign')
const calculatorpage=document.getElementById('calculatorpage');
const calculatorpagesign=document.querySelector('.calculator-page-sign')
const settingpage=document.getElementById('settingpage');

  calculatorpage.style.display='block'
function showpage(pageid){
if(pageid==='informationpage'){

  informationpage.style.display='block';
  calculatorpage.style.display='none'
  inforpagesign.classList.add('greennav');
     settingpage.style.display='none'
     
}

else if (pageid==='calculatorpage'){ 
  calculatorpage.style.display='block'
 informationpage.style.display='none';
   settingpage.style.display='none'
}
else if (pageid==='settingpage')
{
  settingpage.style.display='block'

  calculatorpage.style.display='none'
 informationpage.style.display='none';

}


}

// const pipscheck=document.querySelectorAll('.pips-check')
const forforex=document.querySelector('.for-forex')
const cryptoandcommodity=document.querySelector('.crypto-commodity')
const cryptoandcommodityimage=document.querySelector
('.crypto-commodity-image')
const foreximage=document.querySelector('.forex-image')

forforex.addEventListener('click',()=>{
  foreximage.style.display='block';
  //  cryptoandcommodityimage.style.display='none'
}
)
cryptoandcommodity.addEventListener('click',()=>{
  cryptoandcommodityimage.style.display='block'
  //  foreximage.style.display='none'

}
)

forforex.addEventListener('dblclick',()=>{
  foreximage.style.display='none';
  //  cryptoandcommodityimage.style.display='none'
}
)
cryptoandcommodity.addEventListener('dblclick',()=>{
  cryptoandcommodityimage.style.display='none'
}

)


// nav end



// platforms

// brokers



platform.forEach(platform=>{  
  platform.addEventListener('click',()=>{
  
    if(platform.innerHTML==='Brokers'){
brokers.style.display='block';
propfirm.style.display='none'
thebroker.classList.add('green')
thepropfirm.classList.remove('green')
platformtype.innerHTML='CFD Broker'
    }
else if (platform.innerHTML==='Propfirms'){
brokers.style.display='none';
propfirm.style.display='block'
thepropfirm.classList.add('green')
thebroker.classList.remove('green')
platformtype.innerHTML='Propfirm'
}



  })
})

selectedplatform.forEach(selectedplatform=>{

  selectedplatform.addEventListener('click',()=>{
    allplatformblur.style.display='none'
   brokerandpropdisplay.innerHTML=selectedplatform.innerHTML

  }
)


 } )
if (thebroker.classList.add('green')){
platformtype.innerHTML='CFD Broker'
}
//brokers end

// platforms end



// left page


const letfpagerap=document.querySelector('.letf-page-rap')
// letfpagerap.style.display='block'
function menu(){
  letfpagerap.style.display='block'
}

   
 if ( window.innerWidth>=650){
  letfpagerap.style.display='block'
  }



letfpagerap.addEventListener('click',()=>{
  if ( window.innerWidth<=650){
     letfpagerap.style.display='none'
  }

})


// left page end








 // nav end


// serch feature
// const search=document.querySelector('.search')
// const searchinput=document.getElementById('searchinput')
// search.addEventListener('click',()=>{
//   list.includes(searchinput.value).innerHTML='bbb'
// })






















// function hold (){

// // const calculatorpage=document.querySelector('.calculator-page');
// // const calculatorpagetwo=document.querySelector('.calculator-page-two')

// // const theinforpagetwo=document.querySelector('.infor-page-two');

 
// // nav.forEach(nav=>{
// function calculatepage(){
//   calculatorpagetwo.style.display='block';
//   calculatorpage.style.display='none';

//    theinforpage.style.display='block';
//    theinforpagetwo.style.display='none';

//     calculate.classList.add('Calculate');
//   infor.classList.remove('Info')


// }

// // function calculatepagecolored(){
// //   calculatorpagetwo.style.display='none';
// //   calculatorpage.style.display='block';

// //    theinforpage.style.display='block';
// //    theinforpagetwo.style.display='none'
      
// // }

// function inforpage(){
// theinforpage.style.display='none';
// theinforpagetwo.style.display='block'
// calculatorpage.style.display='block';
// calculatorpagetwo.style.display='none';
// calculate.classList.remove('Calculate');
//     infor.classList.add('Info')
// }


// // function inforpagecolored(){
// // theinforpage.style.display='block';
// // theinforpagetwo.style.display='none';
// // }
//   // calculatorpage.addEventListener('Click',()=>{

 

     
//   //     })

// // else if(calculatorcolored){
// //   //        inforcoloerd.style.display='block';
// //   // infornotcoloerd.style.display='none';

// //    calculatorcolored.style.display='none'
// //       calculatornotcolored.style.display='block';
      
// //       nav.classList.add('greennav')
// // }



 

// // })
// }




