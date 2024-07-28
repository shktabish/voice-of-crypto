import React from 'react'

const Tags = () => {
  const tags = ["Power of AI", "Influencer Marketing", "Web 3.0 Influencers", "One-Stop Solution", "Revolutionary Search Tool"]

  return (
    <div className='flex flex-wrap mt-16' >
        {
            tags.map((tag, index) => (
                <div key={index} className="bg-[#272727] border-l-4 border-l-accent text-md xl:text-xl px-3 py-2 xl:px-4 xl:py-3 m-2 rounded-r-md">{tag}</div>
            ))
        }
    </div>
  )
}

export default Tags