import Image from "next/image";
import skills from "@/data/skills.json";

export default function AboutMe() {
  return (
    <>
      <div
        id="aboutme"
        className="flex flex-col justify-center items-center min-h-[100vh]"
      >
        <h2 className="text-2xl lg:text-5xl font-bold text-center p-8">
          A propos de moi
        </h2>
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <Image
            className="rounded-full shadow-2xl"
            src="/images/aboutme/avatar.jpg"
            width={300}
            height={300}
          />
          <div className="flex flex-col gap-8 p-8 lg:max-w-[30%]">
            <p>
              Passionné par la conception 3D, le graphisme ainsi que l'animation
              depuis des années, j'entreprends d'en faire mon métier grâce à ma
              formation en Bachelor Artiste 3D après deux années dans le monde
              du travail.
            </p>
            <p>
              J’ai très envie de mettre en service mes compétences et ma
              créativité auprès d’une entreprise afin de me développer aussi
              bien professionnellement que personnellement.
            </p>
            <p>
              J’ai également travaillé avec le même désir de création sur
              plusieurs projects comme : l’apprentissage de nouveaux logiciels
              pour devenir le plus polyvalent possible ou encore la création
              d’environnement et personnage en 3D dans le cadre de ma formation
              ainsi que la création de jeux et tout ce qui l’entoure sur mon
              temps libre.
            </p>
            <p>
              Je travaille avec des logiciels 3D: 3dsmax, Maya, Unreal Engine 5,
              Substance Painter, ainsi qu'avec plusieurs autres logiciels de la
              suite Adobe: Photoshop, Illustrator, Indesign, Première Pro, After
              Effect et d'autres logiciels 2D comme: Clip Studio Paint, Krita ou
              Animate.
            </p>
          </div>
        </div>
        <h2 className="text-2xl lg:text-5xl font-bold text-center mb-8">
          Mes expériences
        </h2>
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center">
          <div className="flex flex-wrap max-w-[80%] lg:max-w-[30%] gap-5 justify-center items-center">
            <h2 className="text-2xl lg:text-5xl font-bold text-center mb-8 lg:hidden">
              Mes compétences
            </h2>
            {skills.map((skill) => (
              <>
                <div className="flex flex-col justify-center items-center">
                  <figure>
                    <Image
                      key={skill.id}
                      src={skill.logo}
                      width={100}
                      height={100}
                      alt={skill.name}
                    />
                  </figure>
                  <figcaption>{skill.name}</figcaption>
                </div>
              </>
            ))}
          </div>
          <div className="flex flex-col gap-8 p-8 lg:max-w-[30%]">
            <section>
              <h3 className="text-xl lg:text-2xl font-bold">
                HIGH POLY - CHÂTEAU 3D
              </h3>
              <p>
                Project de classe dont l’objectif était de recréer un château en
                utilisant comme base un château déjà existant tout en utilisant
                diverses techniques apprises pendant les cours comme : les
                alphas, l’écume de l’eau, les PBR, le lightining et bien
                d’autres.
              </p>
            </section>
            <section>
              <h3 className="text-2xl font-bold">
                3D CHARACTER : GAREN DEMACIA VICE
              </h3>
              <p>
                Project réalisé en classe ayant pour but d'étudier la
                retopologie : en modélisant sur 3ds max un personnage à partir
                d'une plane et en quad afin d'apprendre à faire des personnages
                avec des proportions réalistes. Afin de les utiliser après les
                avoir rigger sur d'autres logiciels comme unreal engine 5.
              </p>
            </section>
            <section>
              <h3 className="text-2xl font-bold">GAME DESIGN - ERIKA</h3>
              <p>
                Workshop où nous avons eu comme projet de créer un jeu vidéo de
                A à Z en groupe sur le thème de l’horreur en seulement 5 jours.
                <br />
                J'ai été chargé de designer la carte du jeu pour qu’elle
                fonctionne avec les mécaniques de déplacement de l’antagoniste.
                <br />
                Pour ce faire, j'ai réalisé: 12 assets, 3 salles et le sound
                design.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
