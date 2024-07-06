import React from "react";
import "../return/return.css";
import { NavLink } from "react-router-dom";

const Returnn = () => {
  return (
    <div className="container">
      <div className="shipping">
        <div className="navlink1">
          <NavLink to={`/`}>
            <button className="button11">Главная</button>
          </NavLink>
          <h2 className="kompone-h2">Возврат</h2>
        </div>
        <div className="nav-link3">
          <h5 className="garant-h5">Обмен и возврат по желанию покупателя</h5>
          <p className="return-p">
            Если товар по каким-то причинам не подошел вам, вы имеете право
            вернуть его или обменять на другой в течение 7 дней* с момента
            покупки при соблюдении следующих условий:
          </p>
          <p className="return-p">
            Товар имеет первоначальный вид, имеется товарная кондиция; Товар
            имеет полную комплектацию, включая упаковочные материалы
          </p>
          <p className="return-p">
            Товар не имеет следов подключался и не имеет признаков монтажа
          </p>
          <p className="return-p">
            Упаковка товара не имеет повреждений, присутствует первоначальный
            товарный вид;
          </p>
          <p className="return-p">
            Товар из других городов можно прислать нам транспортной компанией,
            при этом услуги транспортной компании  оплачиваются клиентом.{" "}
          </p>
          <p className="return-p">
            *В течение 14 дней для отдельных брендов. При оформлении заказа
            уточните у менеджера
          </p>
          <h5 className="garant-h5">Обмен и возврат по ошибке продавца</h5>
          <h4 className="return-h4">
            Причины обмена или возврата по ошибке продавца:
          </h4>
          <p className="return-p">Неполная комплектация товара </p>
          <p className="return-p">Брак или дефект товара</p>
          <p className="return-p">
            Если вы выявили дефект, брак или неполную комплектацию товара,
            необходимо сделать фото дефекта и отправить на
            почту mail@at-svet.ru, указав краткое описание характера брака/{" "}
          </p>
          <p className="return-p">
            Мы заменим бракованный товар или довезем недостающие части. Доставка
            будет осуществлена бесплатно
          </p>
        </div>
      </div>
    </div>
  );
};

export default Returnn;
