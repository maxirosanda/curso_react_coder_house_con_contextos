import ItemList from '../itemList/itemList'
import { useState , useEffect } from "react";
import ItemDetailContainer from '../itemDetailContainer/ItemDetailContainer';
import { useParams } from "react-router-dom";
const ItemListContainer = ({}) => {

    const  {id}  = useParams()

    const [items , setItems] = useState({})
    const arreglo = [
        {
            id: 0,
            name: 'Motherboard Gigabyte Ga-b365m Elite',
            precio: 15749, 
            stock: 4,
            id_categoria:"1",
            img:"https://i.ibb.co/TBtKHtp/motherboard1.png",
            descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ex ac est pulvinar varius. Curabitur sit amet dolor convallis, feugiat ligula sed, mollis dui. Maecenas convallis sapien ut tellus faucibus egestas. Suspendisse laoreet hendrerit mauris id malesuada. Nulla et nisi malesuada, mollis arcu eget, malesuada erat. Etiam est massa, rutrum non purus ut, pharetra dictum sapien. Morbi et condimentum nisl, eu faucibus tellus. Suspendisse sagittis molestie dignissim. Maecenas iaculis leo sed magna rutrum tristique. Curabitur in facilisis ligula. Sed bibendum arcu ut urna consequat, quis scelerisque est sollicitudin. Nam molestie placerat diam, vel venenatis ex luctus ac. Sed vitae tincidunt est."
        },
         {
            id: 1, 
            name: 'Mother Asus Prime A320m-k Am4',
            precio: 7659, 
            stock: 8,
            id_categoria:"1",
            img:"https://i.ibb.co/Xy14Cgp/motherboard2.jpg",
            descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ex ac est pulvinar varius. Curabitur sit amet dolor convallis, feugiat ligula sed, mollis dui. Maecenas convallis sapien ut tellus faucibus egestas. Suspendisse laoreet hendrerit mauris id malesuada. Nulla et nisi malesuada, mollis arcu eget, malesuada erat. Etiam est massa, rutrum non purus ut, pharetra dictum sapien. Morbi et condimentum nisl, eu faucibus tellus. Suspendisse sagittis molestie dignissim. Maecenas iaculis leo sed magna rutrum tristique. Curabitur in facilisis ligula. Sed bibendum arcu ut urna consequat, quis scelerisque est sollicitudin. Nam molestie placerat diam, vel venenatis ex luctus ac. Sed vitae tincidunt est."
        },
        {
            id: 2, 
            name: 'Procesador gamer AMD Ryzen 3 3200Gn',
            precio: 14729, 
            stock: 5,
            id_categoria:"2",
            img:"https://i.ibb.co/C15sDvz/procesador1.jpg",
            descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ex ac est pulvinar varius. Curabitur sit amet dolor convallis, feugiat ligula sed, mollis dui. Maecenas convallis sapien ut tellus faucibus egestas. Suspendisse laoreet hendrerit mauris id malesuada. Nulla et nisi malesuada, mollis arcu eget, malesuada erat. Etiam est massa, rutrum non purus ut, pharetra dictum sapien. Morbi et condimentum nisl, eu faucibus tellus. Suspendisse sagittis molestie dignissim. Maecenas iaculis leo sed magna rutrum tristique. Curabitur in facilisis ligula. Sed bibendum arcu ut urna consequat, quis scelerisque est sollicitudin. Nam molestie placerat diam, vel venenatis ex luctus ac. Sed vitae tincidunt est."
        },
        {
            id: 3,
            name: 'Procesador Amd Ryzen 5 1600 Af Zen+',
            precio: 14800, 
            stock: 4,
            id_categoria:"2",
            img:"https://i.ibb.co/61JrKX0/procesador2.jpg",
            descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ex ac est pulvinar varius. Curabitur sit amet dolor convallis, feugiat ligula sed, mollis dui. Maecenas convallis sapien ut tellus faucibus egestas. Suspendisse laoreet hendrerit mauris id malesuada. Nulla et nisi malesuada, mollis arcu eget, malesuada erat. Etiam est massa, rutrum non purus ut, pharetra dictum sapien. Morbi et condimentum nisl, eu faucibus tellus. Suspendisse sagittis molestie dignissim. Maecenas iaculis leo sed magna rutrum tristique. Curabitur in facilisis ligula. Sed bibendum arcu ut urna consequat, quis scelerisque est sollicitudin. Nam molestie placerat diam, vel venenatis ex luctus ac. Sed vitae tincidunt est."
        },
         {
            id: 4, 
            name: 'Placa de video AMD Sapphire Pulse Radeon RX 500',
            precio: 13400, 
            stock: 8,
            id_categoria:"3",
            img:"https://i.ibb.co/gVDGM2W/placavideo1.jpg",
            descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ex ac est pulvinar varius. Curabitur sit amet dolor convallis, feugiat ligula sed, mollis dui. Maecenas convallis sapien ut tellus faucibus egestas. Suspendisse laoreet hendrerit mauris id malesuada. Nulla et nisi malesuada, mollis arcu eget, malesuada erat. Etiam est massa, rutrum non purus ut, pharetra dictum sapien. Morbi et condimentum nisl, eu faucibus tellus. Suspendisse sagittis molestie dignissim. Maecenas iaculis leo sed magna rutrum tristique. Curabitur in facilisis ligula. Sed bibendum arcu ut urna consequat, quis scelerisque est sollicitudin. Nam molestie placerat diam, vel venenatis ex luctus ac. Sed vitae tincidunt est."
        },
        {
            id: 5, 
            name: 'Placa de video Nvidia Asus Phoenix GeForce GTX 10 Series GTX 1050 Ti ',
            precio: 22300, 
            stock: 5,
            id_categoria:"3",
            img:"https://i.ibb.co/vHgdqst/placavideo2.jpg",
            descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ex ac est pulvinar varius. Curabitur sit amet dolor convallis, feugiat ligula sed, mollis dui. Maecenas convallis sapien ut tellus faucibus egestas. Suspendisse laoreet hendrerit mauris id malesuada. Nulla et nisi malesuada, mollis arcu eget, malesuada erat. Etiam est massa, rutrum non purus ut, pharetra dictum sapien. Morbi et condimentum nisl, eu faucibus tellus. Suspendisse sagittis molestie dignissim. Maecenas iaculis leo sed magna rutrum tristique. Curabitur in facilisis ligula. Sed bibendum arcu ut urna consequat, quis scelerisque est sollicitudin. Nam molestie placerat diam, vel venenatis ex luctus ac. Sed vitae tincidunt est."
        },
        {
            id: 6,
            name: 'Fuente Redragon Rpgs Gc-ps002 600w 80 Plus',
            precio: 9000, 
            stock: 4,
            id_categoria:"4",
            img:"https://i.ibb.co/h8njv1D/fuente1.jpg",
            descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ex ac est pulvinar varius. Curabitur sit amet dolor convallis, feugiat ligula sed, mollis dui. Maecenas convallis sapien ut tellus faucibus egestas. Suspendisse laoreet hendrerit mauris id malesuada. Nulla et nisi malesuada, mollis arcu eget, malesuada erat. Etiam est massa, rutrum non purus ut, pharetra dictum sapien. Morbi et condimentum nisl, eu faucibus tellus. Suspendisse sagittis molestie dignissim. Maecenas iaculis leo sed magna rutrum tristique. Curabitur in facilisis ligula. Sed bibendum arcu ut urna consequat, quis scelerisque est sollicitudin. Nam molestie placerat diam, vel venenatis ex luctus ac. Sed vitae tincidunt est."
        },
         {
            id: 7, 
            name: 'Gabinete Gamer Essenses Bze 30 Coolers Luz Rgb Con Remoto',
            precio: 7480, 
            stock: 8,
            id_categoria:"5",
            img:"https://i.ibb.co/pwSMZwk/gabinete1.jpg",
            descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ex ac est pulvinar varius. Curabitur sit amet dolor convallis, feugiat ligula sed, mollis dui. Maecenas convallis sapien ut tellus faucibus egestas. Suspendisse laoreet hendrerit mauris id malesuada. Nulla et nisi malesuada, mollis arcu eget, malesuada erat. Etiam est massa, rutrum non purus ut, pharetra dictum sapien. Morbi et condimentum nisl, eu faucibus tellus. Suspendisse sagittis molestie dignissim. Maecenas iaculis leo sed magna rutrum tristique. Curabitur in facilisis ligula. Sed bibendum arcu ut urna consequat, quis scelerisque est sollicitudin. Nam molestie placerat diam, vel venenatis ex luctus ac. Sed vitae tincidunt est."
         },
        {
            id: 8, 
            name: 'Disco sólido interno Kingston SA400S37/240G 240GB ',
            precio: 3500, 
            stock: 5,
            id_categoria:"6" ,
            img:"https://i.ibb.co/HHHzBjy/disco.jpg",
            descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ex ac est pulvinar varius. Curabitur sit amet dolor convallis, feugiat ligula sed, mollis dui. Maecenas convallis sapien ut tellus faucibus egestas. Suspendisse laoreet hendrerit mauris id malesuada. Nulla et nisi malesuada, mollis arcu eget, malesuada erat. Etiam est massa, rutrum non purus ut, pharetra dictum sapien. Morbi et condimentum nisl, eu faucibus tellus. Suspendisse sagittis molestie dignissim. Maecenas iaculis leo sed magna rutrum tristique. Curabitur in facilisis ligula. Sed bibendum arcu ut urna consequat, quis scelerisque est sollicitudin. Nam molestie placerat diam, vel venenatis ex luctus ac. Sed vitae tincidunt est."
        }
    ]
    

useEffect(() =>{
    
    const findItems = new Promise((resolve, reject) => {
        setTimeout(() => {
            
            arreglo.length ? resolve(arreglo) : resolve("no hay items")
        }, 3000)
})


    findItems.then((resolve) => {
            return setItems(resolve)
        }).catch((erro)=>  {
 
        return erro
        })
    
},[])
  

if(id) { 
return <>
 <ItemDetailContainer items = {items}></ItemDetailContainer> 
</>
}else{
return <>
<ItemList items = {items} ></ItemList> 
</>
}
}
  export default ItemListContainer