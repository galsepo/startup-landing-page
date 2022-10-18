import { card } from "../assets";
import { feedback } from "../assets/constants";
import styles, { layout } from '../style';
import Button from "./Button"
import FeedbackCard from "./FeedbackCard";


const CardDeal = () => (
    <section className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                Find a better card deal <br className="sm:block hidden" /> in few easy
                steps.
            </h2>
            <p className={`${styles.paragraph} max-w-[450px] mt-5`}>
                Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
                aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
            </p>
            <Button styles="mt-10" />
        </div>
        <div className={layout.sectionImg}>
            <img src={card} alt="card" className="h-[100%] w-[100%]" />
        </div>



    </section>
)

export default CardDeal