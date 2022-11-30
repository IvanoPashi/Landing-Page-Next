import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Landing Page</title>
          <meta property="og:title" content="Landing Page" />
        </Head>
        <header id="header" data-role="Header" className="home-header">
          <header data-thq="thq-navbar" className="home-navbar-interactive">
            <Link href="/">
              <a className="home-link">
                <img
                  alt="logo"
                  src="/playground_assets/purple%20light%20services-2-1500h.png"
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
                <a href="#testimonials" className="home-link04 link">
                  Clients
                </a>
                <a href="#contact" className="home-link05 link">
                  Contact
                </a>
              </nav>
            </div>
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <div
                data-thq="thq-mobile-menu-nav"
                data-role="Nav"
                className="home-nav1"
              >
                <div className="home-container1">
                  <Link href="/">
                    <a className="home-link06">
                      <img
                        alt="logo"
                        src="/playground_assets/purple%20light%20services-2-1500h.png"
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
                    <a className="home-link07">Home</a>
                  </Link>
                  <a href="#about" className="home-link08">
                    About
                  </a>
                  <a href="#services" className="home-link09">
                    Services
                  </a>
                  <a href="#testimonials" className="home-link10">
                    Clients
                  </a>
                  <a href="#contact" className="home-link11">
                    Contact
                  </a>
                </nav>
              </div>
            </div>
          </header>
        </header>
        <div id="hero" className="home-hero">
          <div className="home-text-container">
            <h1 className="home-text">
              Let&apos;s change your daily life together
            </h1>
            <p className="home-text01 textarea">
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
            src="/playground_assets/c159a585-a6c7-4bd5-ab9a-07e688338b7a-1500h.jpg"
            loading="lazy"
            className="home-image"
          />
        </div>
        <div id="about" className="home-about-us">
          <h1 className="home-text04 heading">About us</h1>
          <p className="home-text05 textarea">
            <span>Purple Light Services</span>
            <span>
              {' '}
              was founded by two family members to bring a new way of organising
              everybody&apos;s life. With a deep knowledge of ancient Feng Shui
              techniques and fresh ideas from the IT world, we developed a new
              level of design for people seeking to live stressless.
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
        <div className="home-section-separator"></div>
        <div id="services" className="home-services">
          <div className="home-heading-container">
            <h1 className="home-text15 Section-Heading heading">
              Our Services
            </h1>
            <span className="home-text16 Section-Text">
              We offer a unique design approach to find the best combination of
              work and life balance:
            </span>
          </div>
          <div className="home-cards-container">
            <div className="home-service-card">
              <h3 className="home-text17">
                Feng Shui for home design and architecture
              </h3>
              <p className="home-text18">
                With the help of ancient Chinese techniques you will achieve
                harmony and happiness
              </p>
            </div>
            <div className="home-service-card1">
              <h3 className="home-text19">
                Office design with modern technologies and Feng Shui
              </h3>
              <p className="home-text20">
                Intelligent electronics and minimalistic style will help you to
                be more productive and stressless
              </p>
            </div>
            <div className="home-service-card2">
              <h3 className="home-text21">
                Online consultations &amp; classes for design advancements
              </h3>
              <p className="home-text22">
                Get recommendations from us to find the best solution for your
                home and work spaces
              </p>
            </div>
          </div>
        </div>
        <div id="testimonials" className="home-testimonial">
          <h1 className="heading home-text23">
            <span>Our clients speak</span>
          </h1>
          <p className="home-text25">
            Be a part of our family and share your life changes
          </p>
          <div className="home-container2">
            <header className="home-testimonial-card">
              <svg viewBox="0 0 1024 1024" className="home-icon04">
                <path d="M800 640c-123.712 0-224-100.29-224-224 0-123.712 100.288-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.634-11.636 22.252-24.016 31.83-37.020-11.438 1.8-23.16 2.746-35.104 2.746zM224 640c-123.71 0-224-100.29-224-224 0-123.712 100.29-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.636-11.636 22.254-24.016 31.832-37.020-11.44 1.8-23.16 2.746-35.106 2.746z"></path>
              </svg>
              <div className="home-testimonial1">
                <span className="home-text26">
                  I couldn&apos;t find a way how to organise my daily life.
                  Thanks to Natalia who helped me to achieve concentration and
                  productivity at home and office.
                </span>
                <img
                  alt="profile"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fG1hbnxlbnwwfHx8fDE2Njg1ODU0NzU&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image1"
                />
                <span className="home-text27">Alex Ferguson</span>
              </div>
            </header>
            <header className="home-testimonial-card1">
              <svg viewBox="0 0 1024 1024" className="home-icon06">
                <path d="M800 640c-123.712 0-224-100.29-224-224 0-123.712 100.288-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.634-11.636 22.252-24.016 31.83-37.020-11.438 1.8-23.16 2.746-35.104 2.746zM224 640c-123.71 0-224-100.29-224-224 0-123.712 100.29-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.636-11.636 22.254-24.016 31.832-37.020-11.44 1.8-23.16 2.746-35.106 2.746z"></path>
              </svg>
              <div className="home-testimonial2">
                <span className="home-text28">
                  Feel stressless nowadays seems impossible... Thanks to Purple
                  Light Services that put harmony in my work place and improved
                  my home design.
                </span>
                <img
                  alt="profile"
                  src="https://images.unsplash.com/photo-1502767882403-636aee14f873?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDU4fHx3b21hbiU1RHxlbnwwfHx8fDE2Njg1ODU0NTQ&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image2"
                />
                <span className="home-text29">Maria McGill</span>
              </div>
            </header>
            <header className="home-testimonial-card2">
              <svg viewBox="0 0 1024 1024" className="home-icon08">
                <path d="M800 640c-123.712 0-224-100.29-224-224 0-123.712 100.288-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.634-11.636 22.252-24.016 31.83-37.020-11.438 1.8-23.16 2.746-35.104 2.746zM224 640c-123.71 0-224-100.29-224-224 0-123.712 100.29-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.636-11.636 22.254-24.016 31.832-37.020-11.44 1.8-23.16 2.746-35.106 2.746z"></path>
              </svg>
              <div className="home-testimonial3">
                <span className="home-text30">
                  Thanks to Ivan and Natalia for unique design experience. I
                  never heard before about Feng Shui, but it changed my life.
                  Today I can say that I feel more energetic and calm.
                </span>
                <img
                  alt="profile"
                  src="https://images.unsplash.com/photo-1545573237-b75186a6875d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIxNnx8YXJhYmljfGVufDB8fHx8MTY2ODU4NTM2OQ&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image3"
                />
                <span className="home-text31">
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
        <div id="contact" className="home-contact-us">
          <h2 className="home-text32 Section-Heading">Get in touch</h2>
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
              <span className="home-text36">
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
              <span className="home-text42">natalia@plservices.ru</span>
            </div>
            <div className="home-phone">
              <svg viewBox="0 0 804.5714285714286 1024" className="home-icon14">
                <path d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"></path>
              </svg>
              <span className="home-text43">+971 50 836 7818</span>
            </div>
          </div>
        </div>
        <footer className="home-footer">
          <img
            alt="image"
            src="/playground_assets/purple%20light%20services-2-1500h.png"
            className="home-image4"
          />
          <nav className="home-nav3">
            <Link href="/">
              <a className="home-link12 link">Home</a>
            </Link>
            <a href="#about" className="home-link13 link">
              About
            </a>
            <a href="#services" className="home-link14 link">
              Services
            </a>
            <a href="#testimonials" className="home-link15 link">
              Clients
            </a>
            <a href="#contact" className="home-link16 link">
              Contact
            </a>
          </nav>
          <div className="home-separator"></div>
          <div className="home-container3">
            <span className="home-text44">
              © 2022 Purple Light Services, All Rights Reserved.
            </span>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: auto;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-header {
            top: 0px;
            width: 100%;
            display: flex;
            position: sticky;
            padding-top: 1rem;
            padding-left: 3rem;
            padding-right: 3rem;
            padding-bottom: 1rem;
            background-color: var(--dl-color-main-white);
          }
          .home-navbar-interactive {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
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
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: fixed;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .home-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 48px;
            justify-content: space-between;
          }
          .home-link06 {
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
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link07 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link08 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link09 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link10 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link11 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
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
            display: flex;
            align-self: center;
            margin-top: var(--dl-space-space-fiveunits);
            margin-left: var(--dl-space-space-fiveunits);
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-text {
            color: var(--dl-color-main-heading);
            font-size: 3rem;
            align-self: flex-start;
            text-align: left;
          }
          .home-text01 {
            color: var(--dl-color-main-text);
            margin-top: 60px;
          }
          .home-image {
            width: 60%;
            margin-left: var(--dl-space-space-fiveunits);
          }
          .home-about-us {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            max-width: auto;
            min-height: 80vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text04 {
            color: var(--dl-color-main-heading);
          }
          .home-text05 {
            color: var(--dl-color-main-text);
            width: 80%;
            margin: var(--dl-space-space-fiveunits);
          }
          .home-section-separator {
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
            padding: var(--dl-space-space-fiveunits);
            max-width: auto;
            align-self: center;
            min-height: 80vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #f8f8f8;
          }
          .home-heading-container {
            width: 70%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-text15 {
            color: var(--dl-color-main-heading);
          }
          .home-text16 {
            color: #999999;
            width: 100%;
            text-align: center;
          }
          .home-cards-container {
            width: 90%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-service-card {
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            border-color: #678109;
            flex-direction: column;
          }
          .home-text17 {
            color: var(--dl-color-main-text);
            font-size: 1.5rem;
            text-align: left;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-text18 {
            color: #999999;
            font-size: 1rem;
          }
          .home-service-card1 {
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            border-color: #678109;
            flex-direction: column;
            border-left-width: 2px;
            border-right-width: 2px;
          }
          .home-text19 {
            color: var(--dl-color-main-text);
            font-size: 1.5rem;
            text-align: left;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-text20 {
            color: #999999;
            font-size: 1rem;
          }
          .home-service-card2 {
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            border-color: #678109;
            flex-direction: column;
          }
          .home-text21 {
            color: var(--dl-color-main-text);
            font-size: 1.5rem;
            text-align: left;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-text22 {
            color: #999999;
            font-size: 1rem;
          }
          .home-testimonial {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            max-width: auto;
            min-height: 80vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text25 {
            color: rgb(153, 153, 153);
            width: 100%;
            font-size: 1.15rem;
            margin-top: 1rem;
            text-align: center;
            margin-bottom: 1rem;
          }
          .home-container2 {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-testimonial-card {
            width: 30%;
            display: flex;
            padding: 32px;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-icon04 {
            width: 48px;
            margin-bottom: 32px;
          }
          .home-testimonial1 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text26 {
            color: var(--dl-color-main-text);
            font-size: 1.25rem;
            text-align: center;
            margin-bottom: 48px;
          }
          .home-image1 {
            width: 96px;
            height: 96px;
            object-fit: cover;
            flex-shrink: 0;
            border-radius: var(--dl-radius-radius-round);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text27 {
            font-size: 1.5rem;
            font-weight: 300;
          }
          .home-testimonial-card1 {
            width: 30%;
            display: flex;
            padding: 32px;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-icon06 {
            width: 48px;
            margin-bottom: 32px;
          }
          .home-testimonial2 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text28 {
            color: var(--dl-color-main-text);
            font-size: 1.25rem;
            text-align: center;
            margin-bottom: 48px;
          }
          .home-image2 {
            width: 96px;
            height: 96px;
            object-fit: cover;
            flex-shrink: 0;
            border-radius: var(--dl-radius-radius-round);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text29 {
            font-size: 1.5rem;
            font-weight: 300;
          }
          .home-testimonial-card2 {
            width: 30%;
            display: flex;
            padding: 32px;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-icon08 {
            width: 48px;
            margin-bottom: 32px;
          }
          .home-testimonial3 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text30 {
            color: var(--dl-color-main-text);
            font-size: 1.25rem;
            text-align: center;
            margin-bottom: 48px;
          }
          .home-image3 {
            width: 96px;
            height: 96px;
            object-fit: cover;
            flex-shrink: 0;
            border-radius: var(--dl-radius-radius-round);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text31 {
            font-size: 1.5rem;
            font-weight: 300;
          }
          .home-contact-us {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-color: var(--dl-color-main-background);
          }
          .home-text32 {
            color: var(--dl-color-main-heading);
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
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
          .home-text36 {
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
          .home-text42 {
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
          .home-text43 {
            font-size: 1rem;
            text-align: left;
            font-family: Raleway;
            font-weight: 400;
            line-height: 1.55;
            text-transform: none;
            text-decoration: none;
          }
          .home-footer {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 32px;
            padding-left: 48px;
            padding-right: 48px;
            flex-direction: column;
            padding-bottom: 32px;
            justify-content: space-between;
          }
          .home-image4 {
            height: 2rem;
            align-self: center;
            object-fit: cover;
          }
          .home-nav3 {
            width: 40%;
            display: flex;
            margin-top: 2rem;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-link12 {
            text-decoration: none;
          }
          .home-link13 {
            margin-left: 0px;
            text-decoration: none;
          }
          .home-link14 {
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link15 {
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link16 {
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
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
          .home-container3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
          }
          @media (max-width: 1600px) {
            .home-hero {
              min-height: 70vh;
            }
            .home-about-us {
              align-self: center;
              align-items: center;
              justify-content: flex-start;
            }
            .home-services {
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .home-service-card {
              padding: 1rem;
              justify-content: space-between;
            }
            .home-text18 {
              color: rgb(153, 153, 153);
              font-size: 1rem;
            }
            .home-service-card1 {
              padding: 1rem;
              justify-content: space-between;
            }
            .home-service-card2 {
              padding: 1rem;
            }
            .home-testimonial {
              max-width: auto;
            }
          }
          @media (max-width: 991px) {
            .home-link01 {
              font-size: 1rem;
            }
            .home-hero {
              min-height: 60vh;
              align-items: stretch;
            }
            .home-image {
              width: 50%;
            }
            .home-text23 {
              text-align: center;
            }
            .home-text25 {
              text-align: center;
            }
            .home-container2 {
              align-items: center;
              flex-direction: column;
            }
            .home-testimonial-card {
              width: 70%;
            }
            .home-testimonial-card1 {
              width: 70%;
            }
            .home-testimonial-card2 {
              width: 70%;
            }
            .home-location-1 {
              margin-bottom: var(--dl-space-space-tripleunit);
            }
          }
          @media (max-width: 767px) {
            .home-header {
              padding-left: 32px;
              padding-right: 32px;
            }
            .home-navbar-interactive {
              padding-left: 32px;
              padding-right: 32px;
            }
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
            .home-about-us {
              padding-left: 32px;
              padding-right: 32px;
            }
            .home-heading-container {
              width: 100%;
            }
            .home-cards-container {
              flex-direction: column;
            }
            .home-service-card {
              width: 100%;
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .home-service-card1 {
              width: 100%;
              margin-bottom: var(--dl-space-space-fourunits);
              border-top-width: 2px;
              border-left-width: 0px;
              border-right-width: 0px;
              border-bottom-width: 2px;
            }
            .home-service-card2 {
              width: 100%;
            }
            .home-testimonial {
              padding-left: 32px;
              padding-right: 32px;
            }
            .home-testimonial-card {
              width: 100%;
              border-color: var(--dl-color-main-heading);
              border-width: 1px;
              border-top-width: 0px;
              border-left-width: 0px;
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-icon04 {
              height: 48px;
            }
            .home-testimonial-card1 {
              width: 100%;
              border-color: var(--dl-color-main-heading);
              border-width: 1px;
              border-top-width: 0px;
              border-left-width: 0px;
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-icon06 {
              height: 48px;
            }
            .home-testimonial-card2 {
              width: 100%;
            }
            .home-icon08 {
              height: 48px;
            }
            .home-footer {
              padding-left: 32px;
              padding-right: 32px;
            }
            .home-nav3 {
              width: 100%;
              align-self: center;
            }
            .home-separator {
              margin-top: 24px;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: 24px;
            }
            .home-container3 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-text44 {
              margin-bottom: 24px;
            }
          }
          @media (max-width: 479px) {
            .home-header {
              padding: var(--dl-space-space-unit);
            }
            .home-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .home-mobile-menu {
              height: 100vh;
              padding: 16px;
            }
            .home-nav2 {
              width: 50%;
              align-self: flex-end;
              align-items: flex-end;
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
            .home-text01 {
              padding: 0px;
              margin-top: 2rem;
            }
            .home-image {
              width: 100%;
              margin-left: 0px;
            }
            .home-about-us {
              padding: 1rem;
            }
            .home-text04 {
              margin: 1rem;
            }
            .home-text05 {
              width: 100%;
              margin: 1rem;
            }
            .home-services {
              padding: 1rem;
            }
            .home-cards-container {
              width: 100%;
              flex-direction: column;
            }
            .home-service-card {
              width: 100%;
              border-color: #678109;
            }
            .home-service-card1 {
              width: 100%;
              border-top-width: 2px;
              border-left-width: 0px;
              border-right-width: 0px;
              border-bottom-width: 0px;
            }
            .home-service-card2 {
              border-color: #678109;
              border-top-width: 2px;
            }
            .home-testimonial {
              padding: 1rem;
            }
            .home-text25 {
              color: rgb(153, 153, 153);
              font-size: 1.15rem;
            }
            .home-testimonial-card {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-testimonial-card1 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-testimonial-card2 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-contact-us {
              min-height: 0px;
            }
            .home-location-1 {
              margin-right: 0px;
              margin-bottom: 0px;
            }
            .home-footer {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .home-nav3 {
              width: 100%;
              justify-content: space-between;
            }
            .home-link12 {
              margin-left: 0px;
              margin-right: 0px;
            }
            .home-link13 {
              margin-left: 0px;
              margin-right: 0px;
            }
            .home-link14 {
              margin-left: 0px;
              margin-right: 0px;
            }
            .home-link15 {
              margin-left: 0px;
              margin-right: 0px;
            }
            .home-link16 {
              margin-left: 0px;
              margin-right: 0px;
            }
            .home-separator {
              margin-top: 24px;
              margin-bottom: 24px;
            }
            .home-container3 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-text44 {
              text-align: center;
              margin-bottom: 24px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
