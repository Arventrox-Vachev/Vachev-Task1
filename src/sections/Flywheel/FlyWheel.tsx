import { flywheelContent } from "data";

export const FlyWheel = () => {
  return (
    <>
      <h1>{flywheelContent.title}</h1>
      <div>
        {flywheelContent.description.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
      </div>
    </>
  );
};
