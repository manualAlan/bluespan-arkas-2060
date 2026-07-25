import type { CSSProperties } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${basePath}${path}`;

const photos = [
  {
    src: asset("/campaign/portrait-forum.jpeg"),
    alt: "Alan Bluespan III speaking at a public forum",
  },
  {
    src: asset("/campaign/portrait-bloomberg.jpeg"),
    alt: "Alan Bluespan III in a studio interview",
  },
  {
    src: asset("/campaign/portrait-hearing.jpeg"),
    alt: "Alan Bluespan III giving testimony",
  },
];

const issues = [
  "Anti-corruption",
  "Pro-growth",
  "Rule of law",
  "Executive restraint",
];

const events = [
  {
    date: "Sep 12",
    dateTime: "2060-09-12T18:30",
    type: "Presidential Town Hall",
    city: "San Vicente",
    venue: "Harbor Civic Auditorium",
    time: "6:30 PM",
  },
  {
    date: "Sep 16",
    dateTime: "2060-09-16T17:00",
    type: "Campaign Rally",
    city: "Domicilio Blanco",
    venue: "Republic Square",
    time: "5:00 PM",
  },
  {
    date: "Sep 20",
    dateTime: "2060-09-20T19:00",
    type: "Presidential Town Hall",
    city: "Montiablo",
    venue: "Montiablo Municipal Forum",
    time: "7:00 PM",
  },
  {
    date: "Sep 24",
    dateTime: "2060-09-24T18:00",
    type: "Campaign Rally",
    city: "Ambarino",
    venue: "Foundry Commons",
    time: "6:00 PM",
  },
  {
    date: "Sep 29",
    dateTime: "2060-09-29T18:30",
    type: "Presidential Town Hall",
    city: "Dubois",
    venue: "Dubois Union Hall",
    time: "6:30 PM",
  },
  {
    date: "Oct 3",
    dateTime: "2060-10-03T16:00",
    type: "Campaign Rally",
    city: "Caille",
    venue: "University Commons",
    time: "4:00 PM",
  },
  {
    date: "Oct 8",
    dateTime: "2060-10-08T19:00",
    type: "Presidential Town Hall",
    city: "Valcartier",
    venue: "Laurent Civic Theater",
    time: "7:00 PM",
  },
  {
    date: "Oct 12",
    dateTime: "2060-10-12T17:30",
    type: "Campaign Rally",
    city: "Marae Bay",
    venue: "Seafarers Pavilion",
    time: "5:30 PM",
  },
];

const timeline = [
  {
    year: "2006",
    text: "Alan is born on April 15 in Chasberg, Chasmia.",
  },
  {
    year: "2024-28",
    text: "Alan graduates cum laude from the University of Caille with degrees in law and economics.",
  },
  {
    year: "2029-40",
    text: "Alan joins Caprica's Treasury Office of Economic Analysis. He helps redesign sovereign-bond auctions and dealer rules; his work on the bond market earns him a national reputation.",
  },
  {
    year: "2041-52",
    text: "Alan co-founds Meridian Ventures, backing payment infrastructure, industrial software, and logistics firms while becoming a leading voice on technology-led productivity.",
  },
  {
    year: "2052-59",
    text: "Alan chairs the Caprica Growth Partnership, bringing pension funds, universities, manufacturers, and provincial governments together to finance ports, grid storage, and technical apprenticeships.",
  },
  {
    year: "2060",
    text: "Alan declares his candidacy for president with Draqi, promising a government of laws that returns power to its citizens.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header" aria-label="Campaign navigation">
        <a className="logo-lockup" href="#top" aria-label="Bluespan Arkas home">
          <img
            src={asset("/campaign/bluespan-arkas-logo.png")}
            alt="Bluespan Arkas 2060"
          />
        </a>
        <nav aria-label="Main navigation">
          <a href="#meet">Meet Alan</a>
          <a href="#message">The Message</a>
          <a href="#issues">On the Issues</a>
          <a href="#events">Events</a>
          <a href="#join">Join</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Caprica 2060</p>
          <h1>Alan Bluespan III</h1>
          <p className="tagline">
            <span>Caprican,</span>
            <span>Economist,</span>
            <span>Entrepreneur,</span>
            <span>Not a politician.</span>
          </p>
        </div>
        <a
          className="hero-image"
          href="https://x.com/realDonaldTrump/status/584647721883148288?s=20"
          target="_blank"
          rel="noreferrer"
          aria-label="View the linked post on X"
        >
          <img
            src={asset("/campaign/portrait-office.webp")}
            alt="Alan Bluespan III smiling in his office"
          />
        </a>
      </section>

      <section className="intro-section" aria-labelledby="who-title">
        <h2 id="who-title">Who is Alan Bluespan III?</h2>
      </section>

      <section className="feature-section" id="meet">
        <div className="section-copy">
          <p className="eyebrow">About</p>
          <h2>Meet Alan</h2>
          <p>
            Born in Chasberg, Chasmia, Alan Bluespan III is an economist,
            entrepreneur, and public servant. A cum laude graduate of the
            University of Caille, he built a national reputation at Caprica's
            Treasury, co-founded Meridian Ventures, and later chaired the
            Caprica Growth Partnership. He is running for president with Draqi
            on the belief that public office is a duty, not a throne.
          </p>
          <a href="#timeline">View Alan's timeline</a>
        </div>
        <img
          className="feature-photo"
          src={asset("/campaign/portrait-archive.jpeg")}
          alt="Alan Bluespan III reviewing papers during an early public forum"
        />
      </section>

      <section
        className="timeline-section"
        id="timeline"
        aria-labelledby="timeline-title"
        style={
          {
            "--timeline-image": `url("${asset("/campaign/portrait-podium.jpeg")}")`,
          } as CSSProperties
        }
      >
        <div className="timeline-inner">
          <p className="eyebrow">A Life of Public-Private Dedication</p>
          <h2 id="timeline-title">Alan's Timeline</h2>
          <ol className="timeline">
            {timeline.map((item) => (
              <li key={item.year}>
                <time>{item.year}</time>
                <span className="timeline-marker" aria-hidden="true" />
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="message-section" id="message">
        <div className="message-inner">
          <div className="message-copy">
            <p className="eyebrow">The Message</p>
            <h2>The citizen is the protagonist.</h2>
            <p>
              Alan believes government should serve the people, not replace
              them. Government shouldn't seek spotlight for vanity. Government
              exists to protect liberty, the constitution, and preserve the
              rule of law so that an open society can flourish. Together with
              Draqi, he will restore executive restraint, strengthen democratic
              institutions, keep military power separate from the civil
              society, and ensure no one stands above the law. The presidency
              is not a throne, but a temporary trust granted by the people.
            </p>
          </div>
          <img
            className="message-photo"
            src={asset("/campaign/message-community.webp")}
            alt="A diverse group of Capricans joining hands"
          />
        </div>
      </section>

      <section className="issues-section" id="issues">
        <div className="section-copy">
          <p className="eyebrow">Policies</p>
          <h2>On the Issues</h2>
          <p className="issues-summary">
            A restrained executive. A protected ballot. A republic of laws,
            not vanity or ambition.
          </p>
        </div>
        <div className="issues-content">
          <div className="policy-list">
            {issues.map((issue) => (
              <a href="#join" key={issue}>
                {issue}
              </a>
            ))}
          </div>
          <div className="issues-video">
            <iframe
              src="https://www.youtube.com/embed/EBtqwB9K3FA"
              title="Alan Bluespan III on the issues"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="events-section" id="events" aria-labelledby="events-title">
        <div className="events-header">
          <p className="eyebrow">On the Trail</p>
          <h2 id="events-title">Upcoming Events</h2>
          <p>
            Join Alan and Draqi for town halls and rallies across Caprica.{" "}
            <a
              className="details-link"
              href="https://youtu.be/iupPG8x_Zfo?si=vXrTA3QKo0IewfBv"
              target="_blank"
              rel="noreferrer"
            >
              Details
            </a>
          </p>
        </div>
        <div className="event-list">
          {events.map((event) => (
            <article className="event" key={`${event.date}-${event.city}`}>
              <time className="event-date" dateTime={event.dateTime}>
                {event.date}
                <span>2060</span>
              </time>
              <div className="event-details">
                <p>{event.type}</p>
                <h3>{event.city}</h3>
                <address>{event.venue}</address>
              </div>
              <p className="event-time">{event.time}</p>
            </article>
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
          <h2 id="join-title">Stand with Alan and Draqi.</h2>
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
        <p className="footer-lockup" aria-label="Bluespan Arkas 2060">
          <strong>Bluespan Arkas</strong>
          <span>2060</span>
        </p>
        <div className="footer-legal">
          <p className="paid-for">Paid for by Friends of Bluespan Arkas.</p>
          <p className="footer-fine-print">
            &copy; 2060 Friends Of Bluespan Arkas. All Rights Reserved. Privacy
            Policy. Montiablo, MB 07003
          </p>
        </div>
      </footer>
    </main>
  );
}
