import Image from "next/image";

export default function WhoAmI() {
  return (
    <div id="home" className="hero min-h-[100vh] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          src="/images/flunflun.jpg"
          className="rounded-full shadow-2xl"
          width={500}
          height={500}
        />
        <div className="text_container max-w-[80%] lg:max-w-[50%]">
          <h1 className="lg:text-5xl text-2xl font-bold">Qui suis-je ?</h1>
          <p className="py-6">
            Je m'appelle Logan Depelsemacker, 20 ans et je suis passionné par la
            création sous toutes ses formes depuis mon plus jeune âge, j’ai donc
            naturellement voulu faire de la 3D mon métier afin de rendre ma
            créativité la plus utile possible et continuer de la développer
            aussi bien pour le professionnel que pour moi, voila pourquoi je
            suis actuellement en première année de Bachelor Artiste 3D !
          </p>
          <p>Descendez pour découvrir mes projets et mes compétences !</p>
        </div>
      </div>
    </div>
  );
}
