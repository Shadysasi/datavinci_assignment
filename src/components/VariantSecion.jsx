import label1 from "../assets/label1.png"
import label2 from "../assets/label2.png"
import label3 from "../assets/label3.png"
import label4 from "../assets/label4.png"
import label5 from "../assets/label5.png"
import label6 from "../assets/label6.png"
import label7 from "../assets/label7.png"

const VariantSecion = () => {
  return (
    <div className='mb-6 px-4'>
        <h4>SIZE (SELECT ONE)</h4>
        <h4>Variant: 125g | 4.4oz</h4>
        <ul className="mt-4 grid grid-cols-4 gap-4">
            <li><img src={label1} alt="label 1"/></li>
            <li><img src={label2} alt="label 2"/></li>
            <li><img src={label3} alt="label 3"/></li>
            <li><img src={label4} alt="label 4"/></li>
            <li><img src={label5} alt="label 5"/></li>
            <li><img src={label6} alt="label 6"/></li>
            <li><img src={label7} alt="label 7"/></li>
        </ul>
    </div>
  )
}

export default VariantSecion