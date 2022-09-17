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
                            <li><a href="/MarketPlace">MarketPlace</a></li>
                            <li><a href="/About">À propos de nous</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="">
                        <h6 class="footer-heading text-uppercase text-white">Help</h6>
                        <ul class="list-unstyled footer-link mt-4">
                            <li><a href="/Register">S'inscrire</a></li>
                            <li><a href="/Register">S'identifier</a></li>
                            <li><a href="/Conditions">Termes et Conditions.</a></li>
                            <li><a href="/policy">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="">
                        <h6 class="footer-heading text-uppercase text-white">Contactez Nous</h6>
                        <p class="contact-info mt-4">Yaoundé: +23767585149</p>
                        <p class="contact-info"> Douala : +237682774250</p>
                        <p class="contact-info">Email : informatique@dga-express.com</p>
                        <div class="mt-5">
                            <ul class="list-inline">
                                <li class="list-inline-item"><a href="#"><i class="fab facebook footer-social-icon fa-facebook-f"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fab twitter footer-social-icon fa-twitter"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fab google footer-social-icon fa-google"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fab apple footer-social-icon fa-apple"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="text-center mt-5">
            <p class="footer-alt mb-0 f-14">2022 © Developed By SHINTHEO OÜ</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: "footerVue"

}
</script>

<style>
  .bg-footer {
    background-color: #33383c;
    padding: 50px 0 30px;
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
    background-color: #424041;
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
    left: 0;
    bottom: 0;
    display: block;
    border-bottom: 1px solid #1bbc9b;
}

</style>