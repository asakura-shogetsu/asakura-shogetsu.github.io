export default function RestaurantViews() {
  function Card(props) {
    const pic = props.pic;
    const title = props.title;
    const price = props.price;
    const description = props.description;

    return (
      <div className='full 2xl:w-1/3 lg:w-1/2 grid justify-items-center'>
        <div className="max-w-lg overflow-hidden border-solid border-2 border-white">
          <img className="w-full" src={pic} alt={title} />
        </div>
      </div>
    );
  }

  return (
    <div className="py-2">
      <div className='flex gap-y-8 justify-center flex-wrap p-4'>
        <Card
          pic="img/restaurant/view1.jpg" title="店舗写真1" />
        <Card
          pic="img/restaurant/view2.jpg" title="店舗写真2" />
        <Card
          pic="img/restaurant/view3.jpg" title="店舗写真3" />
        <Card
          pic="img/restaurant/view4.jpg" title="店舗写真4" />
        <Card
          pic="img/restaurant/view5.jpg" title="店舗写真5" />
        <Card
          pic="img/restaurant/view6.jpg" title="店舗写真6" />
      </div>
    </div>
  )
}
