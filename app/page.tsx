const gallery = [
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
  {
    src: "/campaign/portrait-piano.jpeg",
    alt: "Alan Bluespan III seated at a piano",
  },
];

const principles = [
  {
    title: "Executive Restraint",
    text: "Restore the wall between martial power and civil life, and return emergency authority to its narrow constitutional purpose.",
  },
  {
    title: "The Sacred Ballot",
    text: "Defend free elections without compromise and deny clemency to those who violate the instrument of citizenship.",
  },
  {
    title: "Citizens First",
    text: "Build a government measured by crises prevented, institutions preserved, and citizens empowered to say, 'we did this ourselves.'",
  },
];

const agenda = [
  "Civil-military firewall",
  "Election integrity compact",
  "Constitutional clemency standard",
  "Independent crisis review",
  "Civic society endowment",
  "Peaceful transfer guarantee",
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
          <a href="#speech">The Speech</a>
          <a href="#principles">Principles</a>
          <a href="#ticket">The Ticket</a>
        </nav>
        <a className="donate-link" href="#join">
          Join
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Caprica 2060</p>
          <h1>Alan Bluespan III</h1>
          <p className="tagline">
            The republic does not belong to rulers. It belongs to citizens.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#join">
              Join the campaign
            </a>
            <a className="secondary-action" href="#speech">
              Read the address
            </a>
          </div>
        </div>
        <div className="hero-image" aria-label="Campaign portrait">
          <img src="/campaign/portrait-hearing.jpeg" alt="" />
          <div className="campaign-year">2060</div>
        </div>
      </section>

      <section className="quote-band" id="speech">
        <p className="eyebrow">Campaign Address</p>
        <blockquote>
          I do not ask you to believe in me. I ask you to believe in
          yourselves, a free civil society, the true author of this nation's
          story.
        </blockquote>
        <p>
          Alan Bluespan III opened his campaign with a warning against the
          politics of spectacle: leaders who let small failures mature into
          crises, then claim credit for dramatic rescues. His campaign asks
          Caprica to choose the quieter work of stewardship over the theater of
          power.
        </p>
      </section>

      <section className="join-band" id="join" aria-labelledby="join-title">
        <div>
          <p className="eyebrow">Serve The Republic</p>
          <h2 id="join-title">Stand with Bluespan and Draqi.</h2>
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

      <section className="principles-section" id="principles">
        <div className="section-copy">
          <p className="eyebrow">A Government Of Laws</p>
          <h2>Not of vanity. Not of ambition.</h2>
          <p>
            The Bluespan campaign is built on a simple constitutional premise:
            public office is a duty entrusted by citizens, not a throne held by
            the powerful.
          </p>
        </div>
        <div className="principle-grid">
          {principles.map((principle) => (
            <article key={principle.title}>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-section" id="ticket">
        <div className="section-copy">
          <p className="eyebrow">The Ticket</p>
          <h2>Bluespan and Draqi</h2>
          <p>
            Alan Bluespan III declares his candidacy with Draqi as his running
            mate: a public servant of steadiness and integrity, united by the
            conviction that office is borrowed from the citizen.
          </p>
          <a href="#join">Join the ticket</a>
        </div>
        <div className="image-grid" aria-label="Campaign moments">
          {gallery.map((image) => (
            <img key={image.src} src={image.src} alt={image.alt} />
          ))}
        </div>
      </section>

      <section className="issues-section" id="issues">
        <div className="section-copy">
          <p className="eyebrow">Agenda</p>
          <h2>Prevent the fires politics profits from.</h2>
          <p>
            The campaign's program begins where the speech begins: prevent
            civic wounds, protect the ballot, restrain executive power, and
            leave the republic stronger than any officeholder found it.
          </p>
        </div>
        <div className="policy-list">
          {agenda.map((item) => (
            <a href="#join" key={item}>
              {item}
            </a>
          ))}
        </div>
      </section>

      <section className="movement-section">
        <img src="/campaign/portrait-forum.jpeg" alt="Bluespan at a forum" />
        <div>
          <p className="eyebrow">The Choice</p>
          <h2>Caesar or Cincinnatus.</h2>
          <p>
            Every republic must choose between popularity that erodes law and
            service that lays power down. Bluespan asks Caprica to choose the
            citizen, the constitution, and the quieter honor of restraint.
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
