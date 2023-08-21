import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Purple Light Services</title>
          <meta
            name="description"
            content="With a traditional design approach and modern technologies, we offer exceptional and unique services to find personal harmony in today's fast-paced world."
          />
          <meta property="og:title" content="Purple Light Services" />
          <meta
            property="og:description"
            content="Purple Light Services. With a traditional design approach and modern technologies, we offer exceptional and unique services to find personal harmony in today's fast-paced world. Feng Shui and Vastu."
          />
        </Head>
        <header id="header" data-role="Header" className="home-header">
          <header data-thq="thq-navbar" className="home-navbar-interactive">
            <Link href="/">
              <a className="home-link">
                <img
                  alt="logo"
                  src="/purple%20light%20services-2-1500h.png"
                  className="home-logo"
                />
              </a>
            </Link>
            <div
              data-thq="thq-navbar-nav"
              data-role="Nav"
              className="home-desktop-menu"
            >
              <nav
                data-thq="thq-navbar-nav-links"
                data-role="Nav"
                className="home-nav"
              >
                <Link href="/">
                  <a className="home-link01 link">Home</a>
                </Link>
                <a href="#about" className="home-link02 link">
                  About
                </a>
                <a href="#services" className="home-link03 link">
                  Services
                </a>
                <a href="#clients" className="home-link04 link">
                  Clients
                </a>
                <a href="#contact" className="home-link05 link">
                  Contact
                </a>
                <Link href="/natalia-pashigina">
                  <a className="home-link06 link">Owner</a>
                </Link>
              </nav>
            </div>
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <div data-thq="thq-mobile-menu-nav" data-role="Nav">
                <div className="home-container1">
                  <Link href="/">
                    <a className="home-link07">
                      <img
                        alt="logo"
                        src="/purple%20light%20services-2-1500h.png"
                        className="home-logo1"
                      />
                    </a>
                  </Link>
                  <div data-thq="thq-close-menu" className="home-menu-close">
                    <svg viewBox="0 0 1024 1024" className="home-icon02">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav
                  data-thq="thq-mobile-menu-nav-links"
                  data-role="Nav"
                  className="home-nav2"
                >
                  <Link href="/">
                    <a className="home-link08">Home</a>
                  </Link>
                  <a href="#about" className="home-link09">
                    About
                  </a>
                  <a href="#services" className="home-link10">
                    Services
                  </a>
                  <a href="#testimonials" className="home-link11">
                    Clients
                  </a>
                  <a href="#contact" className="home-link12">
                    Contact
                  </a>
                  <Link href="/natalia-pashigina">
                    <a className="home-link13">Owner</a>
                  </Link>
                </nav>
              </div>
            </div>
          </header>
        </header>
        <div id="hero" className="home-hero">
          <div className="home-text-container">
            <h1 className="home-text heading">
              Let&apos;s change your daily life together
            </h1>
            <p className="textarea">
              <span>
                With a traditional design approach and modern technologies, we
                offer exceptional and unique services to find personal harmony
                in today&apos;s fast-paced world.
              </span>
              <br></br>
            </p>
          </div>
          <img
            alt="image"
            src="/c159a585-a6c7-4bd5-ab9a-07e688338b7a-1500h.jpg"
            loading="lazy"
            className="home-image"
          />
        </div>
        <div className="home-section-separator"></div>
        <div id="about" className="home-about-us">
          <h2 className="heading">About us</h2>
          <p className="home-text05 textarea">
            <span>Purple Light Services</span>
            <span>
              {' '}
              was founded by two family members to bring a new way of organising
              everybody&apos;s life.
            </span>
            <br></br>
            <br></br>
            <span>
              {' '}
              With a deep knowledge of ancient Feng Shui techniques and fresh
              ideas from the IT world, we developed a new level of design for
              people seeking to live stressless.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <br></br>
            <span>
              Since 2020 we successfully help many of our clients to reach their
              goals in work-life balance and well-being.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <br></br>
            <span>
              Currently, we are based in the United Arab Emirates, but with
              modern technologies we can work globally without time or space
              limitations.
            </span>
            <br></br>
          </p>
        </div>
        <div className="home-section-separator1"></div>
        <div id="services" className="home-services">
          <div className="home-heading-container">
            <h2 className="heading">Our Services</h2>
            <span className="home-text19">
              We offer a unique design approach to find the best combination of
              work and life balance:
            </span>
          </div>
          <div className="home-cards-container">
            <div className="home-service-card">
              <h3 className="home-text20">
                Feng Shui for home design and architecture
              </h3>
              <p className="home-text21">
                With the help of ancient Chinese techniques you will achieve
                harmony and happiness
              </p>
            </div>
            <div className="home-service-card1">
              <h3 className="home-text22">
                Office design with modern technologies and Feng Shui
              </h3>
              <p className="home-text23">
                Intelligent electronics and minimalistic style will help you to
                be more productive and stressless
              </p>
            </div>
            <div className="home-service-card2">
              <h3 className="home-text24">
                Online consultations &amp; classes for design advancements
              </h3>
              <p className="home-text25">
                Get recommendations from us to find the best solution for your
                home and work spaces
              </p>
            </div>
          </div>
        </div>
        <div className="home-section-separator2"></div>
        <div id="clients" className="home-clients">
          <div className="home-heading-container1">
            <h2 className="heading">
              <span>Our clients speak</span>
            </h2>
            <p className="home-text28">
              Be a part of our family and share your life changes:
            </p>
          </div>
          <div className="home-testimonials">
            <header className="home-testimonial-card">
              <svg viewBox="0 0 1024 1024" className="home-icon04">
                <path d="M800 640c-123.712 0-224-100.29-224-224 0-123.712 100.288-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.634-11.636 22.252-24.016 31.83-37.020-11.438 1.8-23.16 2.746-35.104 2.746zM224 640c-123.71 0-224-100.29-224-224 0-123.712 100.29-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.636-11.636 22.254-24.016 31.832-37.020-11.44 1.8-23.16 2.746-35.106 2.746z"></path>
              </svg>
              <div className="home-testimonial">
                <span className="home-text29">
                  I couldn&apos;t find a way how to organise my daily life.
                  Thanks to Natalia who helped me to achieve concentration and
                  productivity at home and office.
                </span>
                <img
                  alt="profile"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fG1hbnxlbnwwfHx8fDE2Njg1ODU0NzU&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image1"
                />
                <span className="home-text30">Alex Ferguson</span>
              </div>
            </header>
            <header className="home-testimonial-card1">
              <svg viewBox="0 0 1024 1024" className="home-icon06">
                <path d="M800 640c-123.712 0-224-100.29-224-224 0-123.712 100.288-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.634-11.636 22.252-24.016 31.83-37.020-11.438 1.8-23.16 2.746-35.104 2.746zM224 640c-123.71 0-224-100.29-224-224 0-123.712 100.29-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.636-11.636 22.254-24.016 31.832-37.020-11.44 1.8-23.16 2.746-35.106 2.746z"></path>
              </svg>
              <div className="home-testimonial1">
                <span className="home-text31">
                  Feel stressless nowadays seems impossible... Thanks to Purple
                  Light Services that put harmony in my work place and improved
                  my home design.
                </span>
                <img
                  alt="profile"
                  src="https://images.unsplash.com/photo-1502767882403-636aee14f873?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDU4fHx3b21hbiU1RHxlbnwwfHx8fDE2Njg1ODU0NTQ&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image2"
                />
                <span className="home-text32">Maria McGill</span>
              </div>
            </header>
            <header className="home-testimonial-card2">
              <svg viewBox="0 0 1024 1024" className="home-icon08">
                <path d="M800 640c-123.712 0-224-100.29-224-224 0-123.712 100.288-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.634-11.636 22.252-24.016 31.83-37.020-11.438 1.8-23.16 2.746-35.104 2.746zM224 640c-123.71 0-224-100.29-224-224 0-123.712 100.29-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.636-11.636 22.254-24.016 31.832-37.020-11.44 1.8-23.16 2.746-35.106 2.746z"></path>
              </svg>
              <div className="home-testimonial2">
                <span className="home-text33">
                  Thanks to Ivan and Natalia for unique design experience. I
                  never heard before about Feng Shui, it changed my life. I feel
                  more energetic and calm.
                </span>
                <img
                  alt="profile"
                  src="https://images.unsplash.com/photo-1545573237-b75186a6875d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIxNnx8YXJhYmljfGVufDB8fHx8MTY2ODU4NTM2OQ&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image3"
                />
                <span className="home-text34">
                  Fatima Al-Khatib
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </header>
          </div>
        </div>
        <div className="home-section-separator3"></div>
        <div id="contact" className="home-contact-us">
          <h2 className="home-text35 Section-Heading heading">Get in touch</h2>
          <div className="home-location-1">
            <span className="home-heading">
              <span>Fujairah, </span>
              <br></br>
              <span>United Arab Emirates</span>
            </span>
            <div className="home-adress">
              <svg viewBox="0 0 1024 1024" className="home-icon10">
                <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
              </svg>
              <span className="home-text39">
                <span>Office 1309</span>
                <br></br>
                <span>Creative Tower</span>
                <br className="Section-Text"></br>
                <span>P.O. Box 4422</span>
              </span>
            </div>
            <div className="home-email">
              <svg viewBox="0 0 1024 1024" className="home-icon12">
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
              <span className="home-text45">natalia@plservices.ru</span>
            </div>
            <div className="home-phone">
              <svg viewBox="0 0 804.5714285714286 1024" className="home-icon14">
                <path d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"></path>
              </svg>
              <span className="home-text46">
                <span>+971 09 224 4982</span>
                <br></br>
                <span>+971 50 836 7818</span>
              </span>
            </div>
          </div>
        </div>
        <div className="home-section-separator4"></div>
        <footer className="home-footer">
          <img
            alt="image"
            src="/purple%20light%20services-2-1500h.png"
            className="home-image4"
          />
          <nav className="home-nav3">
            <Link href="/">
              <a className="home-link14 link">Home</a>
            </Link>
            <a href="#about" className="home-link15 link">
              About
            </a>
            <a href="#services" className="home-link16 link">
              Services
            </a>
            <a href="#testimonials" className="home-link17 link">
              Clients
            </a>
            <a href="#contact" className="home-link18 link">
              Contact
            </a>
            <Link href="/natalia-pashigina">
              <a className="home-link19 link">Owner</a>
            </Link>
          </nav>
          <div className="home-separator"></div>
          <div className="home-container2">
            <span className="home-text50">
              <span>
                © 2023 Purple Light Services FZE,
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>All Rights Reserved.</span>
            </span>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .home-container {
            min-height: 100vh;
          }
          .home-header {
            top: 0px;
            width: 100%;
            display: flex;
            padding: 1rem;
            position: sticky;
            background-color: var(--dl-color-main-white);
          }
          .home-navbar-interactive {
            width: 100%;
            display: flex;
            padding: 1rem;
            justify-content: space-between;
          }
          .home-link {
            display: contents;
          }
          .home-logo {
            height: 2rem;
            text-decoration: none;
          }
          .home-desktop-menu {
            display: flex;
          }
          .home-nav {
            flex: 0 0 auto;
            display: flex;
            flex-direction: row;
          }
          .home-link01 {
            text-decoration: none;
          }
          .home-link02 {
            text-decoration: none;
          }
          .home-link03 {
            text-decoration: none;
          }
          .home-link04 {
            text-decoration: none;
          }
          .home-link05 {
            text-decoration: none;
          }
          .home-link06 {
            text-decoration: none;
          }
          .home-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .home-icon {
            width: 16px;
            height: 16px;
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            display: flex;
            padding: 2rem;
            z-index: 100;
            position: fixed;
            transform: translateY(-100%);
            transition: 0.5s;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .home-container1 {
            width: 100%;
            display: flex;
            margin-bottom: 2rem;
            justify-content: space-between;
          }
          .home-link07 {
            display: contents;
          }
          .home-logo1 {
            height: 2rem;
            text-decoration: none;
          }
          .home-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon02 {
            width: 16px;
            height: 16px;
          }
          .home-nav2 {
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-link08 {
            margin-bottom: 1rem;
          }
          .home-link09 {
            margin-bottom: 1rem;
          }
          .home-link10 {
            margin-bottom: 1rem;
          }
          .home-link11 {
            margin-bottom: 1rem;
          }
          .home-link12 {
            margin-bottom: 1rem;
          }
          .home-link13 {
            margin-bottom: 1rem;
          }
          .home-hero {
            width: 100%;
            display: flex;
            max-width: auto;
            min-height: 80vh;
            align-items: center;
            flex-direction: row;
            background-color: #f8f8f8;
          }
          .home-text-container {
            width: 40%;
            margin: 1rem;
            display: flex;
            align-self: center;
            flex-direction: column;
          }
          .home-text {
            margin: 0px;
            text-align: left;
          }
          .home-image {
            width: 60%;
          }
          .home-section-separator {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #d9d9d9;
          }
          .home-about-us {
            width: 100%;
            display: flex;
            min-height: 80vh;
            align-items: center;
            flex-direction: column;
          }
          .home-text05 {
            width: 90%;
          }
          .home-section-separator1 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #d9d9d9;
          }
          .home-services {
            width: 100%;
            display: flex;
            align-self: center;
            min-height: 80vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #f8f8f8;
          }
          .home-heading-container {
            width: 90%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text19 {
            color: var(--dl-color-main-gray-text);
            padding: 1rem;
            text-align: center;
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .home-cards-container {
            width: 90%;
            margin: 1rem;
            display: flex;
          }
          .home-service-card {
            display: flex;
            padding: 1rem;
            border-color: #678109;
            flex-direction: column;
          }
          .home-text20 {
            color: var(--dl-color-main-text);
            font-size: 1.5rem;
            text-align: left;
            margin-bottom: 2rem;
          }
          .home-text21 {
            color: #999999;
            font-size: 1rem;
          }
          .home-service-card1 {
            display: flex;
            padding: 1rem;
            border-color: #678109;
            flex-direction: column;
            border-left-width: 2px;
            border-right-width: 2px;
          }
          .home-text22 {
            color: var(--dl-color-main-text);
            font-size: 1.5rem;
            text-align: left;
            margin-bottom: 2rem;
          }
          .home-text23 {
            color: #999999;
            font-size: 1rem;
          }
          .home-service-card2 {
            display: flex;
            padding: 1rem;
            border-color: #678109;
            flex-direction: column;
          }
          .home-text24 {
            color: var(--dl-color-main-text);
            font-size: 1.5rem;
            text-align: left;
            margin-bottom: 2rem;
          }
          .home-text25 {
            color: #999999;
            font-size: 1rem;
          }
          .home-section-separator2 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #d9d9d9;
          }
          .home-clients {
            width: 100%;
            display: flex;
            min-height: 80vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading-container1 {
            width: 90%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text28 {
            color: var(--dl-color-main-gray-text);
            padding: 1rem;
          }
          .home-testimonials {
            width: 90%;
            margin: 1rem;
            display: flex;
            justify-content: center;
          }
          .home-testimonial-card {
            display: flex;
            padding: 1rem;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-icon04 {
            width: 48px;
            margin-bottom: 32px;
          }
          .home-testimonial {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text29 {
            color: var(--dl-color-main-text);
            font-size: 1.25rem;
            text-align: center;
            margin-bottom: 2rem;
          }
          .home-image1 {
            width: 96px;
            height: 96px;
            object-fit: cover;
            flex-shrink: 0;
            border-radius: var(--dl-radius-radius-round);
          }
          .home-text30 {
            font-size: 1.5rem;
            font-weight: 300;
          }
          .home-testimonial-card1 {
            display: flex;
            padding: 1rem;
            align-items: center;
            border-color: var(--dl-color-main-heading);
            border-width: 1px;
            flex-direction: column;
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 2px;
            border-right-width: 2px;
            border-bottom-width: 0px;
          }
          .home-icon06 {
            width: 48px;
            margin-bottom: 32px;
          }
          .home-testimonial1 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text31 {
            color: var(--dl-color-main-text);
            font-size: 1.25rem;
            text-align: center;
            margin-bottom: 2rem;
          }
          .home-image2 {
            width: 96px;
            height: 96px;
            object-fit: cover;
            flex-shrink: 0;
            border-radius: var(--dl-radius-radius-round);
          }
          .home-text32 {
            font-size: 1.5rem;
            font-weight: 300;
          }
          .home-testimonial-card2 {
            display: flex;
            padding: 1rem;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-icon08 {
            width: 48px;
            margin-bottom: 32px;
          }
          .home-testimonial2 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text33 {
            color: var(--dl-color-main-text);
            font-size: 1.25rem;
            text-align: center;
            margin-bottom: 2rem;
          }
          .home-image3 {
            width: 96px;
            height: 96px;
            object-fit: cover;
            flex-shrink: 0;
            border-radius: var(--dl-radius-radius-round);
          }
          .home-text34 {
            font-size: 1.5rem;
            font-weight: 300;
          }
          .home-section-separator3 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #d9d9d9;
          }
          .home-contact-us {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-main-background);
          }
          .home-text35 {
            color: var(--dl-color-main-heading);
          }
          .home-location-1 {
            display: flex;
            margin-top: 2rem;
            align-items: flex-start;
            margin-bottom: 2rem;
            flex-direction: column;
          }
          .home-heading {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Roboto;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .home-adress {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .home-icon10 {
            width: 1.5rem;
            height: 1.5rem;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-text39 {
            font-size: 1rem;
            text-align: left;
          }
          .home-email {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .home-icon12 {
            width: 1.5rem;
            height: 1.5rem;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-text45 {
            font-size: 1rem;
            text-align: left;
            font-family: Raleway;
            font-weight: 400;
            line-height: 1.55;
            text-transform: none;
            text-decoration: none;
          }
          .home-phone {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .home-icon14 {
            width: 1.5rem;
            height: 1.5rem;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-text46 {
            font-size: 1rem;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: 1.55;
            text-transform: none;
            text-decoration: none;
          }
          .home-section-separator4 {
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 1px;
            background-color: #d9d9d9;
          }
          .home-footer {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-image4 {
            height: 2rem;
            margin: 1rem;
            align-self: center;
            object-fit: cover;
          }
          .home-nav3 {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
          }
          .home-link14 {
            margin: 1rem;
          }
          .home-link15 {
            margin: 1rem;
          }
          .home-link16 {
            margin: 1rem;
          }
          .home-link17 {
            margin: 1rem;
          }
          .home-link18 {
            margin: 1rem;
          }
          .home-link19 {
            margin: 1rem;
          }
          .home-separator {
            flex: 0 0 auto;
            width: 100%;
            height: 0px;
            display: flex;
            margin-top: 32px;
            align-items: flex-start;
            margin-left: 0px;
            border-color: #d9d9d9;
            border-style: solid;
            border-width: 1px;
            margin-right: 0px;
            margin-bottom: 32px;
            flex-direction: row;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-container2 {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
          }
          .home-text50 {
            text-align: center;
          }
          @media (max-width: 1600px) {
            .home-hero {
              min-height: 70vh;
            }
            .home-service-card {
              justify-content: space-between;
            }
            .home-service-card1 {
              justify-content: space-between;
            }
            .home-service-card2 {
              justify-content: space-between;
            }
          }
          @media (max-width: 991px) {
            .home-link01 {
              font-size: 1rem;
            }
            .home-link06 {
              font-size: 1rem;
            }
            .home-hero {
              min-height: 60vh;
              align-items: stretch;
            }
            .home-testimonials {
              align-items: center;
              flex-direction: column;
            }
            .home-testimonial-card1 {
              border-top-width: 2px;
              border-left-width: 0px;
              border-right-width: 0px;
              border-bottom-width: 2px;
            }
            .home-location-1 {
              margin-bottom: var(--dl-space-space-tripleunit);
            }
          }
          @media (max-width: 767px) {
            .home-desktop-menu {
              display: none;
            }
            .home-link03 {
              margin-left: var(--dl-space-space-unit);
            }
            .home-link04 {
              margin-left: var(--dl-space-space-unit);
            }
            .home-link05 {
              margin-left: var(--dl-space-space-unit);
            }
            .home-burger-menu {
              display: flex;
            }
            .home-hero {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .home-text-container {
              width: 100%;
              margin: 0;
              padding: 1rem;
            }
            .home-image {
              width: 100%;
              margin: 0;
            }
            .home-cards-container {
              flex-direction: column;
            }
            .home-service-card1 {
              border-top-width: 2px;
              border-left-width: 0px;
              border-right-width: 0px;
              border-bottom-width: 2px;
            }
            .home-icon04 {
              height: 48px;
            }
            .home-icon06 {
              height: 48px;
            }
            .home-icon08 {
              height: 48px;
            }
            .home-separator {
              margin-top: 24px;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: 24px;
            }
          }
          @media (max-width: 600px) {
            .home-navbar-interactive {
              padding: 0;
            }
            .home-hero {
              flex-direction: column;
            }
            .home-text-container {
              width: 100%;
              padding: 1rem;
              align-self: flex-start;
              margin-top: 0px;
              margin-left: 0px;
              margin-bottom: 0px;
            }
            .home-text {
              line-height: 1.3;
            }
            .home-text30 {
              font-size: 1.25rem;
            }
            .home-text32 {
              font-size: 1.25rem;
            }
            .home-text34 {
              font-size: 1.25rem;
            }
            .home-location-1 {
              margin-right: 0px;
              margin-bottom: 0px;
            }
            .home-separator {
              margin-top: 24px;
              margin-bottom: 24px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
