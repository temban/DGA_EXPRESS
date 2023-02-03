<template>
    <footer class="section bg-footer">
        <div class="container">
            <div class="row">
                

                <div class="col-lg-4">
                    <div class="">
                        <h6 class="footer-heading text-uppercase text-white">Ressources</h6>
                        <ul class="list-unstyled footer-link mt-4">
                            <li><a href="/">Accueil</a></li>
                            <li><a href="/Announcements">Voyages</a></li>
                            <li><a href="/MarketPlace">Espace e-commerce</a></li>
                            <li><a href="/About">À propos de nous</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="">
                        <h6 class="footer-heading text-uppercase text-white">Aide</h6>
                        <ul class="list-unstyled footer-link mt-4">
                            <li><a href="/Register">S'inscrire</a></li>
                            <li><a href="/Register">S'identifier</a></li>
                            <li><a href="/Conditions">Termes et Conditions</a></li>
                            <li><a href="/policy">Politique de confidentialité</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="">
                        <h6 class="footer-heading text-uppercase text-white">Contactez-Nous</h6>
                        <p class="contact-info mt-4">Yaoundé : +237 67 58 51 499</p>
                        <p class="contact-info"> Douala : +237 67 87 86 731</p>
                        <p class="contact-info">Namur : +32 465 853 983</p>
                        <p class="contact-info">Bruxelle : +32 465 860 367</p>
                        <p class="contact-info">E-mail : contact@dga-express.com</p>
                        <div class="mt-5">
                            <ul class="list-inline">
                                <li class="list-inline-item"><a href="https://www.facebook.com/DGAExpress50" target="_blank"><i class="fab facebook footer-social-icon fa-facebook-f"></i></a></li>
                                <li class="list-inline-item"><a href="#" target="_blank"><i class="fab twitter footer-social-icon fa-twitter"></i></a></li>
                                <li class="list-inline-item"><a href="https://www.instagram.com/dgaexpress/" target="_blank"><i class="fab apple footer-social-icon fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="text-center mt-5">
            <p class="footer-alt mb-0 f-14">2022 © Developed By <a href="https://shintheo.com" target="_blank">SHINTHEO OÜ</a></p>
        </div>
    </footer>
</template>

<script>
export default {
    name: "footerVue"

}
</script>

<style >
  .bg-footer {
    background-color: #33383c;
    padding: 50px 0 30px;
    position: relative;
    margin-bottom: 0px;
}
.footer-heading {
    letter-spacing: 2px;
}

.footer-link a {
    color: #acacac;
    line-height: 40px;
    font-size: 14px;
    transition: all 0.5s;
}

.footer-link a:hover {
    color: #1bbc9b;
}

.contact-info {
    color: #acacac;
    font-size: 14px;
}

.footer-social-icon {
    font-size: 15px;
    height: 34px;
    width: 34px;
    line-height: 34px;
    border-radius: 3px;
    text-align: center;
    display: inline-block;
}

.facebook {
    background-color: #4e71a8;
    color: #ffffff;
}

.twitter {
    background-color: #55acee;
    color: #ffffff;
}

.google {
    background-color: #d6492f;
    color: #ffffff;
}

.apple {
    background: linear-gradient(217deg, rgb(193, 32, 246), rgba(255,0,0,0) 70.71%),
    linear-gradient(217deg, rgba(210, 63, 255, 0.8), rgba(255,0,0,0) 70.71%),
            linear-gradient(127deg, rgb(251, 31, 67), rgba(0,255,0,0) 70.71%),
            linear-gradient(336deg, rgb(255, 204, 0), rgba(0,0,255,0) 70.71%);
    color: #ffffff;
}

.footer-alt {
    color: #acacac;
}

.footer-heading {
    position: relative;
    padding-bottom: 12px;
}

.footer-heading:after {
    content: '';
    width: 25px;
    border-bottom: 1px solid #FFF;
    position: absolute;
    left: 160px;
    bottom: 0;
    display: block;
    border-bottom: 1px solid #1bbc9b;
}

</style>