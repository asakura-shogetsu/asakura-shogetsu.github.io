export default function Footer(props) {
  return (
    <footer className="flex items-center justify-center w-full h-16 border-t">
      <p>
        © { props.restaurantName }. All Rights Reserved.
      </p>
    </footer>
  )
}
