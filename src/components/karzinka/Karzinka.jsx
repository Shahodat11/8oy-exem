import React, { useState } from "react";
import "../karzinka/karzinka.css";
import { useSelector } from "react-redux";

const BOT_TOKEN = "6343815630:AAFHqRmYuj5TZx_20bP74N4JdVOO1RCUxw8";
const CHAT_ID = "-1002012016821";
const USER_ID = "1427172949";

let initialState = {
  fullname: "",
  telefon: "",
  email: "",
};
const Karzinka = () => {
  const carts = useSelector((s) => s.cart.value);
  console.log(carts);
  let [data, setData] = useState(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();

    let text = "Buyurtma %0A%0A";
    text += `Ismi: <b>${data.fullname}</b> %0A`;
    text += `Tel: <b>${data.telefon}</b> %0A`;
    text += `Email: ${data.email} %0A`;
    text += `Adress: ${data.adress} %0A`;
    text += `Commentary: ${data.commet} %0A%0A`;

    carts?.forEach((product) => {
      text += `Nomi: ${product.title} %0A`;
      text += `Miqdori: ${product.quantity} %0A`;
      text += `Narxi: ${product.price} %0A%0A`;
    });

    text += `Jami: ${carts
      .reduce((sum, pro) => sum + pro.quantity + pro.price, 0)
      ?.brm()}%0A`;
    // text += carts[0].images[0];

    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${USER_ID}&text=${text}&parse_mode=html`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
  };
  return (
    <>
      <div className="container">
        <div className="karzinka-page">
          <h2 className="karzinka-h2">Оформление</h2>
          <div onChange={(e) => console.log(e.target)}>
            <form onSubmit={handleSubmit} action="">
              <input
                className="inputTop"
                value={data.fullname}
                onChange={(e) =>
                  setData((p) => ({ ...p, fullname: e.target.value }))
                }
                type="text"
                placeholder="ФИО"
              />
              <input
                className="inputTop"
                value={data.telefon}
                onChange={(e) =>
                  setData((p) => ({ ...p, telefon: e.target.value }))
                }
                type="number"
                placeholder="Tелефон"
              />
              <input
                className="inputTop"
                value={data.email}
                onChange={(e) =>
                  setData((p) => ({ ...p, email: e.target.value }))
                }
                type="email"
                placeholder="Электронная Почта"
              />
              <h2 className="karzinka-h22">Доставка</h2>
              <input
                className="inputadress"
                value={data.adress}
                onChange={(e) =>
                  setData((p) => ({ ...p, adress: e.target.value }))
                }
                type="text"
                placeholder="Адрес доставки"
              />
              <div className="commit">
                <input
                  className="inputcommit"
                  value={data.commet}
                  onChange={(e) =>
                    setData((p) => ({ ...p, commit: e.target.value }))
                  }
                  type="text"
                  placeholder="Комментарий"
                />
              </div>
              <button className="karzinkabuttonn">Купить</button>
            </form>
          </div>
        </div>
        <div className="karzinkaBottom">
          <h2 className="karzinka-h2">Оплата</h2>
          <div className="karbottom">
            <h4 className="karzinka-h4">
              Товары.............................................12 300₽
            </h4>
            <h4 className="karzinka-h4">
              Доставка..............................................580₽
            </h4>
          </div>
          <button className="karzinkabutton">Купить</button>
        </div>
      </div>
    </>
  );
};

export default Karzinka;
