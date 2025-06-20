import ButtonPrimary from "../components/ButtonPrimary";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import ButtonSecondary from "../components/ButtonSecondary";

const Home = () => {
    return (
        <main className ="w-full min-h-screen py-8 px-12">
            <section className="max-w-1/2 mx-auto mb-4">
                <h1>Bienvenue !</h1>
                <p>Ici, on oublie les soirées plates et les groupes WhatsApp qui s’éteignent trop vite.
                Tiny Games, c’est une collection de mini-jeux de société en ligne, pensés pour jouer vite, simple, et 
                entre potes, que vous soyez côte à côte ou à des kilomètres&nbsp;!
                <br/>👉 Crée ta salle, partage le lien, et que la partie commence.</p>
            </section>
            <Carousel>
                <Card path="/images/CardComingSoon.webp"/>
                <Card path="/images/CardComingSoon.webp"/>
                <Card path="/images/CardMonPauvre.webp"/>
                <Card path="/images/CardComingSoon.webp"/>
                <Card path="/images/CardComingSoon.webp"/>
            </Carousel>
            <ButtonPrimary text="Jouer" href="/game-info"/>

            <section className="mt-4" >
                <input type="text" id="roomID" name="roomID" placeholder="Entrez le code" className="border-b-2 border-black/50 mr-4 focus:outline-hidden text-center" />
                <ButtonSecondary text="Rejoindre une game" href="/lobby-creation"/>
            </section>
            <ButtonSecondary text="Voir nos autres jeux" href="/"/>
        </main>
    );

};

export default Home; 