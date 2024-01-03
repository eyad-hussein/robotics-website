import './cards.styles.scss';
import Card from '../card/card.component';

const content = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, similique! Ipsum fugit repudiandae dignissimos aspernatur architecto nihil, quibusdam expedita culpa est illum excepturi autem ullam rerum quis odio et. Est.";

const Cards = () => {
    return (
        <section class="cards-section">
        <div class="cards-container">
            <Card id="1" title="solidworks" content={content} date="Feb 16th, 2023" location="HQ" duration="8 weeks"/>
            <Card id="2" title="pcb design" content={content} date="Feb 16th, 2023" location="HQ" duration="8 weeks"/>
            <Card id="3" title="ros" content={content} date="Feb 16th, 2023" location="HQ" duration="8 weeks"/>
        </div>
      </section>
    );
}

export default Cards;