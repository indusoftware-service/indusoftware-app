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
              class="col-10 col-sm-10 col-md-5 col-lg-5 h-100 d-flex flex-column align-items-center align-items-sm-center align-items-md-start"
            >
              <h3 class="text-white">
                <span class="subtitle-bar">{{ $t('about') }}</span>
              </h3>
              <p class="text-white pt-3 text-md-left">
                {{ $t('about_text') }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- BANNER -->
      <div class="w-100 d-flex justify-content-center bg-darker pt-5">
        <div class="row d-flex w-75">
          <div
            class="col-md-4 col-lg-4 d-flex d-md-block flex-column align-items-center"
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
            class="col-md-4 col-lg-4 d-flex d-md-block flex-column align-items-center"
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
            class="col-md-4 col-lg-4 d-flex d-md-block flex-column align-items-center"
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
              class="col-md-6 order-2 order-md-1 mt-4 d-flex flex-column align-items-center align-items-md-start"
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
              class="col-md-6 order-1 d-flex justify-content-center align-items-center"
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
              class="col-md-6 order-1 order-md-2 mt-4 d-flex flex-column align-items-center align-items-md-start"
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
              class="col-md-6 order-2 order-md-1 mt-4 d-flex flex-column align-items-center align-items-md-start"
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
            href="https://www.allianz.es/"
            ><div class="client1"></div
          ></a>
          <a
            class="col-5 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-4 px-0 px-sm-1 px-md-2 px-lg-4 px-xl-4"
            target="_blank"
            href="http://bp-4.com/"
            ><div class="client2"></div
          ></a>
          <a
            class="col-5 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-4 px-0 px-sm-1 px-md-2 px-lg-4 px-xl-4"
            target="_blank"
            href="http://www.brainsys.com.ar/"
            ><div class="client3"></div
          ></a>
          <a
            class="col-5 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-4 px-0 px-sm-1 px-md-2 px-lg-4 px-xl-4"
            target="_blank"
            href=""
            ><div class="client4"></div
          ></a>
          <a
            class="col-5 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-4 px-0 px-sm-1 px-md-2 px-lg-4 px-xl-4"
            target="_blank"
            href="http://www.fogaba.com.ar/"
            ><div class="client5"></div
          ></a>
          <a
            class="col-5 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-4 px-0 px-sm-1 px-md-2 px-lg-4 px-xl-4"
            target="_blank"
            href="https://www.heinlein.com.ar/"
            ><div class="client6"></div
          ></a>
          <a
            class="col-5 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-4 px-0 px-sm-1 px-md-2 px-lg-4 px-xl-4"
            target="_blank"
            href="https://www.vi-datec.com/"
            ><div class="client8"></div
          ></a>
        </div>
      </div>
    </div>

    <!-- FOOTER -->
    <img class="w-100" src=/images/curve-footer.svg alt />
    <footer class="bg-darker px-2">
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
                >Posadas, Misiones (DC)</span
              ><br />
              <span class="text-white" style="font-size: 0.9em;"
                >San Salvador de Jujuy, Argentina (DC)</span
              ><br />
              <span class="text-white" style="font-size: 0.9em;"
                >Washington DC, USA (CO)</span>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <h5 class="text-white">
              <span class="subtitle-bar pb-1">{{ $t('contact') }}</span>
            </h5>
            <div class="py-4">
              <div>
                <a href="https://api.whatsapp.com/send?phone=541140263809&text=Hi%20I%20want%20to%20contact%20you">
                  <img src="" alt="" /><span
                    class="text-white"
                    style="font-size: 0.9em;"
                    >Buenos Aires HQ: +54 11 4026 3809</span
                  >
                </a>  
              </div>
              <div>
                <img src="" alt="" /><span
                  class="text-white"
                  style="font-size: 0.9em;"
                  >Washington Office: +1 703 953 4286</span
                >
              </div>
              <div>
                <img src="" alt="" /><span
                  class="text-white"
                  style="font-size: 0.9em;"
                  >contacto@induSoftware.com.ar</span
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
        &copy; 2014-2020 InduSoftware | All rights reserved.
      </div>
    </footer>
    <!-- FOOTER -->
  </div>
</template>

<script>
export default {
  mounted() {
    if (this.$cookies.get('locale') === 'es') {
      document.getElementById('btn-esp').classList.toggle('btn-lang--active')
    } else {
      document.getElementById('btn-esp').classList.remove('btn-lang--active')
      document.getElementById('btn-eng').classList.toggle('btn-lang--active')
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
      location.reload()
    },
  },
}
</script>
