<template>
    <div>
        <lognav />
        <div class="about">
            <div class="head">
                <span>À propos de nous</span>
            </div>
            <div class="body">
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp; DGA-EXPRESS est une entreprise individuelle ( établissement) à personne
                    physique ,donc le siège social est situé au cameroun dans la ville de douala plus précisement à
                    bonamoussadi au lieu dit fin goudron afrique du sud face ecole primaire Joss . elle est spécialisé
                    dans la mise en relation entre particuliers pour un envoi 3 fois plus rapide, fiable et moins couteux
                    de leurs colis par fret aerien de partout dans le monde et dispose egalement d’une plate forme
                    E-commerce pour faciliter les achats de sa clientèle à l’internationnal à travers son site internet
                    et son application mobile.
                </p>
            </div>

            <div class="head" style="margin-top: 20px;">
                <h4>COMMENT SA MARCHE </h4>
                <h5>- Créer gratuitement votre compte</h5>
            </div>
            <div class="body">
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp; Inserer le sigle www.dga-express.com dans votre moteur de recherche ,
                    Utiliser votre adress mail pour creer votre compte ou telecharger l’application DGA-EXPRESS sur play
                    store ou apple store et creer votre profil à l’aide de votre adress mail . valider la creation de
                    votre compte en confirmant votre adress via un mail de confirmation qui vous sera envoyer
                </p>
            </div>
            <div class="head" style="margin-top: 30px;">
                <h5>- Rechercher une annonce </h5>
            </div>
            <div class="body">
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp; Rechercher l’annonce qui vous convient en filtrant les annonces present sur
                    la page d’acceuil.
                </p>
            </div>
            <div class="head" style="margin-top: 30px;">
                <h5>- COMPLETER LE FORMULAIRE DE RESERVATION </h5>
            </div>
            <div class="body">
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp; Une fois votre voyage trouver , selectionner et remplisser les informations
                    démandées.
                </p>
            </div>
            <div class="head" style="margin-top: 30px;">
                <h5>- valider votre reservation </h5>
            </div>
            <div class="body">
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp; Confirmer votre reservation via un paiement par carte bancaire, playpal ,
                    MTN et Orange money ,vous recevrez par la suite le contact du voyageur par mail.
                </p>
            </div>
            <div class="head" style="margin-top: 30px;">
                <h5>- Confirmer la reception de votre colis </h5>
            </div>
            <div class="body">
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp; validez la bonne reception de votre colis via votre application mobile ou
                    site internet ou encore au point relais le plus proche . Le voyageur pourra ainsi recevoir sa
                    commission.
                </p>
            </div>
            <div class="head" style="margin-top: 30px;">
                <h5>- Laissez une evaluation </h5>
            </div>
            <div class="body">
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp; Après recception de votre colis vous pouvez partager votre expérience en
                    laissant une évaluation qui nous permettra d’ameliorer la quaité de notre service.
                </p>
            </div>
            <div class="head" style="margin-top: 30px; ">
                <h2>
                    Contact
                </h2>
                &nbsp;&nbsp;&nbsp;- Douala : +237 678 786 731
                &nbsp;&nbsp;&nbsp;- Yaoundé : +237 675 851 499
                &nbsp;&nbsp;&nbsp;- Bruxelle: +324 658 60367
                &nbsp;&nbsp;&nbsp;- Namur : +32 465 853983    
                &nbsp;&nbsp;&nbsp;- WhatsApp : Ces contacts sont tous des numéros Whatsapp

            </div>
        </div>
        <footerVue />
    </div>


</template>

<script>
import lognav from '../components/lognav.vue'
import footerVue from "@/components/footer.vue"

export default {
    name: "Home",
    components: {
        lognav,
        footerVue
    },
}
</script>

<style lang="scss">
body {
    background-color: var(--white);
    // background: url("../assets/img/logo.png");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    backface-visibility: hidden;
    display: grid;
    height: 100vh;

    background {
        opacity: 0;
    }
}

.about {
    min-height: 300px;
    width: 100%;
    margin-bottom: 20px;

    .head {
        width: 100%;
        padding: 0 0 10px 100px;
        font-size: 21px;
        font-weight: bold;
        letter-spacing: 1px;
    }

    .body {
        padding: 5px 100px;

        p {
            text-align: justify;
        }
    }
}
</style>