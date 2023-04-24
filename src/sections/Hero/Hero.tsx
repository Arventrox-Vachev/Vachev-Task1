import * as S from "./elements";
import { heroSectionContent } from "data";

export const Hero = () => {
  return (
    <S.SectionContainer>
      <div>
        <h1>{heroSectionContent.title}</h1>
        <p>{heroSectionContent.subtitle}</p>
        <div>
          <h3>{heroSectionContent.formText.title}</h3>
          <div>
            <input placeholder={heroSectionContent.formText.emailHolder}></input>
            <button>{heroSectionContent.formText.buttonText}</button>
          </div>

          {heroSectionContent.formText.policiesText.map((policy, index) => (
            <div key={index}>
              <input type='checkbox'></input>
              <p>{policy}</p>
            </div>
          ))}
        </div>
      </div>
      <S.Image
        src={heroSectionContent.heroImage}
        alt={heroSectionContent.heroImage.alt}
        width={heroSectionContent.heroImage.width}
        height={heroSectionContent.heroImage.height}
      ></S.Image>
    </S.SectionContainer>
  );
};
