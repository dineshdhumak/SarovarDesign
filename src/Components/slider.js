import SimpleImageSlider from "react-simple-image-slider";
export default function Sl1() {
  const images = [
    { url: "./../Assets/Images/Hotel1.jpg" },
    { url: "./../Assets/Images/Hotel2.jpg" },
    { url: "./../Assets/Images/Hotel3.jpg" },
    { url: "./../Assets/Images/Hotel4.jpg" },
    {
      url:
        "./../Assets/Images/Hotel5.jpg"
    }
  ];

  return (
    <div className="slider">
      <SimpleImageSlider
            textAlign="center"
        showNavs="true"
        width={456}
        height={304}
        images={images}
      />
    </div>
  );
}