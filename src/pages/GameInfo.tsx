import Card from "../components/Card";
import ButtonPrimary from "../components/ButtonPrimary";

const GameInfo = () => {
    return (
        <main className ="w-full min-h-screen py-8 px-20">
            <section>
                <h1 className="mb-4">Mon pauvre</h1>
                <h2>🎯 But du jeu</h2>
                <p className="my-4">Être le premier à ne plus avoir de cartes pour devenir "Le Riche" !
                    <br/>Le dernier joueur à finir devient "Le Pauvre" (et il va le sentir passer à la manche suivante... 😈).</p>
            </section>

            <Card path="/images/CardMonPauvre.webp"/>
            <ButtonPrimary text="Jouer" href="/"/>

            <h1 className="mt-4">Les règles du jeu</h1>
            <section className="mt-4 text-left max-w-1/2 mx-auto">
                <h2>Mon pauvre (alias Président)</h2>
                <p>Joueurs : 4 à 7 <br/> Objectif : Se débarrasser de toutes ses cartes le plus rapidement possible.</p>
                <h2>🧱 Mise en place</h2>
                <ul className="list-disc">
                    <li>Le jeu utilise un jeu de 52 cartes.</li>
                    <li>Tous les joueurs reçoivent un nombre équitable de cartes 
                        (certaines versions retirent les jokers ou certaines cartes pour équilibrer).</li>
                    <li>Le joueur avec le 3 de trèfle commence (ou le plus petit 3 s’il n’est pas là).</li>  
                </ul>
                <h2>🔁 Déroulement d’un tour</h2>
                <ol className="list-decimal">
                    <li>Le joueur actif pose une ou plusieurs cartes de même valeur (ex : deux 5).</li>
                    <li>Le joueur suivant doit poser le même nombre de cartes, mais avec une valeur supérieure.</li>
                    <li>Si un joueur ne peut ou ne veut pas jouer, il passe.</li>
                    <li>Le pli se termine quand tout le monde passe. 
                        <br/>Le dernier à avoir posé recommence un nouveau pli avec la carte de son choix.</li>  
                    <li>On continue jusqu’à ce qu’un joueur n’ait plus de cartes → il est classé.</li>
                </ol>
                <h2>🥇 Classement et rôles</h2>
                <p>À la fin de la manche :</p>
                <ol className="list-decimal">
                    <li>Le premier est Le Riche 😎</li>
                    <li>Le deuxième est Le Vice-Riche</li>
                    <li>Le dernier est Le Pauvre 🫣</li>
                    <li>Avant-dernier : Chômeur (optionnel selon le nombre de joueurs)</li>  
                </ol>
                <p>Au début de la manche suivante :</p>
                <ul className="list-disc">
                    <li>Le Pauvre donne ses 2 meilleures cartes au Rich, qui lui rend 2 cartes pourries.</li>
                    <li>Le Chômeur donne 1 bonne carte au Vice-Riche, qui fait pareil.</li>
                </ul>
            </section>
        </main>
    );

};

export default GameInfo; 