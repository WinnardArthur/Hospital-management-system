import './featuredInfo.scss';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

export default function FeaturedInfo({card1, card2, card3, num1, num2, num3 }) {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">{card1}</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">{num1}</span>
                    <span className="featuredMoneyRate">-11.4 
                        <ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
            </div>

            {card2 && <div className="featuredItem">
                <span className="featuredTitle">{card2}</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">{num2}</span>
                    <span className="featuredMoneyRate">-1.4 
                        <ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
            </div> }

            {card3 && <div className="featuredItem">
                <span className="featuredTitle">{card3}</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">{num3}</span>
                    <span className="featuredMoneyRate">+2.4 
                        <ArrowUpward className="featuredIcon"/>
                    </span>
                </div>
            </div>}
        </div>
    )
}
