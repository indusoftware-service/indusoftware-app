<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="bg-custom shadow fixed-top">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

      <b-navbar-brand href="#" class="ml-lg-5">
        <img
          src="/images/logoIndu.png"
          width="180"
          height="48"
          class="d-inline-block"
          alt="induLogo"
        />
      </b-navbar-brand>

      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav class="ml-lg-auto mr-lg-5">
          <b-nav-item href="#home" class="mt-2">{{
            $t('navbar_item_1')
          }}</b-nav-item>
          <b-nav-item href="#services" class="mt-2">{{
            $t('navbar_item_2')
          }}</b-nav-item>
          <b-nav-item href="#clients" class="mt-2">{{
            $t('navbar_item_3')
          }}</b-nav-item>
          <b-nav-item href="#contacto" class="mt-2">{{
            $t('navbar_item_4')
          }}</b-nav-item>

          
          <b-nav-item href="#">
            <div
              id="btn-esp"
              class="btn-lang d-flex justify-content-center align-items-center"
              style="cursor: pointer;"
              @click="switchLanguage('es')"
            >
              ESP
            </div>
          </b-nav-item>
          <b-nav-item href="#">
            <div
              id="btn-eng"
              class="btn-lang d-flex justify-content-center align-items-center"
              style="cursor: pointer;"
              @click="switchLanguage('en')"
            >
              ENG
            </div>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    
    <main id="home" class="w-100 mt-5">
      <!-- BANNER -->
      <div class="d-flex justify-content-center align-self-center bg-darker">
        <div class="w-75">
          <div
            class="row d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row justify-content-center align-items-center my-5"
          >
            <img
              class="col-10 col-sm-10 col-md-7 col-lg-7"
              src="/images/banner-img.svg"
              alt="algo"
            />
            <div
              class="p-0 col-12 col-sm-10 col-md-5 col-lg-5 h-100 d-flex flex-column align-items-center align-items-sm-center align-items-md-start"
            >
              <h3 class="text-white">
                <span class="subtitle-bar">{{ $t('about') }}</span>
              </h3>
              <p class="text-white pt-1 text-center text-md-left">
                {{ $t('about_text_1') }}
              </p>
              <!--<p class="text-white pt-1 text-center text-md-left">
                {{ $t('about_text_2') }}
              </p>-->
              <p class="text-white pt-1  text-center text-md-left">
                {{ $t('about_text_3') }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- BANNER -->
      <div class="w-100 d-flex justify-content-center bg-darker pt-5">
        <div class="row d-flex w-75">
          <div
            class="pl-0 col-md-4 col-lg-4 d-flex d-md-block flex-column align-items-center"
          >
            <img
              class="icon-size"
              src="/images/our-mission.svg"
              alt="mission induSoftware"
            />
              <h3 class="text-white mt-4">
                <span class="subtitle-bar">{{ $t('mission') }}</span>
              </h3>
              <p
                class="text-white pt-3 text-center text-md-left"
              >
                {{ $t('mission_text_1') }}
              </p>
              <p
                class="text-white pt-1 text-center text-md-left"
              >
                {{ $t('mission_text_2') }}
              </p>
          </div>
          <div
            class="pl-0 col-12 col-sm-10 col-md-4 col-lg-4 d-flex d-md-block flex-column align-items-center"
          >
            <img
              class="icon-size mb-4"
              src="/images/tech.svg"
              alt="tech induSoftware"
            />
            <h3 class="text-white">
              <span class="subtitle-bar">{{ $t('tech') }}</span>
            </h3>
            <p
              class="text-white pt-3 text-center text-md-left"
            >
              {{ $t('tech_text_1') }}
            </p>
            <p
              class="text-white pt-1 text-center text-md-left"
            >
              {{ $t('tech_text_2') }}
            </p>
          </div>
          <div
            class="pl-0 col-12 col-sm-10 col-md-4 col-lg-4 d-flex d-md-block flex-column align-items-center"
          >
            <img
              class="icon-size mb-4"
              src="/images/why-indu.svg"
              alt="why induSoftware"
            />
            <h3 class="text-white">
              <span class="subtitle-bar">{{ $t('why') }}</span>
            </h3>
            <p
              class="text-white content-font-size pt-3 text-center text-md-left"
            >
              {{ $t('why_text_1') }}
            </p>
            <p
              class="text-white content-font-size pt-1 text-center text-md-left"
            >
              {{ $t('why_text_2') }}
            </p>
          </div>
        </div>
      </div>
      <img id="services" class="w-100" src=/images/curve-banner.svg alt />
    </main>
    
    <div class="container-fluid d-flex justify-content-center">
      <div
        class="w-75 d-flex flex-column align-items-center align-items-md-start"
      >
        <h3>{{ $t('service') }}</h3>
        <div class="underscore"></div>
        <div class="container-fluid">
          <div class="row">
            <div
              class="pl-0 col-md-6 order-2 order-md-1 mt-4 d-flex flex-column align-items-center align-items-md-start"
            >
              <h5>{{ $t('web_dev') }}</h5>
              <div class="underscore my-4"></div>
              <p class="text-center text-md-left">
                {{ $t('web_dev_text') }}
              </p>
              <img
                class="align-self-center mt-4"
                src="/images/web-tec-logos.png"
                width="20%"
                alt="logos web"
              />
            </div>
            <div
              class="pl-0 col-md-6 order-1 d-flex justify-content-center align-items-center"
            >
              <div class="image-container">
                <img class="w-75 h-75" src="/images/web.png" alt="web Image" />
              </div>
            </div>
          </div>
          <div class="row my-5">
            <div
              class="col-md-6 order-1 d-flex justify-content-center align-items-center"
            >
              <div class="image-container">
                <img
                  class="w-75 h-75"
                  src="/images/mobile.png"
                  alt="mobile image"
                />
              </div>
            </div>
            <div
              class="pl-0 col-md-6 order-1 order-md-2 mt-4 d-flex flex-column align-items-center align-items-md-start"
            >
              <h5>{{ $t('mobile') }}</h5>
              <div class="underscore my-4"></div>
              <p class="text-center text-md-left">
                {{ $t('mobile_text') }}
              </p>
              <img
                class="align-self-center mt-4"
                src="/images/mobile-tec-logos.png"
                width="30%"
                alt="mobile logos"
              />
            </div>
          </div>
          <div class="row my-5">
            <div
              class="pl-0 col-md-6 order-2 order-md-1 mt-4 d-flex flex-column align-items-center align-items-md-start"
            >
              <h5>{{ $t('other_services') }}</h5>
              <div class="underscore my-4"></div>
              <p class="text-center text-md-left">
                {{ $t('other_services_text') }}
              </p>
              <img
                class="align-self-center mt-4"
                src="/images/other-services-logos.png"
                width="25%"
                alt="services logo"
              />
            </div>
            <div
              class="col-md-6 order-1 d-flex justify-content-center align-items-center"
            >
              <div
                class="image-container d-flex justify-content-center align-items-center"
              >
                <img
                  class="w-100 h-100"
                  src="/images/other-services.png"
                  alt="other services image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="clients" class="w-100 container-fluid d-flex justify-content-center">
      <div
        class="w-75 d-flex flex-column align-items-center align-items-md-start"
      >
        <div class="w-100">
          <h3 class="text-center text-md-left text-lg-left text-xl-left">
            {{$t('clients')}}
          </h3>
        </div>
        <div class="underscore"></div>
        <div
          class="d-flex px-0 px-md-4 px-lg-4 w-100 row justify-content-between justify-content-md-center justify-content-lg-center justify-content-xl-center"
        >
          <a
            class="col-5 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-4 px-0 px-sm-1 px-md-2 px-lg-4 px-xl-4"
            target="_blank"
            href="https://www.heinlein.com.ar/"
            ><div class="client1"></div
          ></a>
          <a
            class="col-5 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-4 px-0 px-sm-1 px-md-2 px-lg-4 px-xl-4"
            target="_blank"
            href="https://www.evergreen-marine.com/"
            ><div class="client6"></div
          ></a>

          <a
            class="col-5 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-4 px-0 px-sm-1 px-md-2 px-lg-4 px-xl-4"
            target="_blank"
            href="http://www.calicosa.com.ar/"
            ><div class="client3"></div
          ></a>
          <a
            class="col-5 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-4 px-0 px-sm-1 px-md-2 px-lg-4 px-xl-4"
            target="_blank"
            href="https://www.vi-datec.com/"
            ><div class="client2"></div
          ></a>
          <a
            class="col-5 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-4 px-0 px-sm-1 px-md-2 px-lg-4 px-xl-4"
            target="_blank"
            href="http://bp-4.com/"
            ><div class="client4"></div
          ></a>
          <a
            class="col-5 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-4 px-0 px-sm-1 px-md-2 px-lg-4 px-xl-4"
            target="_blank"
            href=""
            ><div class="client5"></div
          ></a>

          <a
            class="col-5 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-4 px-0 px-sm-1 px-md-2 px-lg-4 px-xl-4"
            target="_blank"
            href="http://www.crea.org.ar/"
            ><div class="client7"></div
          ></a>
          
        </div>
      </div>
    </div>
    
        <hr class="mx-auto" style="width:50%; height:1px; background-color:#C6D936; margin-bottom:60px">    

    <div class="container-fluid d-flex flex-wrap justify-content-around mt-4">
         
          <div class="align-self-center ml-0 mr-0 ml-sm-4 mr-sm-4">
            <!-- CLUTCH -->
            <div>
                <div class="clutch-widget" data-nofollow="true" data-url="https://widget.clutch.co" data-widget-type="7" data-height="60" data-expandifr="true" data-clutchcompany-id="1257831"></div>
            </div>
          </div>
          <div class="ml-0 mr-0 ml-sm-4 mr-sm-4" >
            <form
                  name="contact_form"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  method="POST"
                  acction="/success"
                  @submit.prevent="onSubmit"
                  class="requires-validation"
                  novalidate
                >
                  <input type="hidden" name="form-name" value="contact_form" />

                  <h4 class="text-center text-md-left text-lg-left text-xl-left">
                    <span class="subtitle-bar">{{ $t('form_title') }}</span>
                  </h4>
                  <!--<div class="w-100">
                    <h3 class="text-center text-md-left text-lg-left text-xl-left">
                      {{ $t('form_title') }}
                    </h3>
                  </div>
                  <div class="underscore"></div>-->
                  <div>
                    <label for="" class="mt-3">{{ $t('form_name') }}</label>
                    <input
                      type="text"
                      class="form-control mb-2"
                      placeholder=""
                      aria-label="Name"
                      name="name"
                      required
                    />
                    <div class="invalid-feedback">
                      {{ $t('form_name_error') }}
                    </div>
                  </div>
                  <div>
                    <label for="">{{ $t('form_email') }}</label>
                    <input
                      type="email"
                      class="form-control mb-2"
                      placeholder=""
                      aria-label="Email"
                      name="email"
                      required
                    />
                    <div class="invalid-feedback">
                      {{ $t('form_email_error') }}
                    </div>
                  </div>
                  <div>
                    <label for="">{{ $t('form_message') }}</label>
                    <textarea
                      class="form-control mb-2"
                      rows="3"
                      placeholder=""
                      style="resize: none"
                      name="message"
                      required
                    ></textarea>
                    <div class="invalid-feedback mb-3">
                      {{ $t('form_message_error') }}
                    </div>
                  </div>
                  <button
                    type="submit"
                    class="btn btn-outline-light btn-lg btn-dark w-100 mb-3"
                  >
                    {{ $t('form_button') }}
                  </button>
                  <p style="border-style:dotted; border-color:#28a745" align="center" v-if="successMessage">{{ successMessage }}</p>
              </form>
          </div> 

    </div>
    <!-- FOOTER -->
    <img class="w-100" src=/images/curve-footer.svg alt />
    <footer id='contacto' class="bg-darker px-2">
      <div class="d-flex justify-content-center px-4 mx-lg-5 px-lg-5 mx-3">
        <div class="w-100 row">
          <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <h5 class="text-white">
              <span class="subtitle-bar pb-1">{{ $t('office') }}</span>
            </h5>
            <div class="py-4">
              <span class="text-white" style="font-size: 0.9em;">
                CABA, Argentina (HQ)</span>
              <br />
              <span class="text-white" style="font-size: 0.9em;"
                >Posadas, Argentina (DC)</span
              ><br />
              <span class="text-white" style="font-size: 0.9em;"
                >San Salvador de Jujuy, Argentina (DC)</span
              ><br />
              <span class="text-white" style="font-size: 0.9em;"
                >Washington DC, USA (CR)</span><br/>
              <span class="text-white" style="font-size: 0.9em;"
                >Los Ángeles CA, USA (CR)</span>  
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <h5 class="text-white">
              <span class="subtitle-bar pb-1">{{ $t('contact') }}</span>
            </h5>
            <div class="py-4">
              <div>
                <a
                  href="https://api.whatsapp.com/send?phone=541140263809&text=Hi%20I%20want%20to%20contact%20you"
                >
                    <div class="d-flex flex-column flex-md-column flex-lg-row flex-xl-row ">
                        <div>
                        <span
                            class="text-white"
                            style="font-size: 0.9em"
                            >Buenos Aires HQ:</span
                        >
                        </div>
                        <div>
                            <span
                            class="text-white pl-1"
                            style="font-size: 0.9em"
                            > +54 11 4026 3809
                            </span >
                            <img
                            class="img img-fluid"
                            src="/images/whatsapp.svg"
                            alt="whatsapp indusoftware"
                            style="width: 18px"
                        />
                        </div>
                    </div>
                </a>
              </div>
              <div>
                <a
                  href="https://api.whatsapp.com/send?phone=17035894236&text=Hi%20I%20want%20to%20contact%20you"
                >
                    <div class="d-flex flex-column flex-md-column flex-lg-row flex-xl-row ">
                        <div>
                        <span class="text-white" style="font-size: 0.9em">
                            Washington Office: 
                        </span >
                        </div>
                        <div>
                            <span class="pl-1 text-white" style="font-size: 0.9em">
                                +1 703 589 4236
                            </span>
                            <img
                                class="img img-fluid"
                                src="/images/whatsapp.svg"
                                alt="whatsapp indusoftware"
                                style="width: 18px"
                            />
                        </div>
                    </div>
                </a>
              </div>
              <div>
                <img src="" alt="" /><span
                  class="text-white"
                  style="font-size: 0.9em;"
                  ><a href="mailto:contacto@induSoftware.com.ar" class="text-white">contacto@induSoftware.com.ar</a></span
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <h5 class="text-white">
              <span class="subtitle-bar pb-1">{{ $t('follow') }}</span>
            </h5>
            <div class="py-4">
              <a
                href="https://www.instagram.com/indusoftwareok/"
                target="_blank"
                ><img
                  class="img img-fluid"
                  src="/images/instagram.svg"
                  alt="instagram indusoftware"
                  style="width: 25px;"
              /></a>
              <a
                href="https://www.linkedin.com/company/indusoftware/"
                target="_blank"
                ><img
                  class="img img-fluid"
                  src="/images/linkedin.svg"
                  alt="linkedin indusoftware"
                  style="width: 25px;"
              /></a>
            </div>
          </div>
          <div
            class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 text-center text-lg-left text-xl-left"
          >
            <img
              class="py-4 img-fluid"
              src="/images/logoIndu.png"
              alt="logo indusoftware"
            />
          </div>
        </div>
      </div>
      <div
        class="bg-foot2 text-center text-white p-3"
        style="font-size: small;"
      >
        &copy; 2014-2022 InduSoftware | All rights reserved.
      </div>
    </footer>
    <!-- FOOTER -->
    <a href="https://api.whatsapp.com/send?phone=541140263809&text=Hi%20I%20want%20to%20contact%20you" class="floatWapp" target="_blank">
     <i class="fa fa-whatsapp my-floatWapp"></i>
    </a>
  </div>

</template>

<script>
export default {
  mounted() {
    if (this.$cookies.get('locale') === undefined || this.$cookies.get('locale') === 'es') {
      document.getElementById('btn-esp').classList.toggle('btn-lang--active')
    } else {
      document.getElementById('btn-esp').classList.remove('btn-lang--active')
      document.getElementById('btn-eng').classList.toggle('btn-lang--active')
    }
    document.getElementsByName('name')[0].placeholder=this.$t('form_name_placeholder')
    document.getElementsByName('email')[0].placeholder=this.$t('form_email_placeholder')
    document.getElementsByName('message')[0].placeholder=this.$t('form_message_placeholder')
  },
  data() {
    return {
      successMessage:null,
      form_name_placeholder:this.$t('form_name_placeholder'),
      form_email_placeholder:this.$t('form_email_placeholder'),
      form_message_placeholder:this.$t('form_message_placeholder')
    }
  },
  head() {
    return {
      script: [
          {src: '//widget.clutch.co/static/js/widget.js'},
          {src: '//js.hs-scripts.com/8219400.js'}
      ],
      link: [
        {rel:"stylesheet", type:"text/css", href:'https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css'}
      ]
    }
  },  
  computed: {
    locales() {
      return this.$store.state.locales
    },
    locale() {
      return this.$store.state.locale
    },
  },
  methods: {
    switchLanguage(localeCode) {
      this.$cookies.set('locale', localeCode, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7,
      })
      var url = window.location.href;
      url =  url.split("?")[0];  
      if(localeCode=='en'){
        url += '?lang=en'
      } else {
        url += '?lang=es'
      }  
      window.location.href = url;
      //location.reload()
    },

    async onSubmit(event) {
        //https://gregives.co.uk/blog/nuxt-netlify-forms-and-recaptcha/
        // Submit the form to Netlify
      if(!event.target.checkValidity()) {
        event.target.classList.add('was-validated');
      }
      else {
        try{ const response = await fetch('/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams(new FormData(event.target)).toString()
              })
            if (!response.ok) {
                throw new Error('Response was not successful')
            }
            this.successMessage = this.$t('success_message');
            event.target.classList.remove('was-validated')
            event.target.reset();
        } catch {
          this.successMessage = 'Something went wrong, please try again.'
        }
      } 
    }
  },
}
</script>
