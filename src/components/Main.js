import Saat from "./Saat"
import Sayac from "./Sayac"
import coll from "../img/colle.webp";
import Person from './Person';
import { useState } from "react";

function Main(){

  const [paragraf, setParagraf] = useState(true)

    return(
        <main>
            <h1>Saatimiz çalışıyor tıkır tıkır...</h1> 
            <Saat/>
            <Sayac/>
            <img style={{width:'80%', display:'block', margin:'20px auto'}} src="https://images.pexels.com/photos/3021382/pexels-photo-3021382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <p>
              {paragraf ? "Colosseum, also called Flavian Amphitheatre, giant amphitheatre built in Rome under the Flavian emperors. Construction of the Colosseum was begun sometime between 70 and 72 CE during the reign of Vespasian. It is located just east of the Palatine Hill, on the grounds of what was Nero’s Golden House. The artificial lake that was the centrepiece of that palace complex was drained, and the Colosseum was sited there, a decision that was as much symbolic as it was practical. Vespasian, whose path to the throne had relatively humble beginnings, chose to replace the tyrannical emperor’s private lake with a public amphitheatre that could host tens of thousands of Romans." : "Kolezyum ya da Flavianus Amfitiyatro, İtalya'nın başkenti Roma'da bulunan oval bir amfitiyatrodur.Usta bir komutan olan Vespasianus tarafından MS 72 yılında yapımına başlandı ve MS 80 yılında Titus döneminde tamamlandı.Daha sonraki değişiklikler Domitian hükümdarlığı zamanında yapılmıştır.Kolezyum traverten kireçtaşı, tüf (volkanik kaya) ve tuğla kaplı betondan yapılmıştır.        Kolezyum, tarihinin çeşitli noktalarında yaklaşık 50.000 ila 80.000 seyirciyi ağırlayabilmiştir. İmparatorlar burada Roma halkını eğlendirmek için ve biraz da kendi eğlenceleri için gladyatör dövüşleri düzenlerdi. Bunlardan başka pek çok halk gösterileri, deniz savaşları, hayvan avcılığı, infazlar, meşhur savaşların yeniden canlandırılması, klasik mitolojiye dayanan dramalar olurdu. Kolezyum daha sonra barınma yeri, iş dükkânları, dini kışlalar, istiham, taş ocağı, Hristiyan türbesi olarak çeşitli amaçlarla kullanıldı. Asıl adı Arena iken, sonradan, girişteki heykelin adını aldı."}
              </p>

              <button onClick={()=> setParagraf(!paragraf)} className="chlan">Dili Değiştir / Change the Language</button><br /><br />

            <a id="collink" href="https://www.britannica.com/topic/Colosseum" target="_blank">For more information click here</a>

            <img style={{width:'80%', display:'block', margin:'20px auto'}} src={coll} alt="" />

            <Person
        name="Canan Bayram"
        img="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__480.jpg"
        tel="5555 555555"
      />
      <Person
        name="Can Bayram"
        img="https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445__340.jpg"
        tel="5555 554444"
      />
      <Person
        name="Ahmet Fevzi"
        img="https://cdn.pixabay.com/photo/2015/01/27/09/58/man-613601__340.jpg"
        tel="5555222222"
      />

            </main>
    )
}

export default Main