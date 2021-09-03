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
      <div className='flex gap-1 justify-center flex-wrap'>
        <MenuImage pic="img/menu/menu2021_1_2.jpg" alt="メニュー1" />
        <MenuImage pic="img/menu/menu2021_1_3.jpg" alt="メニュー2" />
        <MenuImage pic="img/menu/menu2021_1_4.jpg" alt="メニュー3" />
        <MenuImage pic="img/menu/menu2021_1_5.jpg" alt="メニュー4" />
        <MenuImage pic="img/menu/menu2021_2_1.jpg" alt="メニュー5" />
        <MenuImage pic="img/menu/menu2021_2_2.jpg" alt="メニュー6" />
        <MenuImage pic="img/menu/menu2021_2_3.jpg" alt="メニュー7" />
        <MenuImage pic="img/menu/menu2021_2_4.jpg" alt="メニュー8" />
        <MenuImage pic="img/menu/menu2021_2_5.jpg" alt="メニュー9" />
        <MenuImage pic="img/menu/menu2021_3.jpg" alt="メニュー10" />
      </div>
    </div>
  )
}
