<template>
    <div :style="image">
        <b-navbar toggleable="lg" type="dark" class="bg-custom shadow fixed-top">
            <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

            <b-navbar-brand href="#" class="ml-lg-5">
                <img src="/images/logoIndu.png" width="180" height="48" class="d-inline-block" alt="induLogo" />
            </b-navbar-brand>
        </b-navbar>
        <main id="home" class="w-100 mt-5">
            <!-- BANNER -->
            <div class="d-flex justify-content-center align-self-center">
                <div class="w-75">
                    <div
                        class="row d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row justify-content-center align-items-center my-5">
                        <div
                            class="p-0 col-12 col-sm-10 col-md-5 col-lg-5 h-100 d-flex flex-column align-items-center align-items-sm-center align-items-md-start">

                        </div>
                        <div class="container-fluid">
                            <div class="w-100 p-3">
                                <div class="row bg-dark opacity-custom round">
                                    <div class="col-12 col-lg-6  p-4 tx-size text-white">
                                        
                                        <h2 class="text-center text-md-left text-lg-left text-xl-left ">
                                        Does your company require you to improve your logistics performance, but you can't find enough technical resources in the market to carry this out?
                                        <br>
                                        Is budget an issue, and you need expert talents with convient costs?
                                        </h2>
                                        <p class="pt-3 text-center text-md-left">
                                        A logistics software development company like <b>induSoftware</b> has the experience to
                                        work with you to optimize every process and facilitate the implementation and
                                        integration of custom technologies, no matter what your requirements or
                                        industry.
                                        <br>
                                        <br>
                                        Whatever solutions you need, whether apps or a content management system, we
                                        will help to take the workload off you and your enterprise’s shoulders and
                                        improve efficiency, as well as facilitate optimization of tracking and shipping
                                        of freight.
                                        </p>
                                    </div>
                                    <div class="col-12 col-lg-6 d-flex justify-content-center align-items-center text-white">
                                        <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" method="POST">
                                           <input type="hidden" name="form-name" value="contact" />
                                            <h2 class="text-center text-md-left text-lg-left text-xl-left">
                                                <span class="subtitle-bar">Contact us for a personalized proposal</span>
                                            </h2>
                                           <label for="" class="mt-3">Your Name</label>
                                           <input type="text" class="form-control mb-3" placeholder="Name" aria-label="Name" name="name">
                                           <label for="">Your Email</label>
                                           <input type="email" class="form-control mb-3" placeholder="Email" aria-label="Email" name="email">
                                           <label for="">Leave a Message</label>
                                           <textarea class="form-control mb-3" rows="3" placeholder="Enter your message" style="resize:none" name="message"></textarea>
                                           
                                           <button type="submit" class="btn btn-outline-light btn-lg w-100  mb-3">Send</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <!-- FOOTER -->
        <img class="w-100" src=/images/curve-footer.svg alt />
        <footer id='contacto' class="bg-darker px-2">
            <div class="d-flex justify-content-center px-4 mx-lg-5 px-lg-5 mx-3">
                <div class="w-100 row">
                    <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                        <h5 class="text-white">
                            <span class="subtitle-bar pb-1">Our Offices</span>
                        </h5>
                        <div class="py-4">
                            <span class="text-white" style="font-size: 0.9em;">
                                CABA, Argentina (HQ)</span>
                            <br />
                            <span class="text-white" style="font-size: 0.9em;">Posadas, Misiones (DC)</span><br />
                            <span class="text-white" style="font-size: 0.9em;">San Salvador de Jujuy, Argentina
                                (DC)</span><br />
                            <span class="text-white" style="font-size: 0.9em;">Washington DC, USA (CO)</span>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                        <h5 class="text-white">
                            <span class="subtitle-bar pb-1">Contact</span>
                        </h5>
                        <div class="py-4">
                            <div>
                                <a
                                    href="https://api.whatsapp.com/send?phone=541140263809&text=Hi%20I%20want%20to%20contact%20you">
                                    <img src="" alt="" /><span class="text-white" style="font-size: 0.9em;">Buenos Aires
                                        HQ: +54 11 4026 3809</span>
                                </a>
                                <a
                                    href="https://api.whatsapp.com/send?phone=541140263809&text=Hi%20I%20want%20to%20contact%20you">
                                    <img class="img img-fluid" src="/images/whatsapp.svg" alt="whatsapp indusoftware"
                                        style="width: 18px;" />
                                </a>
                            </div>
                            <div>
                                <img src="" alt="" /><span class="text-white" style="font-size: 0.9em;">Washington
                                    Office: +1 703 953 4286</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                        <h5 class="text-white">
                            <span class="subtitle-bar pb-1">Follow Us</span>
                        </h5>
                        <div class="py-4">
                            <a href="https://www.instagram.com/indusoftwareok/" target="_blank"><img
                                    class="img img-fluid" src="/images/instagram.svg" alt="instagram indusoftware"
                                    style="width: 25px;" /></a>
                            <a href="https://www.linkedin.com/company/indusoftware/" target="_blank"><img
                                    class="img img-fluid" src="/images/linkedin.svg" alt="linkedin indusoftware"
                                    style="width: 25px;" /></a>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 text-center text-lg-left text-xl-left">
                        <img class="py-4 img-fluid" src="/images/logoIndu.png" alt="logo indusoftware" />
                    </div>
                </div>
            </div>
            <div class="bg-foot2 text-center text-white p-3" style="font-size: small;">
                &copy; 2014-2022 InduSoftware | All rights reserved.
            </div>
        </footer>
        <!-- FOOTER -->

    </div>
</template>

<script>
    import bikeImg from "assets/logistica-scaled.jpeg";
    export default {
        data() {
            return {
            image: { backgroundImage: `url(${bikeImg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", position:"relative"},
            };
        }
    };
</script>
