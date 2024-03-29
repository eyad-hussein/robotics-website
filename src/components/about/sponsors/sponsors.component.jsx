import "./sponsors.styles.scss";

const Sponsor = ({ src, alt }) => {
  return <img src={src} alt={alt} className='sponsers__logo' />;
};

const Sponsors = ({ sponsors }) => {
  let items = sponsors.map(({ src, alt }) => {
    return <Sponsor src={src} alt={alt} />;
  });

  return (
    <section className='sponsers'>
      <h2>Meet Our Sponsers</h2>

      <div className='sponsers__box'>{items}</div>
    </section>
  );
};

export default Sponsors;
