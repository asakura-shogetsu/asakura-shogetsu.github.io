export default function OtherMenus() {
  function MenuImage(props) {
    const pic = props.pic;
    const alt = props.alt;

    return (
      <div className='full md:w-2/5 sm:w-full grid justify-items-center'>
        <img className="w-full" src={pic} alt={alt} />
      </div>
    );
  }

  return (
    <div className="mx-6 my-4">
      ※8/1以降、食材・仕入れの値上げにより値上げをしております。ご迷惑をおかけ致しますが、ご来店時・電話にて料金の確認をお願いします（本ページの料金は追って修正予定です）。
      <div className='flex gap-1 justify-center flex-wrap'>
        <MenuImage pic="img/menu/menu2022_1_2.webp" alt="松月メニュー1" />
        <MenuImage pic="img/menu/menu2022_1_3.webp" alt="松月メニュー2" />
        <MenuImage pic="img/menu/menu2022_1_4.webp" alt="松月メニュー3" />
        <MenuImage pic="img/menu/menu2022_1_5.webp" alt="松月メニュー4" />
        <MenuImage pic="img/menu/menu2022_2_1.webp" alt="松月メニュー5" />
        <MenuImage pic="img/menu/menu2022_2_2.webp" alt="松月メニュー6" />
        <MenuImage pic="img/menu/menu2022_2_3.webp" alt="松月メニュー7" />
        <MenuImage pic="img/menu/menu2022_2_4.webp" alt="松月メニュー8" />
        <MenuImage pic="img/menu/menu2022_2_5.webp" alt="松月メニュー9" />
        <MenuImage pic="img/menu/menu2022_3.webp" alt="松月メニュー10" />
      </div>
    </div>
  )
}
