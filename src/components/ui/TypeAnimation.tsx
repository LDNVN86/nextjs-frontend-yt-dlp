import { TypeAnimation } from "react-type-animation";

const TitleDynamic = () => {
  return (
    <TypeAnimation
      className="font-mono"
      preRenderFirstString={true}
      sequence={[
        "Download Media Youtube/Short",
        1000,
        "Download Media Tik Tok",
        1000,
        "Download Media Facebook/Reals",
        1000,
        "Download Media Instagram",
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
