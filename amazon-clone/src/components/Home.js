import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://www.whatspaper.com/wp-content/uploads/2021/09/hd-stranger-things-wallpaper-whatspaper-1.jpg"
          alt=""
        />
        <div className="home_row">
        <Product id="123123" title="Curio Centre Soft Cotton Swinging Hammock Hanging Swing Chair/Hammock Swing for Adults/Swing for Indoor Outdoor, Garden, Patio/Durable Portable Jhula Swing for Home (Free Hanging Accessories) - Blue" price={1999} 
          image="https://m.media-amazon.com/images/I/61va+NLNgbL._SL1100_.jpg"
          rating={4}/>
          <Product id="432567" title="Harry Potter and the Philosopher's Stone" price={320} 
          image="https://www.jkrowling.com/wp-content/uploads/2018/01/SorcerersStone_2017.png"
          rating={4}/>
         
          
        </div>
        <div className="home_row">
          <Product id="456732" title="Nike Women's React Phantom Run Flyknit 2 Shoes" price={2400} 
          image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ddf4165e-e5b2-4789-a8de-a4e4ac9847bd/zoomx-invincible-run-flyknit-road-running-shoes-b1XP3r.png"
          rating={3}/>
          <Product id="876543" title="Bella Vita Organic Aroma Candles Soy Wax 4 X 60g each, Vanilla, Cinnamon, Lavender & Rose, Upto 15 hours, best gift" price={320} 
          image="https://m.media-amazon.com/images/I/71NaU2NYcUL._SL1200_.jpg"
          rating={3}/>
           <Product id="245321" title="Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)" price={2999} 
          image="http://media.corporate-ir.net/media_files/IROL/17/176060/09202018/Alexa-Enabled/Amazon%20Echo%20Dot/Echo%20Dot,%20Charcoal,%20Front%20On.jpg"
          rating={4}/>
          
          
        </div>
        <div className="home_row">
          <Product id="897621" title="Solimo Medusa Queen Engineered wood Bed Without Storage (Wenge Finish)" price={12999} 
          image="https://m.media-amazon.com/images/I/711zaiiAw3L._SL1500_.jpg"
          rating={5}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
