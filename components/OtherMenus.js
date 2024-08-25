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
        <MenuImage pic="img/menu/menu2024_1_2.webp" alt="松月メニュー1" />
        <MenuImage pic="img/menu/menu2024_1_3.webp" alt="松月メニュー2" />
        <MenuImage pic="img/menu/menu2024_1_4.webp" alt="松月メニュー3" />
        <MenuImage pic="img/menu/menu2024_1_5.webp" alt="松月メニュー4" />
        <MenuImage pic="img/menu/menu2023_2_1.webp" alt="松月メニュー5" />
        <MenuImage pic="img/menu/menu2023_2_2.webp" alt="松月メニュー6" />
        <MenuImage pic="img/menu/menu2023_2_3.webp" alt="松月メニュー7" />
        <MenuImage pic="img/menu/menu2024_2_4.webp" alt="松月メニュー8" />
        <MenuImage pic="img/menu/menu2023_2_5.webp" alt="松月メニュー9" />
      </div>
    </div>
  )
}
