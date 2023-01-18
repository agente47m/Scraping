import * as cheerio from 'cheerio'
import fetch from 'node-fetch';
import { fs } from 'file-system';

//cargamos la url que queremos scraperar 
const res=await fetch('https://autosolar.es/kits-solares')
const html= await res.text();
//una vez recuperada se la pasamos a cheerio para pocesarla 
const $ = cheerio.load(html);

//aplicamos filtros scategory-products
let producto=[];
const $rows=$('div[class=category-product] a')
$rows.each((index, element)=>{
    const $el= $(element)
    //para sacar la imagen
    const imgagen =$el.find('div[class=product-frame]').find('img').eq(0).attr('src');
    const name=$el.find('div[class=product-name]').text()
    const price=$el.find('div[class=product-frame]').find('div[class=product-price]').text();
    //console.log($(element).html());
    const aux={nombre:name,precio:price,img:imgagen}
    producto.push(aux);
})

fs.writeFile('./test.json',JSON.stringify(producto,null,2),function(err) {});
console.log('Proceso finalizado...............')