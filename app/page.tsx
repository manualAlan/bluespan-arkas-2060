const gallery = [
  {
    src: "/campaign/portrait-forum.jpeg",
    alt: "Bluespan speaking at a foreign relations forum",
  },
  {
    src: "/campaign/portrait-bloomberg.jpeg",
    alt: "Bluespan in a studio interview",
  },
  {
    src: "/campaign/portrait-hearing.jpeg",
    alt: "Bluespan giving testimony at a hearing",
  },
  {
    src: "/campaign/portrait-piano.jpeg",
    alt: "Bluespan seated at a piano",
  },
];

const policies = [
  "Universal Basic Stability",
  "A 24-Hour Civic Service Grid",
  "Public AI With Public Oversight",
  "Fast Rail Across Every Province",
  "A New Charter for Work",
  "Climate-Ready Homes by 2068",
];

export default function Home() {
  return (
    <main>
      <header className="site-header" aria-label="Campaign navigation">
        <a className="logo-lockup" href="#top" aria-label="Bluespan Arkas home">
          <img
            src="/campaign/bluespan-arkas-logo.png"
            alt="Bluespan Arkas 2060"
          />
        </a>
        <nav aria-label="Main navigation">
          <a href="#meet">Meet Bluespan</a>
          <a href="#issues">On the Issues</a>
          <a href="#movement">The Movement</a>
        </nav>
        <a className="donate-link" href="#join">
          Join
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Caprica 2060</p>
          <h1>Bluespan Arkas</h1>
          <p className="tagline">Builder. Teacher. Future President.</p>
          <a className="primary-action" href="#join">
            Join the campaign
          </a>
        </div>
        <div className="hero-image" aria-label="Campaign portrait collage">
          <img src="/campaign/portrait-bloomberg.jpeg" alt="" />
          <div className="campaign-year">2060</div>
        </div>
      </section>

      <section className="join-band" id="join" aria-labelledby="join-title">
        <div>
          <p className="eyebrow">Sign up</p>
          <h2 id="join-title">Help build the Caprica that comes next.</h2>
        </div>
        <form>
          <label>
            <span>First name</span>
            <input type="text" name="first-name" />
          </label>
          <label>
            <span>Email</span>
            <input type="email" name="email" />
          </label>
          <label>
            <span>Postal code</span>
            <input type="text" name="postal-code" />
          </label>
          <button type="submit">Count me in</button>
        </form>
      </section>

      <section className="feature-section" id="meet">
        <div className="section-copy">
          <p className="eyebrow">About</p>
          <h2>Meet Bluespan</h2>
          <p>
            A public servant from Arkas City, Bluespan is running to make
            government feel practical, humane, and ready for the next forty
            years.
          </p>
          <a href="#movement">Learn more</a>
        </div>
        <div className="image-grid" aria-label="Campaign moments">
          {gallery.map((image) => (
            <img key={image.src} src={image.src} alt={image.alt} />
          ))}
        </div>
      </section>

      <section className="issues-section" id="issues">
        <div className="section-copy">
          <p className="eyebrow">Policies</p>
          <h2>On the Issues</h2>
          <p>
            A campaign agenda for economic resilience, democratic technology,
            clean infrastructure, and everyday dignity.
          </p>
        </div>
        <div className="policy-list">
          {policies.map((policy) => (
            <a href="#join" key={policy}>
              {policy}
            </a>
          ))}
        </div>
      </section>

      <section className="movement-section" id="movement">
        <img src="/campaign/portrait-forum.jpeg" alt="Bluespan at a forum" />
        <div>
          <p className="eyebrow">The Movement</p>
          <h2>Not left. Not right. Forward through 2060.</h2>
          <p>
            Across Caprica, volunteers are organizing neighborhood assemblies,
            civic labs, and a new generation of practical politics.
          </p>
          <a className="primary-action" href="#join">
            Volunteer today
          </a>
        </div>
      </section>

      <footer>
        <img src="/campaign/bluespan-arkas-logo.png" alt="Bluespan Arkas 2060" />
        <p>Paid for by Friends of Bluespan Arkas.</p>
      </footer>
    </main>
  );
}
