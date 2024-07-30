import { plans } from './../constants/data';
import Pricing from './Pricing';

const PricingSection = () => {
    const plansList = plans.map((plan, index) => {
        return <Pricing key={index} name={plan.name} price={plan.price} features={plan.features} />
    })

  return (
    <div className='py-10 relative' name="pricing" id="pricing" >
      <div className='mx-12 h-1 w-32 bg-accent my-10' />
      <div className='px-12 my-2 max-sm:text-2xl text-4xl font-bold' >Simple Pricing</div>
      <div className='px-12 my-2 text-accent max-sm:text-2xl text-4xl font-bold' >with no setup fee</div>
      <div className='px-12 my-2 max-sm:text-lg text-2xl font-medium' >CHOOSE THE PLAN THAT'S RIGHT FOR YOU.</div>
      <div className='flex gap-10 flex-wrap justify-center px-4 my-24' >
        {plansList}
      </div>
      <img src="./diamond.svg" alt="diamond icon" className='absolute -top-20 max-sm:left-8 left-20' />
    </div>
  )
}

export default PricingSection