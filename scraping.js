
import * as cheerio from 'cheerio'
import fetch from 'node-fetch';
//cargamos la url que queremos scraperar 
const res=await fetch('https://autosolar.es/kits-solares')
const html= await res.text();
//una vez recuperada se la pasamos a cheerio para pocesarla 
const $ = cheerio.load(html);
//aplicamos filtros
$.html();
console.log($.html())