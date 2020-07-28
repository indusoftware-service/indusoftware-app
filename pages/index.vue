<template>
  <div id="fh5co-wrapper">
    <div id="fh5co-page">
      <!-- Hader -->
      <div id="fh5co-header">
        <header id="fh5co-header-section">
          <div class="container">
            <div class="nav-header">
              <a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle"><i></i></a>
              <h1 id="fh5co-logo"><a href="index.html">Indusoftware</a>
                <span style="cursor:pointer" @click="switchLanguage('es')">ESP</span>|<span style="cursor:pointer" @click="switchLanguage('en')">ENG</span>
              </h1>
            </div>
          </div>
        </header>
      </div>
      <div class="fh5co-hero">
        <div class="fh5co-overlay"></div>
        <div class="fh5co-cover text-center" data-stellar-background-ratio="0.5" style="background-image: url(images/chicos.jpg);">
          <div class="desc animate-box">
            <h2>Indusoftware <strong>Creative Teams</strong></h2>
          </div>
        </div>
      </div>
      <!-- Features -->
      <div id="fh5co-features">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="feature-left">
                <span class="icon">
                  <i class="icon-lightbulb"></i>
                </span>
                <div class="feature-copy">
                  <h3>{{ $t('mision_tit') }}</h3>
                  <p>{{ $t('mision') }}</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="feature-left">
                <span class="icon">
                  <i class="icon-cogs"></i>
                </span>
                <div class="feature-copy">
                  <h3>{{ $t('tecnologias_tit') }}</h3>
                  <p>{{ $t('tecnologias') }}</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="feature-left">
                <span class="icon">
                  <i class="icon-trophy"></i>
                </span>
                <div class="feature-copy">
                  <h3>{{ $t('porque_tit') }}</h3>
                  <p>{{ $t('porque') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Features product -->
      <div id="fh5co-feature-product" class="fh5co-section-gray">
        <div class="container">
          <div class="row row-bottom-padded-md">
            <div class="col-md-12 text-center heading-section">
              <h3>{{ $t('our_services') }}</h3>
            </div>
            <div class="col-md-12 text-center animate-box">
              <p><img src="images/monitor.jpg" alt="Free HTML5 Bootstrap Template" class="img-responsive"></p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="feature-text">
                <h3><span class="number">01.</span> {{ $t('development_tit') }} </h3>
                <p>{{ $t('development_body') }}</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="feature-text">
                <h3><span class="number">02.</span> {{ $t('mobileapp_tit') }}</h3>
                <p>{{ $t('mobileapp_body') }}</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="feature-text">
                <h3><span class="number">03.</span> {{ $t('api_tit') }}</h3>
                <p>{{ $t('api_body') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Portfolio -->
      <div id="fh5co-portfolio">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-md-offset-3 text-center heading-section animate-box">
              <h3>{{ $t('clientes') }}</h3>
            </div>
          </div>
          <div class="row row-bottom-padded-md">
            <div class="col-md-12">
              <ul id="fh5co-portfolio-list">
                <li class="one-third animate-box" data-animate-effect="fadeIn" style="background-image: url(images/calico.jpg); background-size: 300px 200px; ">
                  <a href="https://www.calicosa.com.ar/" class="color-3">
                    <div class="case-studies-summary">
                      <span>Calico</span>
                      <h2>Logistica Integral</h2>
                    </div>
                  </a>
                </li>
                <li class="one-third animate-box" data-animate-effect="fadeIn" style="background-image: url(images/maritima.jpg); background-size: 300px 200px; ">
                  <a href="https://www.heinlein.com.ar/" class="color-4">
                    <div class="case-studies-summary">
                      <span>Maritima Heinlein</span>
                      <h2>Shipagents-Chartering</h2>
                    </div>
                  </a>
                </li>
                <li class="one-third animate-box" data-animate-effect="fadeIn" style="background-image: url(images/bp4.jpg); background-size: 300px 200px;">
                  <a href="http://bp-4.com/" class="color-4">
                    <div class="case-studies-summary">
                      <span>bp4</span>
                      <h2>Software factory</h2>
                    </div>
                  </a>
                </li>
                <li class="one-third animate-box" data-animate-effect="fadeIn" style="background-image: url(images/detechtus.jpg); background-size: 300px 200px; ">
                  <a href="#" class="color-5">
                    <div class="case-studies-summary">
                      <span>Detechtus</span>
                      <h2>Timer starts now!</h2>
                    </div>
                  </a>
                </li>
                <li class="two-third animate-box" data-animate-effect="fadeIn" style="background-image: url(images/telecom.jpg); background-size: 300px 200px; ">
                  <a href="#" class="color-6">
                    <div class="case-studies-summary">
                      <span>Telecom</span>
                      <h2>Beautiful sunset</h2>
                    </div>
                  </a>
                </li>
                <li class="one-third animate-box" data-animate-effect="fadeIn" style="background-image: url(images/fogaba.jpg); background-size: 300px 200px; ">
                  <a href="#" class="color-3">
                    <div class="case-studies-summary">
                      <span>Fogaba</span>
                      <h2>Useful baskets</h2>
                    </div>
                  </a>
                </li>
                <li class="one-third animate-box" data-animate-effect="fadeIn" style="background-image: url(images/allianz.jpg); background-size: 300px 200px;">
                  <a href="#" class="color-4">
                    <div class="case-studies-summary">
                      <span>Allianz</span>
                      <h2>Skater man in the road</h2>
                    </div>
                  </a>
                </li>
                <li class="one-third animate-box" data-animate-effect="fadeIn" style="background-image: url(images/vidatec.jpg); background-size: 300px 200px; ">
                  <a href="#" class="color-4">
                    <div class="case-studies-summary">
                      <span>Vidatect</span>
                      <h2>Two Glas of Juice</h2>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- Content Section -->
      <div id="fh5co-content-section" class="fh5co-section-gray">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-md-offset-2 text-center heading-section animate-box">
              <h3>{{ $t('quienes_somos_tit') }}</h3>
              <p>{{ $t('quienes_somos') }}</p>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="fh5co-testimonial text-center animate-box">
                <figure>
                  <img src="images/eric.jpg" alt="user">
                </figure>
                <blockquote>
                  <p>{{ $t('ceo_text') }}</p>
                </blockquote>
                <span>{{ $t('ceo') }}</span>
              </div>
            </div>
            <div class="col-md-4">
              <div class="fh5co-testimonial text-center animate-box">
                <figure>
                  <img src="images/person_2.jpg" alt="user">
                </figure>
                <blockquote>
                  <p>{{ $t('coo_text') }}</p>
                </blockquote>
                <span>{{ $t('coo') }}</span>
              </div>
            </div>
            <div class="col-md-4">
              <div class="fh5co-testimonial text-center animate-box">
                <figure>
                  <img src="images/person_3.jpg" alt="user">
                </figure>
                <blockquote>
                  <p>{{ $t('cto_text') }}</p>
                </blockquote>
                <span>{{ $t('cto') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Services Section -->
      <div id="fh5co-services-section">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-md-offset-2 text-center heading-section animate-box">
              <h3>{{ $t('tecno') }}</h3>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row text-center">
            <div class="col-md-4 col-sm-4">
              <div class="services animate-box">
                <span><i class="icon-browser"></i></span>
                <h3>{{ $t('desarrollo') }}</h3>
                <p>Java - Python - Grails - Microsoft.Net - Spring Boot</p>
              </div>
            </div>
            <div class="col-md-4 col-sm-4">
              <div class="services animate-box">
                <span><i class="icon-mobile"></i></span>
                <h3>{{ $t('desarrollo_web') }}</h3>
                <p>React JS - Angular - Node Js- Html 5 - Bootstrap</p>
              </div>
            </div>
            <div class="col-md-4 col-sm-4">
              <div class="services animate-box">
                <span><i class="icon-tools"></i></span>
                <h3>{{ $t('desarrollo_movil') }}</h3>
                <p>Android - iOS - React Native - Ionic - Flutter - Otra cosa</p>
              </div>
            </div>
            <div class="col-md-4 col-sm-4">
              <div class="services animate-box">
                <span><i class="icon-video"></i></span>
                <h3>{{ $t('devops') }}</h3>
                <p>Gloogle Cloud - aws - Azure - docker - Ansible - Kubernetes - git - Jenkins</p>
              </div>
            </div>
            <div class="col-md-4 col-sm-4">
              <div class="services animate-box">
                <span><i class="icon-cloud"></i></span>
                <h3>{{ $t('base_datos') }}</h3>
                <p>Oracle - Sql Server - mongo DB - Postgress SQL - Firebase</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Blog Section -->
      <div id="fh5co-blog-section" class="fh5co-section-gray">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-md-offset-2 text-center heading-section animate-box">
              <h3>{{ $t('equipo_tit') }}</h3>
              <p>{{ $t('equipo_body') }}</p>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <p><img src="images/equipo.jpg" class="img-responsive"></p>
          </div>
        </div>
      </div>
      <!--Footer -->
      <footer>
        <div id="footer">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-md-offset-3 text-center">
                <p class="fh5co-social-icons">
                  <a href="#"><i class="icon-twitter2"></i></a>
                  <a href="#"><i class="icon-facebook2"></i></a>
                  <a href="#"><i class="icon-instagram"></i></a>
                  <a href="#"><i class="icon-dribbble2"></i></a>
                  <a href="#"><i class="icon-youtube"></i></a>
                </p>
                <p>Copyright 2020 <a href="#">Indusoftware</a>. All Rights Reserved. </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  head: {
    script: [
      { src: '/js/jquery.min.js' },
      { src: '/js/jquery.easing.1.3.js' },
      { src: '/js/bootstrap.min.js' },
      { src: '/js/jquery.waypoints.min.js' },
      { src: '/js/jquery.stellar.min.js' },
      { src: '/js/hoverIntent.js' },
      { src: '/js/superfish.js' },
      { src: '/js/main.js' }
    ]
  },
  computed: {
    locales () { return this.$store.state.locales },
    locale () { return this.$store.state.locale }
  },
  methods: {
    switchLanguage (localeCode) {
      console.log('Language: ' + localeCode)
      this.$cookies.set('locale', localeCode, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7
      })
      console.log('cookie: ' + this.$cookies.get('locale'))
      location.reload()
      //  document.cookie = `locale=${localeCode}`
      //      this.$i18n.locale = localeCode
    }
  }
}
</script>

<style>

</style>
