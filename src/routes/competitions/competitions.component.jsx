import { Fragment } from "react";
import DisplayItem from "../../components/display-item/display-item.component";
import "./competitions.styles.scss";

const content = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto repellat, repellendus repudiandae et quo explicabo. Exercitationem nemo, eius magnam quidem voluptatem odit, dolores tenetur voluptate dicta, nam autem delectus eveniet?`;

const Competitions = () => {
  return (
    <Fragment>
      <main className='main'>
        <div className='display-container'>
          <DisplayItem title='competition 1' content={content} number='1' />
          <DisplayItem title='competition 1' content={content} number='2' />
          <DisplayItem title='competition 1' content={content} number='3' />
        </div>
      </main>
    </Fragment>
  );
};

export default Competitions;
