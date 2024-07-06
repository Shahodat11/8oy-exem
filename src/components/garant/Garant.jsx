import React from "react";
import "../garant/garant.css";
import { NavLink } from "react-router-dom";

const Garant = () => {
  return (
    <div className="container">
      <div className="shipping">
        <div className="navlink1">
          <NavLink to={`/`}>
            <button className="button11">Главная</button>
          </NavLink>
          <h2 className="kompone-h2">Гарантии</h2>
        </div>
        <div className="nav-link3">
          <h5 className="garant-h5">Обмен и возврат по желанию покупателя</h5>
          <p className="garant-p">
            Все товары в магазине «NornLight» имеют гарантию. Она заявляется
            производителем и имеет определенный срок действия на различные
            группы товаров. Если ваше изделие вышло из строя в
            течение гарантийного срока вы можете обратиться к нам и получить
            бесплатный ремонт. Для этого нужно:
          </p>
          <p className="garant-p">
            Предоставить чек, накладную или сообщить почту или номер телефона,
            указанные при оформлении заказа
          </p>
          <p className="garant-p">
            Привезти товар к нам на склад или отправить его транспортной
            компанией.
          </p>
          <p className="garant-p">
            После товар отправляется на экспертизу и ремонт. Если ремонт
            невозможен, мы обменяем изделие на аналогичное либо вернем деньги за
            покупку.
          </p>
          <p className="garant-p">
            Обращаем внимание, что «А-Свет» не является сервисным центром, а
            выполняет роль посредника между клиентом и поставщиком.
          </p>
          <p className="garant-p">
            Поэтому сроки проведения ремонта могут отличаться для товаров
            различных брендов.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Garant;
