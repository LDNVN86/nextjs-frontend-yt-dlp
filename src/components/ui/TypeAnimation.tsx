import { TypeAnimation } from "react-type-animation";

const TitleDynamic = () => {
  return (
    <TypeAnimation
      className="font-mono"
      preRenderFirstString={true}
      sequence={[
        "Download Youtube/Short Media",
        1000,
        "Download Tik Tok Media",
        1000,
        "Download Facebook/Reals Media",
        1000,
        "Download Instagram Media",
        1000,
        () => {
          console.log("Sequence completed");
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: "2em", display: "inline-block" }}
    />
  );
};

export default TitleDynamic;
