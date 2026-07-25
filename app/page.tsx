const photos = [
  {
    src: "/campaign/portrait-forum.jpeg",
    alt: "Alan Bluespan III speaking at a public forum",
  },
  {
    src: "/campaign/portrait-bloomberg.jpeg",
    alt: "Alan Bluespan III in a studio interview",
  },
  {
    src: "/campaign/portrait-hearing.jpeg",
    alt: "Alan Bluespan III giving testimony",
  },
];

const issues = [
  "Executive restraint",
  "Protect the ballot",
  "Civil society first",
  "Law over spectacle",
  "Crisis prevention",
  "Peaceful transfer of power",
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
          <a href="#meet">Meet Alan</a>
          <a href="#message">The Message</a>
          <a href="#issues">On the Issues</a>
          <a href="#join">Join</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Caprica 2060</p>
          <h1>Alan Bluespan III</h1>
          <p className="tagline">
            Citizen. Constitutionalist. Not a Caesar.
          </p>
        </div>
        <div className="hero-image">
          <img
            src="/campaign/portrait-bloomberg.jpeg"
            alt="Alan Bluespan III in a studio interview"
          />
        </div>
      </section>

      <section className="intro-section" aria-labelledby="who-title">
        <h2 id="who-title">Who is Alan Bluespan III?</h2>
      </section>

      <section className="feature-section" id="meet">
        <div className="section-copy">
          <p className="eyebrow">About</p>
          <h2>Meet Alan</h2>
          <p>
            Alan Bluespan III is running for president with Draqi as his running
            mate. Their campaign begins with one conviction: public office is a
            duty entrusted by citizens, not a throne.
          </p>
          <a href="#message">Learn more</a>
        </div>
        <img
          className="feature-photo"
          src="/campaign/portrait-hearing.jpeg"
          alt="Alan Bluespan III giving testimony"
        />
      </section>

      <section className="message-section" id="message">
        <div className="message-inner">
          <p className="eyebrow">The Message</p>
          <h2>The citizen is the protagonist.</h2>
          <p>
            Bluespan's campaign speech warns against leaders who let small
            failures become public crises, then mistake attention for
            accomplishment. Government should preserve a just order where a free
            civil society can compete, cooperate, and say: "we did this
            ourselves."
          </p>
        </div>
      </section>

      <section className="issues-section" id="issues">
        <div className="section-copy">
          <p className="eyebrow">Policies</p>
          <h2>On the Issues</h2>
          <p>
            A restrained executive. A protected ballot. A republic of laws,
            not vanity or ambition.
          </p>
          <a href="#join">Join the campaign</a>
        </div>
        <div className="policy-list">
          {issues.map((issue) => (
            <a href="#join" key={issue}>
              {issue}
            </a>
          ))}
        </div>
      </section>

      <section className="photo-strip" aria-label="Campaign photos">
        {photos.map((photo) => (
          <img key={photo.src} src={photo.src} alt={photo.alt} />
        ))}
      </section>

      <section className="join-section" id="join" aria-labelledby="join-title">
        <div>
          <p className="eyebrow">Join Us</p>
          <h2 id="join-title">Stand with Bluespan and Draqi.</h2>
          <p>
            Lend us the honor of serving Caprica, and help build a republic
            strong enough to belong to its citizens.
          </p>
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

      <footer>
        <img src="/campaign/bluespan-arkas-logo.png" alt="Bluespan Arkas 2060" />
        <p>Paid for by Friends of Bluespan Arkas.</p>
      </footer>
    </main>
  );
}
